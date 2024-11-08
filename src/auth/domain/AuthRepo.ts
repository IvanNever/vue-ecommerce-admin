import type { Token } from '@/auth/domain/Token';

export interface AuthRepo {
  singIn({ email: string, password: string }): Promise<Token>;
}
