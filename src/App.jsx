// import { Counter } from './features/counter/Counter';
import { Children } from 'react';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Provider } from 'react-redux'
import store from './app/store'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
]);

function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    </div>
  );
}

export default App;
