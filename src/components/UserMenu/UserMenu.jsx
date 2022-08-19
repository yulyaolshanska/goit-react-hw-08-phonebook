import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from 'react-bootstrap';

import authOperations from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import Button from 'react-bootstrap/Button';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <>
      <Navbar.Text className="mr-2">Welcome {name}</Navbar.Text>

      <Button onClick={() => dispatch(authOperations.logOut())} variant="light">
        Log Out
      </Button>
    </>
  );
};

/* <button
        className="ml-2"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </button> */
