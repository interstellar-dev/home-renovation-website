import { ref } from 'vue'
import { ServicesItems, IServiceItem, IUseServicesSection, ServiceType } from '@/types'

export const useServiceSection = ():IUseServicesSection => {

  const servicesItems:ServicesItems  = ref<IServiceItem[]>([
    {
      icon: {
        path: '/images/icons/services-section/noun-pipes.png',
        alt: 'черновой ремонт'
      },
      header: ServiceType.Rougt,
      description: [
        'Демонтаж, стяжка, выравнивание пола',
        'Грунтовка, штукатурка, шпаклевка стен',
        'Штукатурка, шпаклевка, грунтовка потолка',
        'Разводка труб водоснабжения',
        'Установка труб канализации',
        'Установка полотенцесушителя',
        'Разводка кабеля',
        'Установка щитка',
        'Разводка слаботочки',
      ]
    },
    {
      icon: {
        path: '/images/icons/services-section/noun-brick.png',
        alt: 'космеический ремонт'
      },
      header: ServiceType.Cosmetic,
      description: [
        'Демонтаж, монтаж напольного покрытия',
        'Устранение мелких дефектов стен, потолка',
        'Грунтовка поверхности, покраска стен, поклейка обоев, декоративная штукатурка',
        'Частичная шпаклевка, покраска потолка',
        'Монтаж натяжного потолка',
        'Монтаж унитаза, смесителей, раковины',
        'Монтаж осветительных приборов, замена розеток, установка СКУД',
      ]
    },
    {
      icon: {
        path: '/images/icons/services-section/capital.png',
        alt: 'ключ с домом'
      },
      header: ServiceType.Capital,
      description: [
        'Демонтаж перегородок и стен, инженерных сетей, старой отделки',
        'Монтаж инженерных сетей',
        'Выравнивание пола, стен, потолка, сборка конструкций',
        'Укладка напольных покрытий',
        'Отделка стен, потолка',
        'Монтаж сантехники',
        'Прокладка кабеля, установка элекрощитка, подключение осветительных приборов',
      ]
    }
  ])

  return {
    servicesItems
  }
}
