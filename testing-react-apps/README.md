# Mastering React: How To Test Your React Application

[![Greenkeeper badge](https://badges.greenkeeper.io/JoeKarlsson/testing-react-apps.svg)](https://greenkeeper.io/)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)


Testing Front End applications can be hard to wrap your head around.  We will dig into how we test new React features for high traffic web applications using Jest, and Enzyme. We will cover the three levels of testing:

1) Unit testing React
1) Behavioral testing our interactive React Components
1) Integration testing our entire application.

Slides: [Mastering React: How To Test Your React Application Slides](https://slides.com/joekarlsson/testing-react-apps/edit)

### Getting Started

* Run `npm install && npm start`

### Run Unit/Integration Tests

* Run `npm test`

### Running E2E Tests

1) Download latest selenium standalone server

		curl -O http://selenium-release.storage.googleapis.com/3.5/selenium-server-standalone-3.8.1.jar
1) Download the latest version geckodriver

		curl -L https://github.com/mozilla/geckodriver/releases/download/v0.16.0/geckodriver-v0.16.0-macos.tar.gz | tar xz
1) Run `npm start`
1) In a new terminal, run `npm run start:selenium`
1) In a new terminal, run `npm run test:e2e`

### Contributing

Don't hesitate to create a pull request. Every contribution is appreciated. In development you can start the tests by calling `npm test`. Checkout our [contribution README](https://github.com/JoeKarlsson/testing-react-apps/blob/master/CONTRIBUTING.md) for more info.

### Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150 height="150"
        src="https://avatars.githubusercontent.com/JoeKarlsson?v=3">
        <br />
        <a href="https://github.com/JoeKarlsson">Joe Karlsson</a>
      </td>
    <tr>
  <tbody>
</table>


#### [MIT](./LICENSE)
