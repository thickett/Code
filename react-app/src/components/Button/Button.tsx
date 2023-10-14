import React, { useState } from "react";
import button_styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  colour?: "primary" | "secondary" | "success" | "danger";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  colour = "primary",
  className = [button_styles.buttonStandard, button_styles.buttonShadow].join(
    " "
  ),
  onClick,
}: Props) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
