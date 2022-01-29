import Bar from '@ramonak/react-progress-bar';

import { Container, Title } from './styles';

const ProgressBar = () => {
  return (
    <Container>
      <Title>Uploading...</Title>

      <Bar
        completed={60}
        bgColor="#2F80ED"
        baseBgColor="#F2F2F2"
        height="6px"
        isLabelVisible={false}
      />
    </Container>
  );
};

export default ProgressBar;
