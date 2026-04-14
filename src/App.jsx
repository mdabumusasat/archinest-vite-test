import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home1 from "./pages/index";
import Home2 from "./pages/index-2";
import Home3 from "./pages/index-3";
import NewsDetails from "./pages/news-details";
import NewsGrid from "./pages/news-grid";
import PageError from "./pages/page-404";
import PageAbout from "./pages/page-about";
import PageContact from "./pages/page-contact";
import PageFaq from "./pages/page-faq";
import PagePricing from "./pages/page-pricing";
import PageProjectDetails from "./pages/page-project-details";
import PageProject from "./pages/page-project";
import PageServiceDetails from "./pages/page-service-details";
import PageServices from "./pages/page-services";
import PageTeamDetails from "./pages/page-team-details";
import PageTeam from "./pages/page-team"; 
import PageTestimonial from "./pages/page-testimonial";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/index-2" element={<Home2 />} />
        <Route path="/index-3" element={<Home3 />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/news-grid" element={<NewsGrid />} />
        <Route path="*" element={<PageError />} />
        <Route path="/page-about" element={<PageAbout />} />
        <Route path="/page-contact" element={<PageContact />} />
        <Route path="/page-faq" element={<PageFaq />} />
        <Route path="/page-pricing" element={<PagePricing />} />
        <Route path="/page-project-details" element={<PageProjectDetails />} />
        <Route path="/page-project" element={<PageProject />} />
        <Route path="/page-service-details" element={<PageServiceDetails />} />
        <Route path="/page-services" element={<PageServices />} />
        <Route path="/page-team-details" element={<PageTeamDetails />} />
        <Route path="/page-team" element={<PageTeam />} />
        <Route path="/page-testimonial" element={<PageTestimonial />} />
      </Routes>
    </Router>
  );
}

export default App;