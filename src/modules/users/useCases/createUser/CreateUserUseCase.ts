/* eslint-disable prettier/prettier */
import { User } from "modules/users/model/User";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    const verifyEmail = this.usersRepository.findByEmail(email)
    if(verifyEmail !== undefined) {
      throw new Error("Email already exist")
    }
    const user = this.usersRepository.create({ name, email })
    return user
  }
}

export { CreateUserUseCase };

