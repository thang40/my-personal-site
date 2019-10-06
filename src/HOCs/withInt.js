import React, { useContext } from "react";
import { LanguageContext } from "../contexts";

export const withInt = Comp => {
  return React.forwardRef((props, ref) => {
    const { translate, datetimeFormat } = useContext(LanguageContext);
    return (
      <Comp
        translate={translate}
        datetimeFormat={datetimeFormat}
        {...props}
        ref={ref}
      />
    );
  });
};
