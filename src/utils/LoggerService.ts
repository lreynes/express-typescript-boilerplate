import { ILogObject, Logger } from 'tslog';

class LoggerService {
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  info(message: string): ILogObject {
    return this.logger.info(message);
  }

  warn(message: string): ILogObject {
    return this.logger.warn(message);
  }

  debug(message: string): ILogObject {
    return this.logger.debug(message);
  }

  trace(message: string): ILogObject {
    return this.logger.trace(message);
  }

  fatal(message: string): ILogObject {
    return this.logger.fatal(message);
  }

  error(message: string): ILogObject {
    return this.logger.error(message);
  }
}

export default LoggerService;
