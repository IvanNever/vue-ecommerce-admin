import { ref } from 'vue';
import type { NotificationType } from '@/ui-kit/commonTypes';

const isOpen = ref<boolean>(false);
const message = ref<string>('');
const type = ref<NotificationType>('info');

function showNotification(newMessage: string, newType?: NotificationType) {
  isOpen.value = true;
  message.value = newMessage;
  if (newType) type.value = newType;
}

export function useNotification() {
  return { isOpen, message, type, showNotification };
}
