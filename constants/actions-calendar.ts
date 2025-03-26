import { Activity } from '@/components/home/actions-component/ActionComponent'
import iconAct1 from '@/public/SVG/Iconos_ACT-SVG_01.svg'
import iconAct2 from '@/public/SVG/Iconos_ACT-SVG-02.svg'
import iconAct3 from '@/public/SVG/Iconos_ACT-SVG-03.svg'
import iconAct4 from '@/public/SVG/Iconos_ACT-SVG-04.svg'
import iconAct5 from '@/public/SVG/Iconos_ACT-SVG-05.svg'
import iconAct6 from '@/public/SVG/Iconos_ACT-SVG-06.svg'

export const activities: Activity[] = [
    {
      id: 1,
      icon: iconAct1,
      date: '12 Abril',
      actionText: 'Primer Encuentro Regional de Organizaciones Ambientales',
      colorBgPrimary: '#5497d2',
      colorBgSecondary: '',
    },
    {
      id: 2,
      icon: iconAct2,
      date: '20 Abril',
      actionText: 'Visita a Experiencia Urbana Ambiental',
      colorBgPrimary: '#5597cf',
      colorBgSecondary: '#5597cf',
    },
    {
      id: 3,
      icon: iconAct3,
      date: '5 Mayo',
      actionText: 'Segundo Encuentro Regional de Organizaciones Ambientales',
      colorBgPrimary: '#7a4520',
      colorBgSecondary: '#7a4520',
    },
    {
      id: 4,
      icon: iconAct4,
      date: '18 Mayo',
      actionText: 'Visita a Experiencia Rural Ambiental',
      colorBgPrimary: '#64478d',
      colorBgSecondary: '#5f4680',
    },
    {
      id: 5,
      icon: iconAct5,
      date: '2 Junio',
      actionText: '5 Talleres de Certificación a Organizaciones Ambientales',
      colorBgPrimary: '#ea5b26',
      colorBgSecondary: '',
    },
    {
      id: 6,
      icon: iconAct6,
      date: '15 Junio',
      actionText: 'Festival Ciudadano Ambiental de Santiago',
      colorBgPrimary: '#1d1d1d',
      colorBgSecondary: '',
    },
  ];