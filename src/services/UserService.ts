import User from '../models/users/User';
import UserRepository from '../repositories/UserRepository';

class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async listUsers(): Promise<User[]> {
    return this.userRepository.listUsers();
  }
}

export default UserService;
