import { ref } from 'vue';

const isOpen = ref<boolean>(false);
const message = ref<string>('');

function showNotification(newMessage: string) {
  isOpen.value = true;
  message.value = newMessage;
  setTimeout(() => {
    message.value = '';
  }, 3000);
}

export function useNotification() {
  return { isOpen, message, showNotification };
}
