export class ApiError {
  code: number;
  message: string;

  constructor(code: number, message: string) {
    this.code = code;
    this.message = message;
  }

  public toJson(): ApiErrorObject {
    return {
      error: {
        code: this.code,
        message: this.message
      }
    };
  }
}

type ApiErrorObject = {
  error: {
    code: number;
    message: string;
  };
};
