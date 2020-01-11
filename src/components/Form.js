import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import { setComplete, setIncomplete } from '../actions/form';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailValid: false,
            isNameValid: false,
            isPhoneValid: false,
            isUrlValid: false,
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
      e.preventDefault;e
      const { setMessageToComplete, setMessageToIncomplete } = this.props;
      const { isEmailValid, isNameValid, isPhoneValid, isUrlValid } = this.state;
      if (isEmailValid && isNameValid && isPhoneValid && isUrlValid) {
        setMessageToComplete();
        return;
      } 
      console.log(this.state)
      setMessageToIncomplete();
    }

    handleChange(e) {
      let regex;

      if (e.target.id === "name") {
        regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g
        this.setState({isNameValid: regex.test(e.target.value)});
      }
      if (e.target.id === "email") {
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        this.setState({isEmailValid: regex.test(e.target.value)});
      }
      if (e.target.id === "phone") {
        regex = /^\d+$/;
        this.setState({isPhoneValid: regex.test(e.target.value)});
      }
      if (e.target.id === "url") {
        regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        this.setState({isUrlValid: regex.test(e.target.value)});
      }
    }
    
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form>
                <h3>Name:
                </h3>
                <input id="name" type="text" onChange={(event) => this.handleChange(event)}/>
                <h3>Email:
                </h3>
                <input id="email" type="text" onChange={(event) => this.handleChange(event)}/>
                <h3>Phone:
                </h3>
                <input id="phone" type="text" onChange={(event) => this.handleChange(event)}/>
                <h3>Blog URL:
                </h3>
                <input id="url" type="text" onChange={(event) => this.handleChange(event)}/>
                <div className="small-6 small-centered text-center columns">
                    <a href="#" className="button success expand round text-center" onClick={this.handleSubmit}>Verify</a>
                </div>
            </form>
        </div>);
    }
}

const mapDispatchToProps = dispatch => ({
  setMessageToIncomplete: () => dispatch(setIncomplete()),
  setMessageToComplete: () => dispatch(setComplete()),
});

export default connect(null, mapDispatchToProps)(Form);
