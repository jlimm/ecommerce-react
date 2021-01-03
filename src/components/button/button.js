import React from "react";
import { CustomButtonContainer } from "./button.styles";

const CustomButtom = ({ children, ...props }) => {
  return (
    <CustomButtonContainer className="Heading" {...props}>
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButtom;
