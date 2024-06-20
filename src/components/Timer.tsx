import { useEffect, useState } from "react";

interface TimerData {
  days: number;
  hours: number;
  minutes: number;
}
interface TimerProps {
  seconds: number;
}
const Timer: React.FC<TimerProps> = ({ seconds }) => {
  const [timersSeconds, setTimerSeconds] = useState<number>(seconds);
  const [TimerData, setTimerData] = useState<TimerData>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    if (timersSeconds > 0) {
      const interval = setInterval(() => {
        setTimerSeconds((timersSeconds) => timersSeconds - 1);
        clearInterval(interval);
      }, 1000);
    }
  }, [timersSeconds]);

  useEffect(() => {
    const days = Math.floor(timersSeconds / 86400);
    const hours = Math.floor((timersSeconds % 86400) / 3600);
    const minutes = Math.floor((timersSeconds % 3600) / 60);
    setTimerData({ days, hours, minutes });
  }, [timersSeconds]);
  return (
    <div className="h-full flex flex-auto flex-col justify-between py-8 px-[3.875rem] rounded-[1.875rem] max-w-[21.5rem] bg-FFF1CB">
      <div className="font-circe text-323854 text-xl leading-5 text-center">
        Следующее занятие начнется через:
      </div>
      <div className="font-circe text-323854 flex justify-center">
        <span className="text-[0.9375rem] mr-3">
          <span className="text-4xl">{TimerData.days}</span> д
        </span>
        <span className="text-[0.9375rem] mr-3">
          <span className="text-4xl">{TimerData.hours}</span> ч
        </span>
        <span className="text-[0.9375rem]">
          <span className="text-4xl">{TimerData.minutes}</span> мин
        </span>
      </div>
      <div className="cursor-pointer flex justify-center items-center w-full p-3 font-circe text-base text-323854 rounded-[1.875rem] border-[0.0625rem] border-323854 border-dashed">
        Button
      </div>
    </div>
  );
};
export default Timer;
