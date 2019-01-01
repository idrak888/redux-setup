import React, { Component } from 'react';
import { connect } from 'react-redux';

class Container1 extends Component {
    state = {
        text: ''
    }
    send = () => {
        var text = document.querySelector('.text').value;
        this.setState({text});
        setTimeout(() => {
            this.props.onSend(this.state.text);
        }, 100);
        
    }
    render() {
        return (
            <div className="Container1">
                <input type="text" className="text"/><br/>
                <button onClick={this.send}>Send</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSend: (text) => dispatch({type: 'ON_SEND', text})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1);