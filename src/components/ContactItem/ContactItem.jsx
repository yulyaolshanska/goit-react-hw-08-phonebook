import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { successToast } from 'utils/notifications';
import { memo } from 'react';

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isSuccess, isLoading }] = useDeleteContactMutation();

  if (isSuccess) {
    successToast('Contact deleted');
  }

  return (
    <li className={css.contactItem}>
      <p>{name}</p>
      <p>{number}</p>

      <button
        className={css.button}
        onClick={() => deleteContact(id)}
        type="button"
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(ContactItem);
