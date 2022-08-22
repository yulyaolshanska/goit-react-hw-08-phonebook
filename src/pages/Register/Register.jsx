import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

import { Button, Col, FormControl, FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    resetForm();
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
              Register
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
//       <input onChange={handleChange} type="text" name="name" value={name} />
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
