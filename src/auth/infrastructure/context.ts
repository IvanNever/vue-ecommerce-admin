import { createContext } from '@/infrastructure/context';
import { AuthRepoImpl } from '@/auth/api/authRepoImpl';

export let authContext;

export function initAuthContext() {
  authContext = createContext();
  authContext.registry(AuthRepoImpl, 'AuthRepo');
}
