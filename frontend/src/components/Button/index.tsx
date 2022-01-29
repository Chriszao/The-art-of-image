import { ButtonComponent } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  withMargin: boolean;
};

const Button = ({ children, withMargin = true }: ButtonProps) => {
  return <ButtonComponent withMargin={withMargin}>{children}</ButtonComponent>;
};

export default Button;
