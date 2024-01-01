import React from "react";

const sizeClasses = {
  txtPoppinsRegular24Bluegray100: "font-normal font-poppins",
  txtPoppinsMedium16Gray30001: "font-medium font-poppins",
  txtPoppinsSemiBold72: "font-poppins font-semibold",
  txtPoppinsBold32: "font-bold font-poppins",
  txtPoppinsMedium16WhiteA700: "font-medium font-poppins",
  txtPoppinsBold12: "font-bold font-poppins",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtPoppinsMedium24: "font-medium font-poppins",
  txtPoppinsMedium16Gray300: "font-medium font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsRegular24: "font-normal font-poppins",
  txtPoppinsSemiBold16: "font-poppins font-semibold",
  txtPoppinsRegular40: "font-normal font-poppins",
  txtPoppinsMedium40: "font-medium font-poppins",
  txtPoppinsRegular24Gray600: "font-normal font-poppins",
  txtPoppinsMedium48: "font-medium font-poppins",
  txtPoppinsMedium16: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
