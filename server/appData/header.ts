import { GeneralState, KeyString } from '@store/general/types'
import general from './general'

interface MenuItem {
  id: number
  title: string
  isActive: boolean
  url: string
  target: string | null
  children: MenuItem[]
}

export interface HeaderState {
  componentSettings: KeyString
  logo: string
  mainNavigation: MenuItem[]
}

interface HeaderProps {
  general: GeneralState
  config: HeaderState
}

const header: HeaderProps = {
  general: general.config,
  config: {
    componentSettings: { name: 'header' },
    logo: 'http://satyr.io/120x50/red',
    mainNavigation: [
      {
        id: 1,
        title: 'Menu 1',
        url: '/',
        target: null,
        isActive: true,
        children: [],
      },
      {
        id: 2,
        title: 'Menu 2',
        url: '/',
        target: null,
        isActive: false,
        children: [
          {
            id: 7,
            title: 'Submenu 1',
            url: '/',
            target: null,
            isActive: false,
            children: [
              {
                id: 17,
                title: 'Sub sub menu 1',
                url: '/',
                target: null,
                isActive: false,
                children: [],
              },
              {
                id: 18,
                title: 'Sub sub menu 2',
                url: '/',
                target: null,
                isActive: false,
                children: [],
              },
            ],
          },
          {
            id: 8,
            title: 'Submenu 2',
            url: '/',
            target: null,
            isActive: false,
            children: [
              {
                id: 19,
                title: 'Sub sub menu 3',
                url: '/',
                target: null,
                isActive: false,
                children: [],
              },
              {
                id: 20,
                title: 'Sub sub menu 4',
                url: '/',
                target: null,
                isActive: false,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'Menu 3',
        url: '/',
        target: null,
        isActive: false,
        children: [
          {
            id: 9,
            title: 'Submenu 3',
            url: '/',
            target: '_blank',
            isActive: false,
            children: [],
          },
          {
            id: 10,
            title: 'Submenu 4',
            url: '/',
            target: null,
            isActive: false,
            children: [],
          },
          {
            id: 11,
            title: 'Submenu 5',
            url: '/en/faq',
            target: null,
            isActive: false,
            children: [],
          },
        ],
      },
      {
        id: 4,
        title: 'Menu 4',
        url: '/',
        target: null,
        isActive: false,
        children: [
          {
            id: 12,
            title: 'Submenu 6',
            url: '/',
            target: null,
            isActive: false,
            children: [
              {
                id: 21,
                title: 'Sub sub menu 5',
                url: '/',
                target: null,
                isActive: false,
                children: [],
              },
              {
                id: 22,
                title: 'Sub sub menu 6',
                url: '/',
                target: null,
                isActive: false,
                children: [],
              },
            ],
          },
          {
            id: 13,
            title: 'Submenu 7',
            url: '/',
            target: null,
            isActive: false,
            children: [
              {
                id: 23,
                title: 'Sub sub menu 7',
                url: '/en/learning-platform/applications/real-time-qpcr/',
                target: null,
                isActive: false,
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        title: 'Menu 5',
        url: '/',
        target: null,
        isActive: false,
        children: [
          {
            id: 14,
            title: 'Submenu 8',
            url: '/en/about-us/who-we-are/',
            target: null,
            isActive: false,
            children: [
              {
                id: 61,
                title: 'Credo',
                url: '/en/about-us/who-we-are/credo/',
                target: null,
                isActive: false,
                children: [],
              },
              {
                id: 57,
                title: 'Contacts',
                url: '/en/about-us/who-we-are/contacts/',
                target: null,
                isActive: false,
                children: [],
              },
            ],
          },
          {
            id: 15,
            title: 'Submenu 9',
            url: '/en/about-us/where-we-are/',
            target: null,
            isActive: false,
            children: [],
          },
          {
            id: 16,
            title: 'Submenu 10',
            url: '/en/about-us/careers/',
            target: null,
            isActive: false,
            children: [],
          },
        ],
      },
      {
        id: 6,
        title: 'Menu 6',
        url: '/',
        target: null,
        isActive: false,
        children: [],
      },
    ],
  },
}

export type HeaderType = HeaderProps

export default header
