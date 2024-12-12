import * as S from "./TitleBar-styles";

import { appWindow } from "@tauri-apps/api/window";
import { FaPowerOff } from "react-icons/fa6";
import { CgLoadbar } from "react-icons/cg";

import { useWindowDrag } from "../hooks/useWindowDrag";
import Button from "./Button";
import Flex from "../Layout/Flex";

interface CustomTitleBarProps {
  children?: React.ReactNode;
  isTransparent: boolean;
}

export const CustomTitleBar: React.FC<CustomTitleBarProps> = ({
  children,
  isTransparent,
}) => {
  const { handleMouseDown } = useWindowDrag();

  return (
    <S.TitleBar isTransparent={isTransparent} onMouseDown={handleMouseDown}>
      <Flex>
        <Button
          Icon={CgLoadbar}
          tip="Minimize window"
          onClick={() => appWindow.minimize()}
        />
        <Button
          Icon={FaPowerOff}
          tip="Close window"
          onClick={() => appWindow.close()}
        />
      </Flex>

      {children}
    </S.TitleBar>
  );
};
