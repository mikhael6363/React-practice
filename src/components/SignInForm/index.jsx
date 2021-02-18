import React, { Component } from 'react';
import cx from 'classnames';
import styles from './SignInForm.module.css';

const initialValues = {
  email: '',
  password: '',
  isemailValid: true,
  ispasswordValid: true,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialValues };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({
      [name]: value,
      [`is${name}Valid`]: !value.includes(' '),
    });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...initialValues });
  };

  render() {
    const { email, password, isemailValid } = this.state;
    const emailClassNames = cx({
      [styles.input]: true,
      [styles.invalidInput]: !isemailValid,
    });

    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          value={email}
          className={emailClassNames}
          placeholder='Username'
          type='email'
          name='email'
          required
        ></input>
        <input
          onChange={this.handleChange}
          value={password}
          className={styles.input}
          placeholder='Password'
          type='password'
          name='password'
          required
        ></input>
        <input className={styles.input} type='submit'></input>
      </form>
    );
  }
}

export default SignInForm;

/* function cx(objectStyles) { // полифил "npm classnames"
  return Object.entries(objectStyles)
    .filter(([className, condition]) => condition)
    .map(([className, condition]) => className)
    .join(' ');
} */
