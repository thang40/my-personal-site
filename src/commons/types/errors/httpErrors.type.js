export class HTTPError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "HTTP Error";
  }
}

export class HTTPTimeoutError extends HTTPError {
  constructor(msg) {
    super(msg);
    this.name = "HTTP Timeout Error";
  }
}
