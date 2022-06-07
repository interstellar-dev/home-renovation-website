import { ComponentPublicInstance, ref, onMounted, Ref } from 'vue'
import Swiper, { Mousewheel, Parallax, Controller } from 'swiper';
import { SwiperModule } from "swiper/types";

type ComponentInstanceDivElement = ComponentPublicInstance<HTMLInputElement>

export interface ISwiperSection {
  modules: SwiperModule[],
  slideElements: Ref<ComponentInstanceDivElement[]>,
  controlledSwiper: Ref<ComponentInstanceDivElement | null>,
  descriprionIsHidden: Ref<boolean>,
  setControlledSwiper(swiper: ComponentInstanceDivElement):void,
  toggleSlideView(n:number): void,
  slideChangeHandler(swiper: Swiper):void
}

export const useSwiperSection = ():ISwiperSection => {

  const modules:SwiperModule[] = [Mousewheel, Parallax, Controller]

  const addClassToExistingElement = (existingClass:string, newClass:string):void => {
    const element = document.querySelector(`.${existingClass}`)
    if(element) element.classList.add(`.${newClass}`)
  }

  const controlledSwiper = ref<ComponentInstanceDivElement | null>(null);
  const slideElements = ref<ComponentInstanceDivElement[]>([])
  const descriprionIsHidden = ref<boolean>(false)

  const setControlledSwiper = (swiper: ComponentInstanceDivElement):void => {
    controlledSwiper.value = swiper;
  };

  const toggleSlideView = (n:number):void => {
    slideElements.value[n - 1].$el.classList.toggle('open')
  }

  const slideChangeHandler = (swiper: Swiper):void => {
    descriprionIsHidden.value = swiper.activeIndex > 0
  }

  onMounted(() => {
    addClassToExistingElement('swiper-wrapper', 'slider__wrapper')
  })

  return {
    modules,
    slideElements,
    controlledSwiper,
    setControlledSwiper,
    toggleSlideView,
    slideChangeHandler,
    descriprionIsHidden
  }
}
