import { createBrowserRouter } from "react-router-dom";
import Movies from "../page/Movies/Movies";
import Theatre from "../page/Theatre/Theatre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/theatre/:id",
    element: <Theatre />,
  },
]);

export default router;
