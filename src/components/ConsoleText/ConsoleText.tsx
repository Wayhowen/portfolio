import React, {useEffect} from 'react';

interface Props {
  mainText: string;
}

interface State {
  textToDisplay: string,
  underscoreVisible: boolean
}

export default class ConsoleText extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      textToDisplay: "",
      underscoreVisible: true
    }
  }

  componentDidMount() {
    this.setLetters();

    setInterval(() => {
      this.setState({
        ...this.state,
        underscoreVisible: !this.state.underscoreVisible
      })
    }, 800)
  }

  setLetters = () => {
    setTimeout(() => {
      this.setState({
        textToDisplay: this.props.mainText.slice(0, this.state.textToDisplay.length + 1),
      });
      if (this.state.textToDisplay.length < this.props.mainText.length) {
        this.setLetters();
      }
    }, 100)
  }

  underscore = () => {
    return this.state.underscoreVisible ? "_" : "\u00A0";
  }

  render() {
    return (
      <div className={"text-green-500 text-5xl text-center"}>
        <div>{this.state.textToDisplay.concat(this.underscore())}</div>
      </div>
    );
  }
}

