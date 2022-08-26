# React Learning Practical + Theoritcal

# Components:

<p>&nbsp<p>

#### Components are resuable bits of code. They always work like javascript functions and always return HTML.

<p>&nbsp<p>

#### Components are like javascript functions. They accept arbitrary Inputs called `props` and return `React Elements` which tell browser what should appear on UI.

<p>&nbsp<p>

#### Components allow you to create UI and split it into different independent and reusable pieces, think of each piece in isolation.

<p>&nbsp<p>

#### There are two types of components.The component name must start with Capital Letter[1] StateFul and [2] StateLess.

<p>&nbsp<p>

#### In React, a stateful component is a component that holds some state. Stateless components, by contrast, have no state. Note that both types of components can use props In the example, there are two React components. The Store component is stateful and the Week component is stateless.

```class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sell: 'anything' };
  }
  render() {
    return <h1>I'm selling {this.state.sell}.</h1>;
  }
}

class Week extends React.Component {
  render() {
    return <h1>Today is {this.props.day}!</h1>;
  }
}
```

# Class Component:

### Class component must include statement like `extends React.Component()`. This statement creates inheritance to react component and has special access to React.Component's FUNCTIONS. Class component also require `render()` method which inturn returns `HTML`.

# Function Component

### Function Component also behaves the same way as Class component. Function component also returns `HTML`.But the difference is that functional component can be written with less code.

```
function Car() {
  return (
    <h1>This is simple functional Component<h1>
    <h2>Hi! I'm Car <h2>
  )
}
```

# Props

### Props are the special objects in React. props stands for `property`.Props are useful when the user has to pass data from one (`parent`) component to another (`child`)component.Props flow in one direction only from parent to child.

```
import Welcome from "./Welcome";

function App() {
  return (
    <div>
    <welcome name="Yasir"/>
    <welcome name="Yasir"/>
    <welcome  name="Yasir"/>
    </div>
  )
}
```

```
function Welcome(props) {
  return (
    <h1>Hello! {props.name}<h1>
  )
}
```

# State

### State is like a variable where we can store data. And this data will define the UI of react app upon render.React Component has a special object which is called `state`.State belongs to the component. upon changes , the component re-renders.Always use the `setState()` method to change the state object, it will ensure that the component knows its been `updated` and calls the `render()` method (and all the other `lifecycle methods`).

#### Simple useState and setState example 👇

```
import React, { useState } from "./react";

function Car() {

  const [count, setCount]  = useState(0);

  const Increment = () => {
    setState(count + 1)
  }

  return (
    <h1>This is simpe example of useState and setState<h1>
    <button onClick={Increment}>{count } </button>
  )
}
```

# Hooks

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

```
