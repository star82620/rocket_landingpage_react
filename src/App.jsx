import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { REPO_BASE_NAME } from "./constants/basename";
import Marquee from "./components/Marquee";
import BootcampRocket from "./containers/BootcampRocket";
import CoworkingSpace from "./containers/CoworkingSpace";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index element={<BootcampRocket />} />
        <Route path="coworking_space" element={<CoworkingSpace />} />
      </>
    ),
    {
      basename: REPO_BASE_NAME,
    }
  );
  return (
    <>
      <Marquee />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
