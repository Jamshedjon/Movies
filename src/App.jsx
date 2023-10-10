import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Trending from "./pages/Trending";
import TvSeries from "./pages/TvSeries";
import Bookmarked from "./pages/Bookmarked";
import Error from "./components/Error";
import Preview from "./components/Preview";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <Error />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/trending",
                    element: <Trending />,
                },
                {
                    path: "/movies",
                    element: <Movies />,
                },

                {
                    path: "/tvSeries",
                    element: <TvSeries />,
                },
                {
                    path: "/bookmarked",
                    element: <Bookmarked />,
                },
                {
                    path: "/movie/:id",
                    element: <Preview />,
                },
            ],
        },
    ]);
    return <RouterProvider router={routes} />;
}

export default App;
