import { Route, Routes } from "react-router-dom";
import About from "../page/about/About";
import Contact from "../page/contact/Contact";
import Main from "../page/main/Main";
import Projects from "../page/projects/Projects";
import Recruit from "../page/recruit/Recruit";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects/all" element={<Projects />} />
      <Route path="/projects/space" element={<Projects />} />
      <Route path="/projects/graphic" element={<Projects />} />
      <Route path="/projects/planning" element={<Projects />} />
      <Route path="/projects/boothtainer" element={<Projects />} />
      <Route path="/projects/webinar" element={<Projects />} />
      <Route path="/projects/others" element={<Projects />} />
      <Route path="/recruit" element={<Recruit />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default Router;
