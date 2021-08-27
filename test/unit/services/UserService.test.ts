import { instance, mock, verify, when } from 'ts-mockito';

import UserService from '../../../src/services/UserService';

import UserRepository from '../../../src/repositories/UserRepository';

describe('UserService', () => {
  let userRepository: UserRepository;
  let userRepositoryMock: UserRepository;

  let userService: UserService;

  beforeEach(() => {
    userRepositoryMock = mock(UserRepository);
    userRepository = instance(userRepositoryMock);

    userService = new UserService(userRepository);
  });

  it('should list users successfully', async () => {
    await userService.listUsers();
    verify(userRepositoryMock.listUsers()).called();
  });
});
