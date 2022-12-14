import { useEffect, useState } from 'react';
import { Button, Col, FormControl, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
// import 'react-toastify/dist/ReactToastify.css';

// import { successToast, errorToast } from 'utils/notifications';

import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import { useRef } from 'react';
// import authSelectors from 'redux/auth/authSelectors';

const LogInView = () => {
  const dispatch = useDispatch();
  // const isError = useSelector(authSelectors.getIsError);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isTryEnter = useSelector(state => state.auth.isTryEnter);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  // const resetForm = () => {
  //   setEmail('');
  //   setPassword('');
  // };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
  };

  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <Container className="mt-5 justify-content-md-center">
      <h1>Log In</h1>

      <Form className="justify-content-sm-center" onSubmit={handleSubmit}>
        <FormGroup
          className="mb-4 justify-content-md-center "
          controlId="formHorizontalEmail"
        >
          <Col sm={2}>Email</Col>
          <Col sm={10} className="justify-content-md-center">
            <FormControl
              value={email}
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
              ref={emailRef}
            />
          </Col>
        </FormGroup>

        <FormGroup className="mb-4" controlId="formHorizontalPassword">
          <Col sm={2}>Password</Col>
          <Col sm={10}>
            <FormControl
              onChange={handleChange}
              value={password}
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </Col>
        </FormGroup>
        <FormGroup>
          <Col sm={10}>
            <Button disabled={!email || !password} type="submit">
              {isTryEnter ? 'Loading...' : ' Log In'}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default LogInView;

/* <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            onChange={handleChange}
             ref={emailRef}
            type="email"
            name="email"
            value={email}
          />
        </label>
        <label>
          Password
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={password}
          />
        </label>
        <button type="submit">Log In</button>
      </form>  */

// useEffect(() => {
//   if (!isError && isLoggedIn) {
//     console.log('wrong');

//     successToast('You have successfully logged into your account.');
//     resetForm();
//   }
//   if (isError && !isTryEnter) {
//     console.log('wrong');
//     console.log('isError', isError);
//     console.log('isLoggedIn', isLoggedIn);

//     errorToast(
//       'You entered the wrong username or password, please try again.'
//     );
//   }
// }, [isError, isLoggedIn, isTryEnter]);
