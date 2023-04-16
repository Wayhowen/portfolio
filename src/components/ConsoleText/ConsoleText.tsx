import React from 'react';
import {TypeAnimation} from "react-type-animation";

export default class ConsoleText extends React.Component {
  render() {
    return (
      <div className={"text-gray-200 text-5xl"}>
        <TypeAnimation
          sequence={[
            'Jakub Sowa - Fullstack Developer',
            5000,
            'Jakub Sowa - Software Engineer',
            5000,
            'Jakub Sowa - Coder',
            5000
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
        />
      </div>
    );
  }
}

