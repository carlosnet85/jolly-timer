import { appWindow } from "@tauri-apps/api/window";

export const useWindowDrag = () => {

  const handleMouseDown = async (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement) {
      await appWindow.startDragging();
    }
  };

  return { handleMouseDown };
};


