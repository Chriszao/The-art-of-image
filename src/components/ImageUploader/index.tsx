import noImage from 'assets/image.svg';

import {
  Container,
  Title,
  Subtitle,
  ImageBox,
  Button,
  Wrapper,
  NoImage,
  Legend,
} from './styles';

const ImageUploader = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Upload your image</Title>
        <Subtitle variant="subtitle2">File should be Jpeg, Png...</Subtitle>
      </Wrapper>
      <ImageBox>
        <NoImage src={noImage} alt="No logo" />
        <Legend>Drag & drop your image here</Legend>
      </ImageBox>
      <Subtitle variant="subtitle1">Or</Subtitle>
      <Button>Choose a file</Button>
    </Container>
  );
};

export default ImageUploader;
