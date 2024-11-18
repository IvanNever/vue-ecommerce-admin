import { ref } from 'vue';
import type { User } from '../domain/User';
import { apiErrors } from '@/infrastructure/utils/apiErrors';
import { useNotification } from '@/ui-kit/appNotification/useNotification';
import { usersContext } from '@/users/infrastructure/context';
import type { UsersRepo } from '@/users/domain/usersRepo';

export function useUsers() {
  const userRepo = usersContext.get<UsersRepo>('UsersRepository');
  const { showNotification } = useNotification();

  const users = ref<User[]>([]);
  const isLoading = ref(false);

  async function getUsers(): Promise<void> {
    try {
      isLoading.value = true;
      users.value = await userRepo.getUsers();
    } catch (err) {
      showNotification(apiErrors(error), 'error');
    } finally {
      isLoading.value = false;
    }
  }

  return { users, isLoading, getUsers };
}
