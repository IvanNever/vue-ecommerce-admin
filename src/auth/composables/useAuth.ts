import { ref } from 'vue';
import type { User } from '@/users/domain/User';
import type { Token } from '@/auth/domain/Token';

const user = ref<User | null>(null);
const token = ref<Token | null>(null);

export function useAuth() {
  return {
    user,
    token
  };
}
