
import LandingPage from "./home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import Skills from "./skills/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main>
  <LandingPage/>
  <Projects/>
  <About/>
  <Experience/>
  <Skills/>
  <Contact/>
</main>

  );
}
