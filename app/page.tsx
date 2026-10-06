import { CareerContext } from "@/components/career-context";
import { CareerJourney } from "@/components/career-journey";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Hobbies } from "@/components/hobbies";
import { Projects } from "@/components/projects";
import { RoleSpectrum } from "@/components/role-spectrum";
import { SiteNav } from "@/components/site-nav";
import { SceneDeck } from "@/components/scene-deck";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <main>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#183153] focus:px-4 focus:py-2 focus:text-white">Skip to content</a>
      <SiteNav />
      <div id="content">
        <SceneDeck>
        <Hero />
        <RoleSpectrum />
        <Projects />
        <CareerJourney />
        <Education />
        <CareerContext />
        <Skills />
        <Contact />
        </SceneDeck>
        <Hobbies />
      </div>
      <Footer />
    </main>
  );
}
