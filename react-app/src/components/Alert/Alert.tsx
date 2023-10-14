// note here we just used type "rafce" and it generated the boilerplate code!!

import { ReactNode } from "react";
import button_styles from "../Button/Button.module.css";

interface alertProp {
  alertType?: "primary" | "secondary" | "danger";
  children?: ReactNode; //all props support children, it allows us to pass content as a child to the element rather than a parameter
  onClose?: () => void;
  allowClose?: boolean;
}

const Alert = ({
  alertType = "primary",
  children = <p>default text</p>,
  onClose,
  allowClose = true,
}: alertProp) => {
  return (
    <div
      className={"alert alert-" + alertType + " alert-dismissible fade show"}
      role="alert"
    >
      {children}
      {allowClose && (
        <button
          type="button"
          className={[
            "btn-close",
            button_styles.buttonResize,
            button_styles.buttonPad,
          ].join(" ")}
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      )}
    </div>
  );
};

export default Alert;
