import image from 'assets/test.jpg';
import Button from 'components/Button';
import DragNDrop from 'components/DragNDrop';
import SuccessHeader from 'components/SuccesHeader';
import useSnackBar from 'hooks/useSnackBar';
import { useState } from 'react';

import validTypes from '../../constants';
import SuccessFooter from '../SuccessFooter';
import {
  Container,
  Title,
  Subtitle,
  ImageBox,
  Wrapper,
  Legend,
  UploadedImage,
} from './styles';

const ImageUploader = () => {
  const [uploaded, setUpladed] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const snackBar = useSnackBar();

  const dragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const dragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const validateFile = (file: File) => {
    if (validTypes.includes(file.type)) {
      return true;
    }
    return false;
  };

  const handleFiles = (files: FileList) => {
    for (let index = 0; index < files.length; index += 1) {
      if (validateFile(files[index])) {
        setSelectedFiles(prev => [...prev, files[index]]);
      }
      snackBar(
        `Tipo de arquivo não permitido: ${files[index].name}.${files[index].type}`,
      );
      // mostrar snackBar com erro na tela e o nome do arquivo
    }
  };

  const fileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const { files } = event.dataTransfer;

    if (files.length) {
      handleFiles(files);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Upload your image</Title>
        <Subtitle variant="subtitle2">File should be Jpeg, Png...</Subtitle>
      </Wrapper>
      {/* <SuccessHeader /> */}
      <ImageBox
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        isUploaded={uploaded}
      >
        {uploaded ? (
          <UploadedImage src={image} alt="Test" />
        ) : (
          <>
            <DragNDrop />
            <Legend>Drag & drop your image here</Legend>
          </>
        )}
      </ImageBox>
      <Subtitle variant="subtitle1">Or</Subtitle>
      <Button withMargin>Choose a file</Button>
      {/* <SuccessFooter /> */}
    </Container>
  );
};

export default ImageUploader;
