import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      <Timeline />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
