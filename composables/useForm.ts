import { ServiceType, stringOrNull } from "~/types";
import { defineStore } from "pinia";

interface IFormData {
  name: stringOrNull,
  phone: stringOrNull,
  email: stringOrNull,
  service?: ServiceType | null,
}

export interface IUseForm {
  spinnerIsShowen: boolean,
  errorMessageIsShowen: boolean,
  formData: IFormData,
}

const URL = 'https://getform.io/f/2597b0f6-2cbe-45e3-98d5-5296ab9268bd'

export const useForm = defineStore('form', {
  state: () => ({
    spinnerIsShowen: false,
    errorMessageIsShowen: false,
    formData: {
      name: null,
      email: null,
      phone: null,
      service: null,
    }
  } as IUseForm),

  actions: {
    async submit() {
      const modal = useModal()
      this.spinnerIsShowen = true

      try {
        await $fetch(URL, {
          method: 'POST',
          body: JSON.stringify(this.formData)
        })
      } catch {
        this.errorMessageIsShowen = true
      } finally {
        this.spinnerIsShowen = false
        this.$reset()
        modal.close()
      }
    },

    openFormBySelectedServices(service: ServiceType) {
      const modal = useModal()
      this.formData.service = service
      modal.open()
    }
  }
})
