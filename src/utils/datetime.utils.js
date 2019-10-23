import moment from "moment";
import "moment/locale/vi";

export const setLocale = locale => {
  moment.locale(locale);
};

export const format = (datetimeStr, format = "LL") => {
  return moment(datetimeStr).format(format);
};

export default {
  setLocale,
  format
};
