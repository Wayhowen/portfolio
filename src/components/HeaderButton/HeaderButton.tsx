import * as React from 'react';
import {Link} from "react-router-dom";

interface Props {
  mainText: string;
  to: string;
  customCSS?: string;
  index: number
}

export default function HeaderButton(props: Props) {
  return (
    <>
      <Link to={props.to}
        className={`
          m-4 w-64 h-64
          flex-grow-0 shrink-0
          rounded-custom shadow-inner
          text-2xl
          group hover:scale-95 click:scale-95
          flex items-center justify-center
          ${props.index % 2 === 0 ? "animate-slideInLeft" : "animate-slideInRight"}
          ${props.customCSS}
          `}>
          {props.mainText}
      </Link>
    </>
  );
}

