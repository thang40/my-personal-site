import moment from "moment";
import "moment/locale/vi";
moment.locale("en");

export const datetimeUtils = {
  setLocale: locale => {
    moment.locale(locale);
  },
  format: datetimeStr => {
    return moment(datetimeStr).format("LL");
  }
};
