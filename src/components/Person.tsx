import React from "react";
import { personProp } from "./Person.types";

function Person({ name }: personProp) {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
}

export default Person;
