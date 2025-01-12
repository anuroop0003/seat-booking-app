import { createBrowserRouter } from "react-router-dom";
import Movies from "../page/Movies/Movies";
import Screen from "../page/Screen/Screen";
import Theatre from "../page/Theatre/Theatre";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/theatre/:movie_name/:movie_language/:movie_censorship/:movie_id",
    element: <Theatre />,
  },
  {
    path: "/theatre/:movie_name/:movie_language/:movie_censorship/:movie_id/screen/:theatre_id/:timing",
    element: <Screen />,
  },
]);

export default router;
