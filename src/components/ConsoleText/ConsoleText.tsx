import React from 'react';
import {TypeAnimation} from "react-type-animation";
import {Link} from "react-router-dom";

export default class ConsoleText extends React.Component {
  render() {
    return (
      <Link to={"/"} className={"text-gray-200 text-2xl font-bold md:text-4xl lg:text-5xl text-center"} >
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
      </Link>
    );
  }
}

