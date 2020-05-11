import carousel, { CarouselType } from './carousel'
import component2, { Component2Type } from './component2'
import component3, { Component3Type } from './component3'
import contact, { ContactType } from './contact'
import footer, { FooterType } from './footer'
import general from './general'
import header, { HeaderType } from './header'

export { default as carousel } from './carousel'
export { default as component2 } from './component2'
export { default as component3 } from './component3'
export { default as contact } from './contact'
export { default as footer } from './footer'
export { default as header } from './header'

export type AppDataType =
  | CarouselType
  | Component2Type
  | Component3Type
  | ContactType
  | FooterType
  | HeaderType

const appData = {
  carousel,
  component2,
  component3,
  contact,
  footer,
  general,
  header
}

export default appData
