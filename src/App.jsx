import Navbar from "./components/layout/Navbar";
import ScrollProgress from "./components/ui/ScrollProgress";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import Campus from "./components/sections/Campus";
import Stats from "./components/sections/Stats";
import AdmissionsCTA from "./components/sections/AdmissionsCTA";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import AdmissionsForm from "./components/sections/AdmissionsForm";

function App() {
  return (
    <div className="w-full overflow-x-hidden">

      <ScrollProgress />

      <Navbar />

      <main className="w-full">
        <Hero />
        <About />
        <Academics />
        <Campus />
        <Stats />

        <div className="h-24 w-full bg-white sm:h-28 md:h-32" />

        <AdmissionsCTA />

        <AdmissionsForm />
        <div className="h-24 w-full bg-white sm:h-32 md:h-40" />
        <Contact />
        <div className="h-24 w-full bg-white sm:h-32 md:h-40" />

        <Footer />
      </main>

    </div>
  );
}

export default App;