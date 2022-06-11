import { BaseTransitionProps, RendererElement, Ref, ref, onMounted } from 'vue'
import { gsap } from "gsap";

export interface IUseTheHeader {
  onBeforeEnter: BaseTransitionProps['onBeforeEnter'],
  onEnter: BaseTransitionProps['onEnter'],
  elIsShowen: Ref<boolean>
}

export const useTheHeader = ():IUseTheHeader  => {

  const onBeforeEnter: BaseTransitionProps['onBeforeEnter'] = (el: RendererElement): void => {
    el.style.opacity = '0'
    el.style.transform = 'translateY(-60px)'
  }

  const onEnter: BaseTransitionProps['onEnter'] = (el: RendererElement, done: ()=> void): void => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      onComplete: done,
      delay: Number(el.dataset.index) * 0.3
    })
  }

  const elIsShowen = ref<boolean>(false)

  onMounted(() => {
    elIsShowen.value = true
  })

  return {
    onBeforeEnter,
    onEnter,
    elIsShowen
  }

}
