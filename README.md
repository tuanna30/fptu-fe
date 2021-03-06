## FPTU Tech Insights — "[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)" web app &nbsp; <a href="https://github.com/gosu-team/fptu-fe/stargazers"><img src="https://img.shields.io/github/stars/gosu-team/fptu-fe.svg?style=social&label=Star&maxAge=3600" height="20"></a>

[FPTU-FE](https://fptu.tech) is an isomorphic web app built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/) and [React](https://facebook.github.io/react/), containing modern web development
tools such as [Webpack](http://webpack.github.io/) and [Babel](http://babeljs.io/).

## Environment

Assuming you have a working NodeJS environment.

## Development

Build develop image:

`docker-compose build`

Run with develop container:

`docker-compose up`

## Production

Build production image:

`docker build -t fptu-fe .`

Run production container:

`docker run -d --name fptu-fe -p 3001:3000 fptu-fe:latest`

## License

Copyright © 2018-present Gosu Team. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/gosu-team/fptu-fe/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.

---

Made with ♥ by Tu Huynh ([fb.com/mr.huynhminhtu](https://fb.com/mr.huynhminhtu))
