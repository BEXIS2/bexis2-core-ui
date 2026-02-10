// Ensure this file ends in .svelte.ts
import { notificationType, type notificationStoreType, type notificationItemType } from './types';

class NotificationManager {
    // 1. Define the reactive state
    #state = $state<notificationStoreType | undefined>(undefined);

    // 2. Public getters (replacing the manual subscribe/getBtnStyle logic)
    get current() {
        return this.#state;
    }

    get btnStyle() {
        return this.#state?.btnStyle ?? 'btn-icon btn-icon-sm preset-filled-surface-500 shadow-md';
    }

    // 3. Methods to update state
    setNotification(notificationItem: notificationItemType) {
        const type = notificationItem.notificationType ?? notificationType.surface;
        
        const btnStyleMap = {
            [notificationType.success]: 'btn-icon btn-icon-sm preset-filled-success-500 shadow-md',
            [notificationType.warning]: 'btn-icon btn-icon-sm preset-filled-warning-500 shadow-md',
            [notificationType.error]: 'btn-icon btn-icon-sm preset-filled-error-500 shadow-md',
            [notificationType.surface]: 'btn-icon btn-icon-sm preset-filled-surface-500 shadow-md',
        };

        const btnStyle = btnStyleMap[type as keyof typeof btnStyleMap] || btnStyleMap[notificationType.surface];

        // Simply assign to the state; Svelte handles the reactivity
        this.#state = {
            notificationType: type,
            message: notificationItem.message,
            btnStyle
        };
    }

    showNotification(notificationItem: notificationItemType) {
        // No need to "clear" manually; setting new state triggers the update
        this.setNotification(notificationItem);
    }

    clear() {
        this.#state = undefined;
    }
}

// Export a single instance (Singleton pattern)
export const notificationManager = new NotificationManager();