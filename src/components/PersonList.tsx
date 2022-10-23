import React from "react";
import { Name } from "./Person.types";

type PersonListProps = {
  name: Name[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.name.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
