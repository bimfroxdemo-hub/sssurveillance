import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // ✅ ADD THIS

import Index from "./Pages/Index";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import WhatsAppButton from "./Pages/WhatsAppButton.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider> {/* ✅ ADD THIS */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>

        <WhatsAppButton />
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;