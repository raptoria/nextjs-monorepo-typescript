# A Next.js boilerplate monorepo that uses Typescript

## Getting Started

### Development

install lerna

```
npx lerna init
```

install dependencies and bootstrap lerna

```
npm run bootstrap
```

to run a single package using the webpack dev server:

```
npm run dev:webapp
```

to run all packages in dev (this will run each package on a different port):

```
npm run dev
```

### Production

There are 2 ways to prepare your app to run in production. The first is using the `prod` command after a `build` which runs a Node process to serve up a production version of your app. If your app relies on SSR or serverless functions, you would want to use this approach. This is what `Dockerfile.webapp-prod` is doing.

### Method 1

```
npm run build:webapp
npm run prod:webapp
```

these commands will build all of the packages for production (using Node) and then start each package on a different port:

```
npm run build
npm run prod
```

### Method 2

If you are using a [custom server](https://nextjs.org/docs/advanced-features/custom-server) for APIs, which means you aren't making use of Next's SSR, serverless functions and Automatic Static Optimization, then it makes more sense to use `next export` to output your site's static assets and let a more efficient static file server like nginx do the work of serving up your content. This is what `Dockerfile.webapp-static` is doing.

these commands will build your package and generate a folder at the root of your project called `out`:

```
npm run build:webapp
npm run static:webapp
```

### Testing

```
npm run build
npm run test
```

The build command also triggers a build for the shared components `packages/components` that outputs the typescript files into commonjs format, located at `<rootDir>/dist` so Jest can parse it. The TEST_BUILD_FOLDER=dist appended to the test script tells Jest to use the `dist`, or built files for running tests.

Note that all tests commands assume you have already run the build commands. They will not run properly without it.

React Testing Library takes a user centered approach to writing UI tests. Tests are less brittle when they are written from the perspective of what a user would do on a given page, rather than focusing on implementation details. _The more your tests resemble the way your software is used, the more confidence they can give you._

It is possible to debug tests using Chrome or VS code. You can learn about that [here](https://jestjs.io/docs/troubleshooting).


for more build commands, check the package.json at the root, `webapp`.

## Docker Instructions for running apps in Production

Docker files for individual apps are located inside the docker folder.

You can build a production image for webapp with the command

    docker build -f docker/Dockerfile.webapp-prod -t webapp .

You can then run the server

    docker run -i -t --rm -p 8080:80 webapp

Note that running a production version of your webapp means you won't benefit from webpack's hot module reloading, because there is no webpack dev server. That means you won't see changes instantly reflected in your browser when you save the file in VS code.

## Frameworks that are included with this repo

-   [next.js](https://nextjs.org/docs/getting-started) is a React framework that makes routing easy and comes with a lot of awesome optimizations.
-   [antd](https://ant.design/components/overview/) is included as the UI component library of choice.
-   [styled-components](https://styled-components.com/docs) is used for all CSS. Please use this instead of making your own stylesheets. We are going for strictly CSS-in-JS :)
-   [react flow](https://reactflow.dev/) for the DAG component
-   [msw](https://reactflow.dev/) a mock server worker for writing mock APIs against functional tests
-   [playwright](https://playwright.dev/docs/intro) for e2e tests
-   [react testing library](https://testing-library.com/docs/react-testing-library/intro/) for unit/functional tests

## VS code extensions

It is highly recommended that you install the Prettier and Eslint extensions to keep the code consistent.

## FAQ

Why [lerna](https://github.com/lerna/lerna) ?

Lerna is a popular tool for UI monorepos. As UI repos and dependencies grow, module bundle sizes increase and can cause issues when webpack is building or recompiling. Large repos can also increase build time for CI/CD pipelines. Lerna takes care of this by making it easy to build, share, version and deploy individual packages. If you need to go down range and create a UI for a customer, you will be able to pull in any components from this repo since they will be hosted on an internal NPM repo (eg. Nexus).
