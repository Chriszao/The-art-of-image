import { Wrapper, Title, SuccessIcon } from './styles';

function SuccessHeader() {
  return (
    <Wrapper>
      <SuccessIcon size="35" />
      <Title>Uploaded Successfully!</Title>
    </Wrapper>
  );
}

export default SuccessHeader;
