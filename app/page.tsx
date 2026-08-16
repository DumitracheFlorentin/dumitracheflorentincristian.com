import Header from "@/components/landing/header";
import WorkExperience from "@/components/landing/work-experience";
import EducationExperience from "@/components/landing/education-experience";
import Projects from "@/components/landing/projects";
import Skills from "@/components/landing/skills";
import Languages from "@/components/landing/languages";
import Connect from "@/components/landing/connect";
import Footer from "@/components/landing/footer";
import PageContent from "@/components/landing/page-content";

export default function Home() {
  return (
    <PageContent>
      <Header />

      <p className="text-sm sm:text-base text-muted-foreground">
        Ambitious and open-minded engineering graduate with a Master's degree in
        Database and Software Technologies. I bring a motivated attitude, strong
        technical knowledge, and the ability to collaborate effectively within
        teams. Passionate about software development and continuous learning, I
        aim to contribute to innovative and impactful projects.
      </p>

      <WorkExperience />

      <EducationExperience />

      <Projects />

      <Skills />

      <Languages />

      <Connect />

      <Footer />
    </PageContent>
  );
}
