import { ref } from 'vue';

const user = ref<any>(null);
const isAuthenticated = ref<boolean>(false);
export function useAuth() {
  async function signIn() {
    localStorage.setItem('isAuthenticated', 'true');
    isAuthenticated.value = true;
  }

  async function signOut() {
    localStorage.removeItem('isAuthenticated');
    isAuthenticated.value = false;
    window.open('/login', '_self');
  }

  return {
    user,
    isAuthenticated,
    signIn,
    signOut
  };
}
