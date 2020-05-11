### `React, Typescript, styled-components` and `webpack` server side rendering app implementation for usage with `ReactJS.NET`

Example of server side rendered react app with exposed react components to consume through `ReactJS.net` (`C#` and other `.NET` languages library, focusing specially on `ASP.NET MVC`)

## Installation

- Clone or fork this repository
- run `yarn` in command line

## `webpack-dev-server` version with live reload

In the project directory run

```javascript
yarn dev
```

Server automatically opens new window in your browse on `localhost:8080`

## `SSR` version

In the project directory run

```javascript
yarn ssr:client
```

After finished build run

```javascript
yarn ssr:server
```

This will serve new server build. FE and server are rebuilded after every change. But manual browser refresh is needed.

After server compilation, app is served on `localhost:8080`

## Production

Client side of production is build by `yarn build`. After that, as JS can also server as server side rendered version, your server may need to run `yarn build:net` to prepare version of JS to be consumed by server. All react components should be exposed in `server/SSR.tsx` by adding them to `global` variable in example.

It is highly recomended to expose every react component separatelly.
