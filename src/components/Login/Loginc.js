import React, { useState } from 'react';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import Container from 'semantic-ui-react/dist/commonjs/elements/Container';
import Segment from 'semantic-ui-react/dist/commonjs/elements/Segment';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import Grid from 'semantic-ui-react/dist/commonjs/collections/Grid';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
// import url from '../../urls';

const AddUser = ({ user }) => {
  // email, password, confirmPassword to store the data received from their
  // respective input fields
  // redirectTo to control where this page will redirect to
  // error to verify if requests are received with error response or not
  // message to control the message to be shown to user
  // requesting to control and show the status of requests
  const [variables, setVariables] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [requesting, toggleRequesting] = useState(0);

  // handle change in variables and storing them
  const handleChange = (event, target) => {
    const { name, value } = target;

    setVariables({
      ...variables,
      [name]: value,
    });
  };

  // Method to check if password supplied by user confirms by our rules
  const passwordCheck = (password) => {
    // checking if password is not null and is longer than 8 characters
    if (password.length < 8) {
      return false;
    }

    // matching if password contains a number and then checking if it also
    // contains a character
    if (password.match(/[0-9]+/g) !== null && password.match(/[a-zA-Z]+/g) !== null) {
      return true;
    }

    return false;
  };

  // Method to check if all signup parameters are correct and then
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const { email, password, confirmPassword } = variables;
//     // validate email and password
//     if (!email || !password) {
//       toast.error('Invalid email or password');
//       toggleRequesting(0);
//       return;
//     }

//     if (!passwordCheck(password)) {
//       toast.warning('Password should contain at least one character and one number. They should also at least have 8 characters');
//       toggleRequesting(0);
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error(`Passwords don${"'"}t match. Please check`);
//       toggleRequesting(0);
//       return;
//     }

//     if (requesting === 1) {
//       return;
//     }

//     toggleRequesting(1);

//     const options = {
//       url: `${url.CLIENT_USER_URL}/auth/create/newuser`,
//       method: 'post',
//       data: { email, password },
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${window.localStorage.authToken}`,
//       },
//     };

//     // reqeust for sign up to API
//     Axios(options)
//       .then(() => {
//         toast.success('User created');
//         toggleRequesting(0);
//       }).catch((err) => {
//         console.log(err);
//         toast.error('Error');
//         toggleRequesting(0);
//       });
//   };

//   if (!user) return <Redirect to="/login" />;
//   if (user && user.roles !== 'admin') return <Redirect to="/" />;

  return (
    <Container>
      <Grid
        verticalAlign="middle"
        className="login-form"
        centered
        columns={2}
      >
        <Grid.Column>
          <Form className="large" size="large" 
        //   onSubmit={handleSubmit}
          >
            <Segment stacked>
              <Header as="h2" color="blue" textAlign="center" content="Add User" />
              <Form.Field className="column">
                <Form.Input label="Enter email address" name="email" type="email" autoComplete="email" onChange={handleChange} />
              </Form.Field>
              <Form.Field className="column">
                <Form.Input label="Enter password" type="password" name="password" autoComplete="new-password" onChange={handleChange} />
              </Form.Field>
              <Form.Field className="column">
                <Form.Input label="Enter password again" type="password" name="confirmPassword" autoComplete="new-password" onChange={handleChange} />
              </Form.Field>
              <div id="auth-button">
                <Button type="submit" content="Submit" basic color="blue" loading={!!requesting} />
              </div>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
      <ToastContainer position="bottom-right" />
    </Container>
  );
};

AddUser.propTypes = {
  user: PropTypes.shape({
    roles: PropTypes.string,
  }),
};

AddUser.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user.user,
});

export default AddUser
