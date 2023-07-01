import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsOperations';
import { RiContactsLine } from 'react-icons/ri';
import { BsFillTrash3Fill } from 'react-icons/bs';
import {
  LiItem,
  SpanIcon,
  SpanName,
  SpanNumber,
  ButtonDlt,
} from './ContactItem.styled';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = id => dispatch(deleteContact(id));
  return (
    <LiItem key={id}>
      <SpanIcon>
        <RiContactsLine />
      </SpanIcon>
      <SpanName>{name}</SpanName>
      <SpanNumber>{number}</SpanNumber>
      <ButtonDlt type="button" onClick={() => handleDelete(id)}>
        <BsFillTrash3Fill />
      </ButtonDlt>
    </LiItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
