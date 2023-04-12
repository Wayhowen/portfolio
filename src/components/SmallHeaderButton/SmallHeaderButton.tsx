import * as React from 'react';
import {Link} from "react-router-dom";

interface Props {
  mainText: string;
  to: string;
  customCSS?: string;
  index: number
}

export default function SmallHeaderButton(props: Props) {
  return (
    <>
      <Link to={props.to}
            className={`
          m-4 w-16 h-16
          flex-grow-0 shrink-0
          rounded-custom shadow-inner
          text-xl
          group hover:scale-95 click:scale-95
          flex items-center justify-center
          ${props.customCSS}
          `}>
        {props.mainText.split(" ").map(string => string[0].toUpperCase()).join("")}
      </Link>
    </>
  );
}

