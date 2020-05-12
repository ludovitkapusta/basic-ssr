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

Client side of production is built by `yarn build`. These are the files, that are handling JS operations on client browser. As this project is aimed to be used by ReactJS.net together with SSR provided by IIS server, addional files are required for server to be consumed. ReactJS.net have their own needs for compatiblity, so there is prepared separated process to build them: `yarn build:net`. All react components should be exposed in `server/SSR.tsx` by adding them to `global` variable in example, so ReactJS.net can see them, read them and render them
