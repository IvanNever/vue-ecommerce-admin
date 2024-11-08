import { publicContext } from '@/infrastructure/context';
import type { AxiosInstance } from 'axios';
import type { ApiCore } from '@/infrastructure/api/ApiCore';

export class BaseRepo {
  protected apiCore: ApiCore;

  constructor() {
    this.apiCore = publicContext.get<ApiCore>('ApiCore');
  }

  protected get inst(): AxiosInstance {
    return this.apiCore.getInst();
  }
}
