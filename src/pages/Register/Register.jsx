import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import 'react-toastify/dist/ReactToastify.css';

import { Button, Col, FormControl, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useRef } from 'react';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isTryEnter = useSelector(state => state.auth.isTryEnter);

  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <Container className="mt-5 justify-content-md-center">
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formHorizontalName">
          <Col sm={2}>Name</Col>
          <Col sm={10} className="justify-content-md-center">
            <FormControl
              type="text"
              name="name"
              value={name}
              placeholder="Enter name"
              onChange={handleChange}
              ref={nameRef}
            />
          </Col>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formHorizontalEmail">
          <Col sm={2}>Email</Col>
          <Col sm={10} className="justify-content-md-center">
            <FormControl
              value={email}
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup className="mb-3" controlId="formHorizontalPassword">
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
            <Button disabled={!name || !email || !password} type="submit">
              {isTryEnter ? 'Loading...' : ' Register'}
            </Button>
          </Col>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default RegisterView;

// <>
//   <h1>Register</h1>
//   <form onSubmit={handleSubmit}>
//     <label>
//       Name
//       <input onChange={handleChange} ref={nameRef} type="text" name="name" value={name} />
//     </label>
//     <label>
//       Email
//       <input
//         onChange={handleChange}
//         type="email"
//         name="email"
//         value={email}
//       />
//     </label>
//     <label>
//       Password
//       <input
//         onChange={handleChange}
//         type="password"
//         name="password"
//         value={password}
//       />
//     </label>
//     <button type="submit">Register</button>
//   </form>
// </>;

// useEffect(() => {
//   if (isError && !isTryEnter) {
//     errorToast(
//       'You entered an invalid  username or password, please try again.'
//     );
//   }
// }, [isError, isTryEnter]);
