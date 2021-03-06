import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    state = {
        message: '',
        author: ''
    };

    updateMessage = (event) => {
        this.setState({message: event.target.value});
    };

    updateAuthor = (event) => {
        this.setState({author: event.target.value});
    };

    submitForm = (event) => {
        event.preventDefault();
        this.props.publishMessage({...this.state});
    };

    render() {
        return (
            <form onSubmit={event => this.submitForm(event)}>
                <label htmlFor="message">Messsage:</label>
                <input type="text" id="message" placeholder="Some message ..." onChange={(event) => this.updateMessage(event)} />

                <label htmlFor="author">Author:</label>
                <input type="text" id="author" placeholder="Student" onChange={event => this.updateAuthor(event)}/>
                <button type="submit" id="btn-addMsg" className="btn btn-info">Send</button>
            </form>
        );
    }
}

export default Form;