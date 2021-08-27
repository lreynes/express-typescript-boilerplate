import { Router } from 'express';
import UserController from './controllers/UserController';

class ApiRouter {
  public router: Router;
  private userController: UserController;

  constructor(router: Router, userController: UserController) {
    this.router = router;
    this.userController = userController;

    this.router.get('/users', this.userController.listUsers);
  }
}

export default ApiRouter;
