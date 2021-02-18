import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const initialValues = {
  email: '',
  password: '',
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...initialValues });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={email}
          className={styles.input}
          placeholder='Username'
          type='email'
          name='email'
        ></input>
        <input
          onChange={this.handleChange}
          value={password}
          className={styles.input}
          placeholder='Password'
          type='password'
          name='password'
        ></input>
        <input className={styles.input} type='submit'></input>
      </form>
    );
  }
}

export default SignInForm;

/*
<input
          // onChange={this.handleChange}
          value={password}
          className={styles.input}
          placeholder='Password'
          type='password'
          name='password'
        ></input> */
