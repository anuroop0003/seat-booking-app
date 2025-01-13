import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ScreenLoader from "../components/ScreenLoader/ScreenLoader";

// Lazy loading for the components
const Movies = React.lazy(() => import("../page/Movies/Movies"));
const Theatre = React.lazy(() => import("../page/Theatre/Theatre"));
const Screen = React.lazy(() => import("../page/Screen/Screen"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<ScreenLoader />}>
        <Movies />
      </Suspense>
    ),
  },
  {
    path: "/theatre/:movie_name/:movie_language/:movie_censorship/:movie_id",
    element: (
      <Suspense fallback={<ScreenLoader />}>
        <Theatre />
      </Suspense>
    ),
  },
  {
    path: "/theatre/:theatre_name/:movie_name/:movie_language/:movie_censorship/:movie_id/screen/:theatre_id/:movie_timing",
    element: (
      <Suspense fallback={<ScreenLoader />}>
        <Screen />
      </Suspense>
    ),
  },
]);

export default router;
