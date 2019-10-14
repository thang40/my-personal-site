export class APIError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "API Error";
  }
}
