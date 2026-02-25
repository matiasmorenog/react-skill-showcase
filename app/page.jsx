import PortfolioPage from "./portfolio-page";

export default function Page() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matias Adrian Moreno Gallo",
    jobTitle: "Frontend Developer",
    url: "https://react-skill-showcase.vercel.app",
    email: "mailto:matiasmorenog@gmail.com",
    sameAs: [
      "https://github.com/matiasmorenog",
      "https://www.linkedin.com/in/matias-moreno/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidad Tecnologica Nacional (UTN)",
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Matias Moreno Portfolio",
    url: "https://react-skill-showcase.vercel.app",
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: "Matias Adrian Moreno Gallo",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
      />
      <PortfolioPage />
    </>
  );
}
