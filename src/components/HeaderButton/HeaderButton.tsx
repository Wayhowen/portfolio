﻿import * as React from 'react';
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
          outline
          rounded-custom shadow-inner
          text-2xl
          group hover:scale-95 click:scale-95
          transition-all duration-300
          flex items-center justify-center
          ${props.customCSS}
          `}>
          {props.mainText}
      </Link>
    </>
  );
}

