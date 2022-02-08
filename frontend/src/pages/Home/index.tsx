import ImageUploader from 'components/ImageUploader';
import ProgressBar from 'components/ProgreesBar';
import { useState } from 'react';

import { Container } from './styles';

const Home = () => {
  const [isUploading, setIsUploading] = useState(false);

  const handleLoading = () => {
    setIsUploading(prev => !prev);
  };

  return (
    <Container>
      {isUploading ? (
        <ProgressBar />
      ) : (
        <ImageUploader handleLoading={handleLoading} />
      )}
    </Container>
  );
};

export default Home;
