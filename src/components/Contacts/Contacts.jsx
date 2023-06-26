import { RiContactsLine } from 'react-icons/ri';
import { BsFillTrash3Fill } from 'react-icons/bs';
import {
  UlList,
  LiItem,
  SpanIcon,
  SpanName,
  SpanNumber,
  ButtonDlt,
} from './Contacts.styled';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsSlice.js';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

export const Contacts = () => {
   const deleteContactId = id => {
    deleteContact(id);
    toast.success('Contact sucessfully deleted');
  };

  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(selectFilter);

  const getVisibleContacts = (() => {
    return contacts
      .filter(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.number.includes(filter.toLowerCase())
      )
  })();

  return (
    <>
      {isLoading && <Loader/>}
      {error && <p>{error}</p>}
    <UlList>
      {getVisibleContacts.map(({ id, name, number }) => {
        return (
          <LiItem key={id}>
            <SpanIcon>
              <RiContactsLine />
            </SpanIcon>
            <SpanName>{name}</SpanName>
            <SpanNumber>{number}</SpanNumber>
            <ButtonDlt type="button"
              onClick={() => deleteContactId(id)}
            >
              <BsFillTrash3Fill />
            </ButtonDlt>
          </LiItem>
        );
      })}
    </UlList></>
  );
}

