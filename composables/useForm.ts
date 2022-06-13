import { ServiceType, stringOrNull } from "~/types";
import { defineStore } from "pinia";
import { useModal } from "~/composables/useModal.js";

const URL = 'https://secret-river-82420.herokuapp.com/api/form'

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
        await fetch(URL, {
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

