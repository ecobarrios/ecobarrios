import React from 'react'
import ActionComponent, { Activity } from './ActionComponent'

interface Props {
  activities: Activity[];
}

function ActionListComponent({ activities }: Props) {
  return (

    <div className='flex flex-col' id="actividades">

<h1 className="text-2xl md:text-4xl font-bold mt-10  " >Actividades</h1>
<div className="w-full md:w-[207px] h-2 bg-primary-mora mb-10"></div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {activities.map((activity) => (
        <ActionComponent
          key={activity.id}
          id={activity.id}
          icon={activity.icon}
          date={activity.date}
          actionText={activity.actionText}
          colorBgPrimary={activity.colorBgPrimary}
          colorBgSecondary={activity.colorBgSecondary}
        />
      ))}
    </div>
    </div>
  )
}

export default ActionListComponent
