import { BrowserRouter } from "react-router-dom";
import { Header, Home, ScrollButton, Sections } from "@/components";
import "./global.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Home />
    <Sections />
    <ScrollButton />
  </BrowserRouter>
);

export default App;
