export const commonErrorParser = (error, friendlyMsg) => {
  switch (process.env.NODE_ENV) {
    case "production": {
      return friendlyMsg;
    }
    default: {
      console.log(error);
      return String(error);
    }
  }
};
