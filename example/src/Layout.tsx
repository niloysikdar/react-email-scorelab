import {
  Email,
  Section,
  Column,
  Typography,
  Divider,
  Image,
} from 'react-email-scorelab';

const Layout = () => {
  return (
    <Email>
      <Section>
        <Column>
          <Typography sx={{ fontSize: '25px', textAlign: 'center' }}>
            Hello World
          </Typography>
          <Divider />
          <Image
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a"
            alt="Image"
            width="500px"
          />
          <Divider />
          <Typography>Hello World 1</Typography>
        </Column>
      </Section>
    </Email>
  );
};

export default Layout;
