import { Component } from 'react';
import axios from 'axios';

class RenderPropsForIsOpen extends Component {
  state = {
    data: {},
  };

  componentDidMount = () => {
    const { url } = this.props;
    axios.get(url).then(({ data }) => {
      this.setState({ data });
    });
  };

  render() {
    const { data } = this.state;
    const { children } = this.props;

    return children({
      data,
    });
  }
}

export default RenderPropsForIsOpen;
