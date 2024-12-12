import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { HiArrowPath, HiMiniEyeSlash } from "react-icons/hi2";
import { GlobalStyles } from "./styles/GlobalStyles";
import { CustomTitleBar } from "./components/TitleBar/TitleBar";

import TimerWrapper from "./components/Timer/TimerWrapper";
import TimerInput from "./components/Timer/TimerInput";
import Container from "./components/Layout/Container";
import Button from "./components/TitleBar/Button";
import Flex from "./components/Layout/Flex";

import { useWindowDrag } from "./components/hooks/useWindowDrag";


const App: React.FC = () => {
  const daysRef = useRef<HTMLInputElement>(null);
  const hoursRef = useRef<HTMLInputElement>(null);
  const minutesRef = useRef<HTMLInputElement>(null);
  const secondsRef = useRef<HTMLInputElement>(null);

  const inputRefs = [daysRef, hoursRef, minutesRef, secondsRef];

  const remainingTimeInSeconds = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  const { handleMouseDown } = useWindowDrag();

  function toggleTransparency() {
    setIsTransparent(!isTransparent);
  }

  function handleInput(
    event: React.ChangeEvent<HTMLInputElement>,
    min: number,
    max: number
  ) {
    const input = event.currentTarget;
    const value = Math.max(
      min,
      Math.min(max, parseInt(input.value || "0", 10))
    );

    input.value = value.toString().padStart(2, "0");
    updateRemainingTime();
  }

  function convertSecondsToTime(seconds: number) {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return { days, hours, minutes, seconds: secs };
  }

  function toSeconds(
    days: number,
    hours: number,
    minutes: number,
    seconds: number
  ) {
    return days * 86400 + hours * 3600 + minutes * 60 + seconds;
  }

  function syncInputs(seconds: number) {
    const time = convertSecondsToTime(seconds);
    const values = [time.days, time.hours, time.minutes, time.seconds];

    inputRefs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.value = values[index].toString().padStart(2, "0");
      }
    });
  }

  function updateRemainingTime() {
    const days = parseInt(daysRef.current?.value ?? "0", 10);
    const hours = parseInt(hoursRef.current?.value ?? "0", 10);
    const minutes = parseInt(minutesRef.current?.value ?? "0", 10);
    const seconds = parseInt(secondsRef.current?.value ?? "0", 10);

    remainingTimeInSeconds.current = toSeconds(days, hours, minutes, seconds);
  }

  function startTimer() {
    if (!isTimerRunning && remainingTimeInSeconds.current > 0) {
      setIsTimerRunning(true);

      intervalRef.current = setInterval(() => {
        if (remainingTimeInSeconds.current > 0) {
          remainingTimeInSeconds.current -= 1;
          syncInputs(remainingTimeInSeconds.current);
        } else {
          clearInterval(intervalRef.current as NodeJS.Timeout);
          setIsTimerRunning(false);
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsTimerRunning(false);
  }

  function resetTimer() {
    if (intervalRef.current) {
      pauseTimer();
      syncInputs(0);
      remainingTimeInSeconds.current = 0;
    }
  }

  function toggleTimer() {
    if (isTimerRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  }

  useEffect(() => {
    // planing to create a custom context menu
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  });

  return (
    <Container
      isTransparent={isTransparent}
      onDoubleClick={isTransparent ? toggleTransparency : undefined}
      onMouseDown={handleMouseDown}
    >
      <GlobalStyles />
      <CustomTitleBar isTransparent={isTransparent}>
        <Flex>
          {isTimerRunning ? (
            <Button Icon={FaPause} tip="Stop timer" onClick={toggleTimer} />
          ) : (
            <Button Icon={FaPlay} tip="Start timer" onClick={toggleTimer} />
          )}

          <Button Icon={HiArrowPath} tip="Reset timer" onClick={resetTimer} />
          <Button
            Icon={HiMiniEyeSlash}
            tip="Enable transparency (double click to disable)"
            onClick={toggleTransparency}
          />
        </Flex>
      </CustomTitleBar>
      <TimerWrapper isTransparent={isTransparent}>
        <TimerInput
          type="number"
          ref={daysRef}
          defaultValue="00"
          onChange={(e) => handleInput(e, 0, 99)}
          isVisible={
            isTimerRunning ? remainingTimeInSeconds.current >= 86400 : true
          }
          readOnly={isTimerRunning}
        />
        :
        <TimerInput
          type="number"
          ref={hoursRef}
          defaultValue="00"
          onChange={(e) => handleInput(e, 0, 23)}
          isVisible={
            isTimerRunning ? remainingTimeInSeconds.current >= 3600 : true
          }
          readOnly={isTimerRunning}
        />
        :
        <TimerInput
          type="number"
          ref={minutesRef}
          defaultValue="00"
          onChange={(e) => handleInput(e, 0, 59)}
          isVisible={
            isTimerRunning ? remainingTimeInSeconds.current >= 60 : true
          }
          readOnly={isTimerRunning}
        />
        :
        <TimerInput
          type="number"
          ref={secondsRef}
          defaultValue="00"
          onChange={(e) => handleInput(e, 0, 59)}
          isVisible={
            isTimerRunning ? remainingTimeInSeconds.current >= 1 : true
          }
          readOnly={isTimerRunning}
        />
      </TimerWrapper>
    </Container>
  );
};

export default App;
