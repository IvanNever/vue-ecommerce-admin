import { BaseRepo } from '@/infrastructure/api/BaseRepo';
import type { AuthRepo } from '@/auth/domain/AuthRepo';
import type { Token } from '@/auth/domain/Token';

const baseUrl: string = `${import.meta.env.VITE_API_BASE_URL}/auth`;

export class AuthRepoImpl extends BaseRepo implements AuthRepo {
  constructor() {
    super();
  }
  async signIn({
    email,
    password
  }: {
    email: string;
    password: string;
  }): Promise<Token> {
    const res = await this.inst.post(`${baseUrl}/sign-in`, { email, password });
    return res.data;
  }
}
