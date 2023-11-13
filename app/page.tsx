'use client';
import { IconBolt } from '@tabler/icons-react';
import { ChangeEvent, useState } from 'react';

import { Slider } from '@/libs/ui-components';

export default function Page() {
  const [sliderValue, setSliderValue] = useState(5);

  return (
    <div className="p-12 border border-outline-00 bg-layer-01 w-[800px] rounded-2xl m-5">
      <Slider
        icon={<IconBolt className="w-4" />}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSliderValue(Number(event.target.value));
        }}
        value={sliderValue}
      />
    </div>
  );
}
