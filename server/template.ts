import appData from './appData'

export default (markup: string, styleTags: string): string => `<!DOCTYPE html>
<html lang="en">
  <head>
  <title>Ssr...Ssr...Ssrs</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      body {
        letter-spacing: -0.4px;
        line-height: 18px;
        margin: 0 auto;
        padding: 0;
        width: 100%;
      }
    </style>
    <style>${styleTags}</style>
    <script>JS_CONFIG = ${JSON.stringify(
      Object.entries(appData).reduce((acc, red) => {
        const [key, value] = red
        return {
          ...acc,
          [key]: value.config
        }
      }, {})
    )}</script>
  </head>
  <body>
    <div id="app">${markup}</div>
    <script type="text/javascript" src="/bundle.js"></script>
  </body>
</html>
`
