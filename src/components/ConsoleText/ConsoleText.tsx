import React from 'react';
import {TypeAnimation} from "react-type-animation";

export default class ConsoleText extends React.Component {
  render() {
    return (
      <div className={"text-gray-200 text-5xl text-center"}>
        <div>Jakub Sowa</div>
        <TypeAnimation
          sequence={[
            'Fullstack Developer',
            5000,
            'Software Engineer',
            5000,
            'Coder',
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

