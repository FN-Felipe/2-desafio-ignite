/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    this.usersRepository.findById(user_id)
    const list = this.usersRepository.list()
    const listUser = list.find(user => user.id === user_id)
    return listUser
  }
}

export { ShowUserProfileUseCase };
