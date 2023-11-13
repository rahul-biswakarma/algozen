import clsx from 'clsx';
import { ChangeEvent } from 'react';

import styles from './slider.module.css';

interface SliderProps {
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Slider = ({
  value,
  onChange,
  minValue = 0,
  maxValue = 10,
  disabled = false,
  step = 1,
  className,
  icon,
}: SliderProps) => {
  return (
    <div className="relative flex items-center w-full h-5 rounded-2xl max-w-[400px]">
      <div className="absolute w-full h-full bg-purple-00 opacity-30 rounded-2xl pointer-events-none" />
      <div
        className="absolute h-full bg-gradient-to-tl from-purple-01 via-purple-01 to-purple-00 rounded-2xl pointer-events-none"
        style={{
          width: `${(value / maxValue) * 100}%`,
        }}
      />
      <div
        className="absolute -translate-x-[50%] rounded-2xl flex flex-col items-center gap-0.5 p-0.5 bg-gradient-to-tr from-purple-00 to-purple-01 border border-purple z-[1] pointer-events-none"
        style={{ left: `${(value / maxValue) * 100}%` }}
      >
        {icon}
        <span className="w-7 h-7 rounded-full text-xs flex justify-center items-center bg-white text-black">
          {value}
        </span>
      </div>
      <input
        className={clsx(styles.slider, className)}
        disabled={disabled}
        max={maxValue}
        min={minValue}
        onChange={onChange}
        step={step}
        type="range"
        value={value}
      />
    </div>
  );
};
