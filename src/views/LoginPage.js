import React from 'react';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import AuthTemplate from 'templates/AuthTemplate';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { Link, Navigate } from 'react-router-dom';
import { routes } from 'routes/index';
import { connect } from 'react-redux';
import { autheticate as autheticateAction } from 'actions';

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin: 0 0 30px 0;
  height: 40px;
  width: 300px;
`;

const StyledLink = styled(Link)`
  display: block;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: black;
  text-transform: uppercase;
  margin: 20px 0 50px;
`;

const LoginPage = ({ userID, autheticate }) => (
  <AuthTemplate>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) => {
        autheticate(username, password);
      }}
    >
      {({ handleChange, handleBlur, values }) => {
        if (userID) {
          return <Navigate to="/notes" replace />;
        }
        return (
          <>
            <Heading>Sign in {userID}</Heading>

            <StyledForm>
              <StyledInput
                type="text"
                name="username"
                placeholder="Login"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <Button activecolor="notes" type="submit">
                sign in
              </Button>
            </StyledForm>
            <StyledLink to={routes.register}>I want my account!</StyledLink>
          </>
        );
      }}
    </Formik>
  </AuthTemplate>
);

const mapStateToProps = ({ userID = null }) => ({ userID });

const mapDispatchToProps = (dispatch) => ({
  autheticate: (username, password) => dispatch(autheticateAction(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
