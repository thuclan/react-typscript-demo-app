import React from "react";

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

function Toast({ position }: ToastProps) {
  return <div>Toast - {position}</div>;
}

export default Toast;
