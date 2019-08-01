// @ts-check
import { appData } from "./appData";

export default (data: void, markup: string, styleTags: string) => `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>${styleTags}</style>
    <script>window.__SERIALIZED_DATA__ = ${JSON.stringify(data)}</script>
    <script>JS_CONFIG = {}</script>
    <script>JS_CONFIG.general = {}</script>
    <script>JS_CONFIG.footer = ${JSON.stringify(appData.footer.config)}</script>
    <script>JS_CONFIG.header = ${JSON.stringify(appData.header.config)}</script>
    <script>JS_CONFIG.homepage = ${JSON.stringify(appData.homepage.config)}</script>
  </head>
  <body>
    <div id="app">${markup}</div>
    <script type="text/javascript" src="/bundle.js"></script>
  </body>
</html>
`
