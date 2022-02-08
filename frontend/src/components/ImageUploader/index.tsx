import image from 'assets/test.jpg';
import Button from 'components/Button';
import DragNDrop from 'components/DragNDrop';
import SuccessHeader from 'components/SuccesHeader';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';

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
  FileInput,
} from './styles';

type ImageUploaderProps = {
  handleLoading: () => void;
};

const ImageUploader = ({ handleLoading }: ImageUploaderProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploaded, setUploaded] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File>();

  const notify = (message: string) => toast(message, { type: 'error' });

  const fileInputClicked = () => {
    fileInputRef?.current?.click();
  };

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
    if (files.length > 1) {
      notify('Envie apenas um arquivo por vez!');
      return;
    }

    if (validateFile(files[0])) {
      setSelectedFile(files[0]);
      handleLoading();
      return;
    }

    notify(`Tipo de arquivo não permitido: ${files[0].name}`);
  };

  const fileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const { files } = event.dataTransfer;

    if (files.length) {
      handleFiles(files);
    }
  };

  const filesSelected = () => {
    if (fileInputRef?.current?.files?.length) {
      handleFiles(fileInputRef.current.files);
    }
  };

  return (
    <Container>
      {uploaded ? (
        <SuccessHeader />
      ) : (
        <Wrapper>
          <Title>Upload your image</Title>
          <Subtitle variant="subtitle2">File should be Jpeg, Png...</Subtitle>
        </Wrapper>
      )}

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
            <FileInput
              ref={fileInputRef}
              type="file"
              multiple={false}
              onChange={filesSelected}
            />
            <DragNDrop />
            <Legend>Drag & drop your image here</Legend>
          </>
        )}
      </ImageBox>
      {uploaded ? (
        <SuccessFooter />
      ) : (
        <>
          <Subtitle variant="subtitle1">Or</Subtitle>

          <Button onClick={fileInputClicked} withMargin>
            Escolha um arquivo
          </Button>
        </>
      )}
    </Container>
  );
};

export default ImageUploader;
