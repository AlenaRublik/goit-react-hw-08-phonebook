import { ContactForm, Filter, Contacts } from 'components/index';
import { H1, H2 } from './App/App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  return (
    <>
      <H1>PhoneBook</H1>
      <ContactForm />
      <H2>Contacts</H2>
      <Filter />
      <Contacts />
      <ToastContainer/>
    </>
  );
}