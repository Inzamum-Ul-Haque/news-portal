const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);
