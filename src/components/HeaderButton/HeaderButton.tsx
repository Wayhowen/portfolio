import React from 'react';

interface Props {
  mainText: string;
}

export default class HeaderButton extends React.Component<Props> {
  render() {
    return (
      <button className="header-button">{this.props.mainText}</button>
    );
  }
}

