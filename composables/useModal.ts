import { defineStore } from "pinia";

export const useModal = defineStore('modal', {
  state: () => ({
    isShowen: false
  }),

  actions: {
    open() {
      this.isShowen = true
    },
    close() {
      const form = useForm()

      if(!form.spinnerIsShowen) {
        this.isShowen = false
      }
    }
  }
})


