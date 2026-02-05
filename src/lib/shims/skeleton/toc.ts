// Very small Table-of-Contents crawler used by docs

export type TocItem = {
	id: string;
	label: string;
	level: number;
};

// Svelte action signature used as `use:tocCrawler={...}`
export function tocCrawler(node: HTMLElement, _options: any) {
	// No-op shim for now; real implementation can populate a store if needed
	return {
		update(_new: any) {
			// ignore
		},
		destroy() {
			// ignore
		}
	};
}
