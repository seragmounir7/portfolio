import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { AboutMe } from "./components/sections/AboutMe";
import { Journey } from "./components/sections/Journey";
import { Portfolio } from "./components/sections/Portfolio";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <Navbar />
      <main>
        <AboutMe />
        <Journey />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
