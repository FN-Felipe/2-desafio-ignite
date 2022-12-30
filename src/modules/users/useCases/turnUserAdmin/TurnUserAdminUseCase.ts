/* eslint-disable prettier/prettier */
import { User } from "modules/users/model/User";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const mainAdmin = this.usersRepository.findById(user_id)
    this.usersRepository.turnAdmin(mainAdmin)
    return mainAdmin
  }
}

export { TurnUserAdminUseCase };

