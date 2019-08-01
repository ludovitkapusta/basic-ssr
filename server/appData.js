export const appData = {
  header: {
    general: {},
    config: {
      logo: 'http://satyr.io/120x50/red'
    }
  },
  footer: {
    general: {},
    config: {}
  },
  homepage: {
    general: {},
    config: {
      text1:
        'This is Homepage. It is mounted by client script in client/index.js. It can contain JS functionality',
      text2: 'It can contain other components'
    }
  },
  contact: {
    general: {},
    config: {
      text:
        'This component is render by SSR only. It is not mounted by client script in client/index.js and it is not possible to run here any client JS.',
      copyright: '© 2019'
    }
  }
}
