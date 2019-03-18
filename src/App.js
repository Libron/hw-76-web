import React, { Component } from 'react';
import {connect} from "react-redux";

import {fetchMessages, publishMessage} from "./store/actions";
import Form from "./components/Form/Form";
import ChatBox from "./components/ChatBox/ChatBox";

import './App.css';

class App extends Component {
    interval = null;

    componentDidMount() {
        this.interval = setInterval(() => {
            this.props.fetchMessages();
        }, 3000);
    };

    componentWillUnmount() {
        clearInterval(this.interval)
    };

  render() {
    return (
      <div className="App">
        <Form publishMessage={this.props.publishMessage} />
          <ChatBox messages={this.props.messages}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchMessages: () => dispatch(fetchMessages()),
        publishMessage: (message) => dispatch(publishMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);