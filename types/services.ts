import { BaseTransitionProps, Ref } from 'vue'
export interface IServiceItem {
  icon: {
    path: string,
    alt: string
  },
  header: string,
  description: string[]
}

export type ServicesItems = Ref<IServiceItem[]>

export interface IUseServicesSection {
  servicesItems: ServicesItems,
}
