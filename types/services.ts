import { Ref } from 'vue'

export enum ServiceType {
  Rougt = 'Черновой ремонт',
  Cosmetic = 'Косметический ремонт',
  Capital = 'Капитальный ремонт'
}

export interface IServiceItem {
  icon: {
    path: string,
    alt: string
  },
  header: ServiceType,
  description: string[]
}

export type ServicesItems = Ref<IServiceItem[]>

export interface IUseServicesSection {
  servicesItems: ServicesItems,
}
