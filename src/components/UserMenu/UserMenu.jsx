import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import { UserName, Wrapper, Button, SpanIcon } from './UserMenu.styled';
import { RiContactsLine } from 'react-icons/ri';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const onLogOut = () => {
    dispatch(logOut());
  };

  return (
    <Wrapper>
      <UserName>
        <SpanIcon>
          <RiContactsLine />
        </SpanIcon>
        Welcome, {' '}
        {user.name}
      </UserName>

      <Button type="button" onClick={onLogOut}>
        Log out
     </Button>
    </Wrapper>
  );
};

export default UserMenu;
