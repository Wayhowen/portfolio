import React from 'react';

interface Props {
  mainText: string;
}

export default class HeaderButton extends React.Component<Props> {
  render() {
    return (
      <>
        <button className="w-1/2 h-1/2">{this.props.mainText}</button>
      </>
    );
  }
}

