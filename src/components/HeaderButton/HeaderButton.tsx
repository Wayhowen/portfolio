import * as React from 'react';
import {Link} from "react-router-dom";

interface Props {
  mainText: string;
  to: string;
  customCSS?: string;
}

export default function HeaderButton(props: Props) {
  return (
    <>
      <Link to={props.to}
        className={`
          m-4 w-64 h-64
          rounded-custom
          text-xl
          group hover:scale-95
          flex items-center justify-center
          ${props.customCSS}
          `}>
          {props.mainText}
      </Link>
    </>
  );
}

