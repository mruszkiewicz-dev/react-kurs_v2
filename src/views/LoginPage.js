import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';

const LoginPage = () => (
  <div>
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={({ username, password }) =>
        axios
          .post('http://localhost:9000/api/user/login', { username, password })
          .then(() => console.log('login'))
          .catch((err) => console.log(err))
      }
    >
      {() => (
        <Form>
          <Field type="username" name="text" />
          <Field type="password" name="password" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default LoginPage;
