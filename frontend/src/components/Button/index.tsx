import { ButtonComponent } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  withMargin: boolean;
}

const Button = ({ children, withMargin = true, onClick }: ButtonProps) => {
  return (
    <ButtonComponent onClick={onClick} withMargin={withMargin}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
