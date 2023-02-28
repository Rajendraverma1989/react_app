import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import ApplicationTable from "./Component/ApplicationTable";
import ResourcesTable from "./Component/ResourcesTable";
import NavBar from "./Containers/NavBar";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ApplicationTable />} />
        <Route path="/home" element={<Home />} />
        <Route path="/application" element={<ApplicationTable />} />
        <Route path="/resource" element={<ResourcesTable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
