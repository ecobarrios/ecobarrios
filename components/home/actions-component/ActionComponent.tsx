import React from 'react'
import Image from 'next/image'

export interface Activity {
  id: number;
  icon: string;
  date: string;
  actionText: string;
  colorBgPrimary: string;
  colorBgSecondary?: string;
}

type Props = Activity;

function ActionComponent(props: Props) {
  const { icon, date, actionText, colorBgPrimary, colorBgSecondary } = props;

  return (
    <div className="w-[240px] rounded overflow-hidden">
      {/* Parte superior */}

      <div className='flex flex-row gap-4 items-center'>
      <div className="w-8 h-8 mb-2">
          <Image src={icon} alt="icono actividad" width={32} height={32} />
        </div>
        <div className="text-gray-600 text-2xl">{date}</div>
      </div>
      <div
        className="p-4 text-white min-h-[140px] flex flex-col justify-between"
        style={{ backgroundColor: colorBgPrimary }}
      >
       
        <div className="font-semibold text-base">{actionText}</div>
      </div>

      {/* Parte inferior condicional */}
      {colorBgSecondary && (
        <div
          className="p-3 text-white text-sm mt-1 h-32 rounded-br-3xl opacity-85"
          style={{ backgroundColor: colorBgSecondary }}
        >
          Considera traslado en bus y servicio de alimentación
        </div>
      )}
    </div>
  );
}

export default ActionComponent;
