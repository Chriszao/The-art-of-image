import { Title, Container, UserName } from './styles';

const Footer = () => {
  return (
    <Container>
      <Title>
        Created by{' '}
        <UserName href="https://github.com/Chriszao">Christofer Assis</UserName>{' '}
        - Fullstack Developer
      </Title>
    </Container>
  );
};

export default Footer;
