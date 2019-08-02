# `React, Typesctript, styled-components` and `webpack` server side rendering app implementation for usage with `ReactJS.NET`

Example of server side rendered react app with exposed react components to consume through `ReactJS.net` (`C#` and other `.NET` languages library, focusing specially on `ASP.NET MVC`)

## Installation

- Clone or fork this repository
- run `yarn` in command line

## Run

For development enviroment run `yarn ssr-client`. After succesfull build, run `yarn ssr-server` to serve new server build. FE and server are rebuilded after every change.

After compoilation, open `localhost:8080`

## Production

Client side of production is build by `yarn build`. After that, as JS can also server as server side rendered version, your server may need to run `yarn build:net` to prepare version of JS to be consumed by server. All react components should be exposed in `server/SSR.tsx` by adding them to `global` variable in example.

It is highly recomended to expose every react component separatelly.
