import React from "react";
import Greet from "../Greet";

function CustomComponent(props: React.ComponentProps<typeof Greet>) {
  console.log(props);

  return <div>{props.name}</div>;
}

export default CustomComponent;
