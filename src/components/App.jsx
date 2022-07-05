import { Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import HomeVievs from "./viev/HomeVievs";
import MoviesVievs from "./viev/MoviesVievs";
import NotFoundViev from "./viev/NotFoundViev";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<HomeVievs />} />
          <Route path="movies" element={<MoviesVievs />} />
          <Route path="*" element={ <NotFoundViev/>} />
        </Route>
      </Routes>
    </div>
  );
};
