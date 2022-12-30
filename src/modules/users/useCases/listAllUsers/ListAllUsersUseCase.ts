/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] {
    const mainAdmin = this.usersRepository.findById(user_id)
    const { admin } = mainAdmin
    if (admin === false) throw new Error("You is not admin")
    const list = this.usersRepository.list()
    return list
  }
}

export { ListAllUsersUseCase };

