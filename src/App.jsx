import "./App.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import Team from "./pages/Team/Team.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import ScheduleAndPricing from "./pages/ScheduleAndPricing/ScheduleAndPricing.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "team", element: <Team /> },
      { path: "schedule-and-pricing", element: <ScheduleAndPricing /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "contact-us", element: <Contact /> },
    ],
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
