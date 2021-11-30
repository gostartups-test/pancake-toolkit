import React from "react";
import { useTheme } from "styled-components";
import noProfileAccount from'./account.svg';

import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <img  src={noProfileAccount} alt="img"/>
  );
};

export default Icon;
