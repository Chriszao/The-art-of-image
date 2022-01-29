import noImage from 'assets/image.svg';

import { Container, NoImage } from './styles';

const DragNDrop = () => {
  return (
    <Container>
      <NoImage src={noImage} alt="No logo" />
    </Container>
  );
};

export default DragNDrop;
