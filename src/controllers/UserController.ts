/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';

import * as UserApiError from '../core/UserApiError';
import User from '../models/users/User';

import UserService from '../services/UserService';
import LoggerService from '../utils/LoggerService';

class UserController {
  private logger: LoggerService;
  private userService: UserService;

  constructor(logger: LoggerService, userService: UserService) {
    this.logger = logger;
    this.userService = userService;
  }

  /**
   * @api {get} api/v1/users
   * @apiDescription List users
   * @apiName list_users
   * @apiGroup user
   * @apiSuccess {User[]} Return the list of users
   * @apiError 500 User request failed
   */
  listUsers = async (_req: Request, res: Response) => {
    return this.userService
      .listUsers()
      .then((users: User[]) => {
        res.status(201).json(users);
      })
      .catch((error) => {
        this.logger.fatal(error);
        res.status(500).json(UserApiError.requestFailed());
      });
  };
}

export default UserController;
