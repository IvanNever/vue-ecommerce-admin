import { BaseRepo } from '@/infrastructure/api/BaseRepo';
import { userFromDto } from './userDtoMapper';
import { User } from '../domain/User';
import type { UsersRepo } from '../domain/usersRepo';
import type { UserDto } from './userDto';

const baseUrl: string = `${import.meta.env.VITE_API_BASE_URL}/users`;

export class UsersRepoImpl extends BaseRepo implements UsersRepo {
  constructor() {
    super();
  }
  async getUsers(): Promise<User[]> {
    const res = await this.inst.get<UserDto[]>(baseUrl);
    return res.data.map((item) => userFromDto(item));
  }
  // async getUser(id: number): Promise<User> {
  //   const res = await this.inst.get<UserDto>(`${baseUrl}/post/${id}`);
  //   return userFromDto(res.data);
  // }
  // async createUser(User: User): Promise<User> {
  //   const res = await this.inst.post<UserDto>(`${baseUrl}/post`, {
  //     User: User
  //   });
  //   return userFromDto(res.data);
  // }
  // async updateUser(User: User): Promise<User> {
  //   const res = await this.inst.put<UserDto>(`${baseUrl}/post`, { User: User });
  //   return userFromDto(res.data);
  // }
  // async deleteUser(id: number): Promise<void> {
  //   return await this.inst.delete(`${baseUrl}/post/${id}`);
  // }
}
