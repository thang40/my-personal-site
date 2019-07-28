import React from "react";
import { Avatar as AndtAvatar } from "antd";
import { animated } from "react-spring";

export const Avatar = ({ style }) => {
  return (
    <animated.div style={{ ...style }}>
      <AndtAvatar
        shape="square"
        size={128}
        icon="user"
        src="https://api.adorable.io/avatars/285/abott@adorable.png"
      />
    </animated.div>
  );
};
