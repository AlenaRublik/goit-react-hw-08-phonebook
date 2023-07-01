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
        <ReactPlayer
          url='https://media.istockphoto.com/id/1404978793/uk/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE/%D0%B2%D0%B8%D0%B4-%D0%B7-%D0%BF%D0%BE%D0%B2%D1%96%D1%82%D1%80%D1%8F-%D0%BD%D0%B0-%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B5-%D0%BF%D0%B0%D1%81%D0%BE%D0%B2%D0%B8%D1%89%D0%B5-%D0%BD%D0%B0-%D1%82%D0%BB%D1%96-%D0%BD%D0%B0%D0%B9%D0%B2%D0%B8%D1%89%D0%BE%D1%97-%D0%B3%D1%80%D1%83%D0%B7%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%BE%D1%97-%D0%B3%D0%BE%D1%80%D0%B8-%D1%88%D1%85%D0%B0%D1%80%D0%B0-%D0%BF%D0%BE%D0%B1%D0%BB%D0%B8%D0%B7%D1%83-%D1%83%D1%88%D0%B3%D1%83%D0%BB%D1%96-%D0%B2.mp4?s=mp4-640x640-is&k=20&c=LEKa8ZXcZfN8YHEotUK5LoQNGKwz3ATJYzXzlgDn_Fo='
          width='500px'
          height='300px'
          controls
          />
        </Section>
      )}
      ;
    </>
  );
};

export default Home;
