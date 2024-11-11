import { User } from '@/users/domain/User';
import type { UserDto } from '@/users/api/userDto';

export function currentUserFromDto(user: UserDto): User {
  return new User(
    user.email,
    user.roles[0].name,
    user.username,
    user.createdAt,
    user.updatedAt,
    user.id
  );
}
