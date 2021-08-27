import express, { Application, Router } from 'express';
import cors from 'cors';
import ApiRouter from './router';
import knex from 'knex';
import knexConfiguration from './config/knexfile';
import { execSync } from 'child_process';

import UserController from './controllers/UserController';

import UserService from './services/UserService';
import LoggerService from './utils/LoggerService';

import UserRepository from './repositories/UserRepository';

import { port, firebaseConfig } from './config/envConfig';
import * as admin from 'firebase-admin';

export default class Server {
  public app: Application = express();
  private router: Router = Router();
  private db = knex(knexConfiguration);
  private firebaseInstance = admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: 'https://localhost.com'
  });

  private loggerService = new LoggerService();

  private userRepository = new UserRepository(this.db);

  private userService = new UserService(this.userRepository);

  private userController = new UserController(this.loggerService, this.userService);

  private apiRouter = new ApiRouter(this.router, this.userController);

  constructor() {
    this.loggerService.info(`API is listening on port ${currentPort}!`);

    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(this.catchError);

    this.app.get('/health', this.healthStatus);
    this.app.use('/api/v1/', this.apiRouter.router);
  }

  private healthStatus = async (_req: express.Request, res: express.Response) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: new Date().toISOString(),
      commit: this.getGitCommitHash()
    };
    try {
      res.send(healthcheck);
    } catch (e) {
      healthcheck.message = e;
      res.status(503).send();
    }
  };

  private getGitCommitHash(): string {
    return execSync('git rev-parse HEAD').toString().trim();
  }

  private catchError = async (
    err: unknown,
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (!err) {
      return next();
    }
    res.status(500).send('Something broke!');
  };
}

const currentPort = port ?? 4000;
new Server().app.listen(currentPort);
