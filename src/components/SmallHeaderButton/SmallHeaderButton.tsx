import * as React from 'react';
import {Link} from "react-router-dom";
import {ReactNode} from "react";
import { IconContext } from "react-icons";

interface Props {
  mainText: string;
  to: string;
  customCSS?: string;
  index: number
  icon: ReactNode
}

export default function SmallHeaderButton(props: Props) {
  return (
    <>
      <Link to={props.to}
            className={`
          m-4 w-24 h-24
          flex-grow-0 shrink-0
          outline
          rounded-full shadow-inner
          text-xl
          group hover:translate-y-[-3px] hover:scale-95 click:scale-95
          transition-all duration-300
          flex items-center justify-center
          bg-indigo-500/25
          ${props.customCSS}
          `}>
        <IconContext.Provider value={{color: "white", className: "global-class-name"}}>
          {props.icon}
        </IconContext.Provider>
      </Link>
    </>
  );
}

