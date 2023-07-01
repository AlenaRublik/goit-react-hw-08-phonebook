import { useAuth } from 'hooks/useAuth';
import ReactPlayer from 'react-player';

import { Text, Link, Box, Section } from './Home.styled';

export const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn ? ( 
      <>
      <Section>
      <ReactPlayer
        url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        width='500px'
        height='300px'
        controls
        />
      </Section>
      <Box>
          <Text>
            <Link to="/login">Log in</Link> or <Link to="/register">register</Link>
            {' '} if you want to watch another one <br/>or if you want to take advantage of Phone Book features.
          </Text>
        </Box>
      </>
      ) : (
        <Section>
        {/* <ReactPlayer
          url='https://youtu.be/ORrqkh9LvHA'
          width='500px'
          height='300px'
          controls
          /> */}
        </Section>
      )}
      ;
    </>
  );
};

export default Home;
