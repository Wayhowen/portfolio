import * as React from 'react';

interface Props {
  mainText: string;
  customCSS?: string;
}

export default function HeaderButton(props: Props) {
    return (
      <>
        <button
          className={`
          m-4 w-64 h-64
          rounded-custom

          ${props.customCSS}
          `}>{props.mainText}</button>
      </>
    );
}

