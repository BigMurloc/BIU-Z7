import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./about/About";
import Services from "./services/services";
import Contact from "./contact/Contact";
import ContactUs from "./contact/ContactUs";
import ContactDe from "./contact/ContactDe";
import ContactPl from "./contact/ContactPl";
import NotFound from "./not-found/NotFound";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/contact/us" element={<ContactUs/>}/>
            <Route path="/contact/pl" element={<ContactPl/>}/>
            <Route path="/contact/de" element={<ContactDe/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
