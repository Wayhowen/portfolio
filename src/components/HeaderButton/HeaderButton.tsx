import React from 'react';

interface Props {
  mainText: string;
}

export default class HeaderButton extends React.Component<Props> {
  render() {
    return (
      <>
        <button className="w-64 h-64">{this.props.mainText}</button>
      </>
    );
  }
}

