import type { Token } from '@/auth/domain/Token';
import type { User } from '@/users/domain/User';

export interface AuthRepo {
  singIn({ email: string, password: string }): Promise<Token>;
  getCurrentUser(): Promise<User>;
}
