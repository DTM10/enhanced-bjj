import './App.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <Home /> }],
  },
]);

/**
 * App is the root component of the application.
 * It represents the highest level component in the component hierarchy.
 *
 * @return {JSX.Element} The JSX Element representing the root component of the application.
 */
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
