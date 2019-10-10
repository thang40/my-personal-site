import React, { useContext } from "react";
import { languageContext } from "../contexts";

export const withInt = Comp => {
  return React.forwardRef((props, ref) => {
    const { translate, datetimeFormat } = useContext(languageContext);
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
