# [Specialized](https://specialized-react.herokuapp.com/)

![Specialized](screenshots/home-page.gif)

> An online e-commerce bike shop built with React, Redux and Firebase.

![Specialized-demo](screenshots/demo.gif)

---

### Table of Contents

- [Description](#description)
- [Installation](#installation)
- [What I Learned](#what-i-learned)
- [References](#references)
- [License](#license)
- [Info](#info)

---

## Description

Specialized is a globally famous brand that builds the best quality terrain bikes.

I have created a front end web app similar to the [specialized website](https://www.specialized.com/). The app has a clean and responsive UI, and a fully functional cart where a user can Add/Edit/Delete items.

Have a look at the Live version [here](https://specialized-react.herokuapp.com/).

#### Technologies

- React with Redux
- Firebase

#### Features

- Navigation and dynamic routing
- Add/Edit/Delete items to cart
- Firebase google and email authorization
- Firestore for storage
- Cart details persisted in session storage
- Stripe API integration for payment

---

## Installation

#### `Step 1` - Clone the repo

```bash
$ git clone https://github.com/roheat/specialized
```

#### `Step 2` - cd in the repo

```bash
$ cd specialized
```

#### `Step 3` - Install dependencies

```bash
$ npm install
```

#### `Step 4` - [Add Firebase to the project](https://firebase.google.com/docs/web/setup) and provide your app's Firebase project configuration to `/src/firebase/firebase.utils.js`.

#### `Step 5` - Run application

```bash
$ npm start
```

In browser, open [http://localhost:3000](http://localhost:3000)

---

## What I Learned

- Single page application routing using react router
- Wiring up redux by setting up the store, reducers, actions
- Working with selectors
- Setting up folder architecture for a large project
- Using firebase with react
- Authentication with email and password using firebase
- Working with SASS
- Persisting redux store data into session storage using redux-persist
- Working with nested routes
- Integrating Stripe API
- Deployment using heroku

---

## References

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [Firebase](https://firebase.google.com/docs)
- [redux-persist](https://github.com/rt2zz/redux-persist)
- [Specialized](https://www.specialized.com/)

---

## License

MIT © [roheat](https://github.com/roheat)

---

## Info

- Website - [roheat.com](https://roheat.com)
- Twitter - [@roheatdotcom](https://twitter.com/roheatdotcom)
- LinkedIn - [Rohith Srivathsav](https://www.linkedin.com/in/rohith-srivathsav/)

<div align="center">
  <sub>If you find a bug or improvement, feel free to raise an issue and send a PR!</sub>
</div>
