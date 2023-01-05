import { Route, Routes } from "react-router-dom";
import { adminRoutes } from "./routes/admin";
import AdminLayout from "./views/layouts/admin-layout/AdminLayout";

function App() {
  return (
    <Routes>
      <Route element={<AdminLayout/>} path="/">
        {adminRoutes && adminRoutes.map((route, idx) => (
          <Route element={<route.element/>} path={route.path} key={idx} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
