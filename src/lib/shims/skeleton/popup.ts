import { writable, type Unsubscriber } from 'svelte/store';

export type PopupSettings = {
	event?: 'click' | 'hover' | string;
	target?: string; // value of data-popup="..."
	placement?: string;
	closeQuery?: string; // CSS selector inside popup that closes it
	[key: string]: any;
};

// Global configuration store: set elsewhere with Floating UI helpers
// { computePosition, autoUpdate, offset, shift, flip, arrow }
export const storePopup = writable<any>(null);

// Svelte action: `use:popup={settings}`
export function popup(node: HTMLElement, settings: PopupSettings) {
	let currentSettings: PopupSettings = settings ?? {};
	let target: HTMLElement | null = null;
	let isOpen = false;
	let floatingConfig: any;
	let storeUnsub: Unsubscriber | null = null;
	let outsideClickHandler: ((e: MouseEvent) => void) | null = null;
	let targetClickHandler: ((e: MouseEvent) => void) | null = null;

	function subscribeConfig() {
		if (storeUnsub) return;
		storeUnsub = storePopup.subscribe((value) => {
			floatingConfig = value;
		});
	}

	function getTarget() {
		if (!currentSettings.target) return null;
		const selector = `[data-popup="${currentSettings.target}"]`;
		return document.querySelector(selector) as HTMLElement | null;
	}

	function hideTarget() {
		if (!target) return;
		target.style.display = 'none';
		target.dataset.popupOpen = 'false';
		isOpen = false;
	}

	async function positionTarget() {
		if (!target || !floatingConfig?.computePosition) return;
		try {
			const middleware: any[] = [];
			if (floatingConfig.offset) middleware.push(floatingConfig.offset(8));
			if (floatingConfig.flip) middleware.push(floatingConfig.flip());
			if (floatingConfig.shift) middleware.push(floatingConfig.shift({ padding: 8 }));

			const { x, y } = await floatingConfig.computePosition(node, target, {
				placement: currentSettings.placement ?? 'bottom-start',
				middleware
			});

			Object.assign(target.style, {
				position: 'absolute',
				left: `${x}px`,
				top: `${y}px`
			});
		} catch (e) {
			// fail silently; positioning is a progressive enhancement
		}
	}

	async function showTarget() {
		if (!target) return;
		target.style.display = '';
		target.dataset.popupOpen = 'true';
		isOpen = true;
		await positionTarget();
	}

	function handleOutsideClick(e: MouseEvent) {
		if (!target) return;
		const clickTarget = e.target as Node;
		if (node.contains(clickTarget) || target.contains(clickTarget)) return;
		hideTarget();
	}

	function handleTargetClick(e: MouseEvent) {
		if (!target || !currentSettings.closeQuery) return;
		const clicked = e.target as HTMLElement | null;
		if (clicked && clicked.closest(currentSettings.closeQuery)) {
			hideTarget();
		}
	}

	async function togglePopup(e: Event) {
		if (currentSettings.event === 'click') {
			e.preventDefault();
		}
		if (!target) {
			target = getTarget();
		}
		if (!target) return;

		if (isOpen) {
			hideTarget();
		} else {
			await showTarget();
		}
	}

	function init() {
		subscribeConfig();
		target = getTarget();
		if (target) {
			// start hidden
			hideTarget();
			// listen for internal close triggers
			targetClickHandler = (e: MouseEvent) => handleTargetClick(e);
			target.addEventListener('click', targetClickHandler);
		}

		// outside click listener
		outsideClickHandler = (e: MouseEvent) => handleOutsideClick(e);
		document.addEventListener('click', outsideClickHandler);

		const evt = currentSettings.event ?? 'click';
		node.addEventListener(evt, togglePopup);
	}

	function cleanup() {
		const evt = currentSettings.event ?? 'click';
		node.removeEventListener(evt, togglePopup);

		if (outsideClickHandler) {
			document.removeEventListener('click', outsideClickHandler);
			outsideClickHandler = null;
		}

		if (target && targetClickHandler) {
			target.removeEventListener('click', targetClickHandler);
			targetClickHandler = null;
		}

		if (storeUnsub) {
			storeUnsub();
			storeUnsub = null;
		}
	}

	init();

	return {
		update(newSettings: PopupSettings) {
			cleanup();
			currentSettings = newSettings ?? {};
			target = null;
			isOpen = false;
			init();
		},
		destroy() {
			cleanup();
		}
	};
}
