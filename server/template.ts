export default (markup: string) => `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <body>
      <div id="app">
        ${markup}
      </div>
      <div id="clientRenderContainer"></div>
      <script type="text/javascript" src="bundle.js"></script>
    </body>
  </html>
`

// <div id="clientRenderContainer"></div>
