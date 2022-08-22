import React from 'react';

interface Props {
  mainText: string;
}

export default class ConsoleText extends React.Component<Props> {
  textToDisplay = "";
  i = 0;

  constructor(props: Props) {
    super(props);
    this.setLetters();
  }

  setLetters = () => {
    setTimeout(() => {
      console.log("haha")
      this.textToDisplay += this.props.mainText;
      this.i++;
      if (this.i < this.props.mainText.length) {
        this.setLetters();
      }
    }, 100)
  }

  render() {
    return (
      <>
        <div id="console">{this.textToDisplay}</div>
        <div id="console-underscore">_</div>
      </>
    );
  }
}

