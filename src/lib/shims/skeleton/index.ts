import AppShell from './AppShell.svelte';
import TableOfContents from './TableOfContents.svelte';
import CodeBlock from './CodeBlock.svelte';
import Dialog from './Modal.svelte';
import Paginator from './Paginator.svelte';
import TreeView from './TreeView.svelte';
import TreeViewItem from './TreeViewItem.svelte';
import AppRail from './AppRail.svelte';
import AppRailTile from './AppRailTile.svelte';
import LightSwitch from './LightSwitch.svelte';

export {
	AppShell,
	TableOfContents,
	CodeBlock,
	Dialog,
	Paginator,
	TreeView,
	TreeViewItem,
	AppRail,
	AppRailTile,
	LightSwitch,
};

export * from './stores';
export * from './popup';
export * from './drawer';
export * from './localStorage';
export * from './toc';
export * from './types';

export function setInitialClassState(): void {
	// no-op stub used in docs navigation
}
