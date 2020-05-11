import { GeneralState, KeyString } from '@store/general/types'
import general from './general'

interface MenuItem {
  id: number
  title: string
  url: string
  target: string | null
  isBold: boolean
  children: MenuItem[]
}

export interface FooterState {
  componentSettings: KeyString
  primaryNavigation: MenuItem[]
}

interface FooterProps {
  general: GeneralState
  config: FooterState
}

const footer: FooterProps = {
  general: general.config,
  config: {
    componentSettings: { name: 'footer' },
    primaryNavigation: [
      {
        id: 1,
        title: 'Footer Col 1',
        url: '/',
        target: null,
        isBold: false,
        children: [
          {
            id: 7,
            title: 'Col 1 Link 1',
            url: '/',
            target: '_blank',
            isBold: false,
            children: [],
          },
          {
            id: 8,
            title: 'Col 1 Link 2',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
          {
            id: 9,
            title: 'Col 1 Link 3',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
        ],
      },
      {
        id: 2,
        title: 'Footer Col 2',
        url: '/',
        target: '_blank',
        isBold: false,
        children: [
          {
            id: 10,
            title: 'Col 2 Link 1',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
          {
            id: 11,
            title: 'Col 2 Link 2',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
        ],
      },
      {
        id: 3,
        title: 'Footer Col 3',
        url: '/',
        target: null,
        isBold: false,
        children: [
          {
            id: 12,
            title: 'Col 3 Link 1',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
          {
            id: 13,
            title: 'Col 3 Link 2',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
        ],
      },
      {
        id: 4,
        title: 'Footer Col 4',
        url: '/',
        target: null,
        isBold: false,
        children: [
          {
            id: 14,
            title: 'Col 4 Link 1',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
          {
            id: 15,
            title: 'Col 4 Link 2',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
        ],
      },
      {
        id: 5,
        title: 'Footer Col 5',
        url: '/',
        target: null,
        isBold: false,
        children: [
          {
            id: 16,
            title: 'Col 5 Link 1',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
          {
            id: 17,
            title: 'Col 5 Link 2',
            url: '/',
            target: null,
            isBold: false,
            children: [],
          },
        ],
      },
      {
        id: 6,
        title: 'Footer Col 6',
        url: '/',
        target: null,
        isBold: false,
        children: [
          {
            id: 18,
            title: 'Col 6 Link 1',
            url: 'mailto:',
            target: null,
            isBold: true,
            children: [],
          },
          {
            id: 19,
            title: 'Col 6 Link 2',
            url: '/',
            target: null,
            isBold: true,
            children: [],
          },
        ],
      },
    ],
  },
}

export type FooterType = FooterProps
export default footer
