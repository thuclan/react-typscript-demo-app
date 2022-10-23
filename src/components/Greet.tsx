import React from "react";

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggerIn: boolean;
};

function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggerIn
          ? `Welcome ${props.name}! You have ${messageCount} unread messages`
          : `Welcome Guest`}
      </h2>
    </div>
  );
}

export default Greet;
