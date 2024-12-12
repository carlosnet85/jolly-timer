import * as S from "./Button-styles";
import { IconType } from "react-icons";

interface ButtonProps {
  Icon: IconType
  tip: string
  onClick: () => void
}
const Button: React.FC<ButtonProps> = ({ Icon, tip, onClick }) => {
  return (
    <S.Button onClick={onClick}>
      <Icon />
      <S.ButtonTip>{tip}</S.ButtonTip>
    </S.Button>
  );
}

export default Button;