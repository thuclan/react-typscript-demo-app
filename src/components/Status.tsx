import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "Data fected successfully!";
  } else if (props.status === "error") {
    message = "Error fetching data";
  }
  return <div>Status - {message}</div>;
}

export default Status;
