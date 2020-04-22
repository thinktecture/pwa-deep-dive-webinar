# PWA Deep Dive: Offlineanwendungen im Griff

Trainer: [Christian Liebel](https://twitter.com/christianliebel), Thinktecture.

## 0. Requirements

* Current version of node
* Any static HTTP server (the samples here show `lite-server`)

## 1. Manual

```sh
cd 01_manual
npx lite-server
```

## 2. Workbox

```sh
cd 02_workbox
npm i -g workbox-cli
workbox generateSW
npx lite-server
```

## 3. Angular

```sh
cd 03_angular
npm i
ng build --prod
cd dist/myPwa
npx lite-server
```
