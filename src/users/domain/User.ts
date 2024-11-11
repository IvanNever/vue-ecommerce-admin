import { Entity } from '@/common/domain/Entity';

export class User extends Entity {
  public constructor(
    private _email: string,
    private _role: string,
    private _username: string,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    id?: number
  ) {
    super(id);
  }

  public get email(): string {
    return this._email;
  }

  public get role(): string {
    return this._role;
  }

  public get username(): string {
    return this._username;
  }
}
