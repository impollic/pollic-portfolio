import { useRef, useEffect, useState } from "react";

export default function Carrousel({ idioma }: { idioma: string }) {
  const isPortuguese = idioma === "pt";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      title: "Javascript",
      desc: isPortuguese ? "Linguagem de programação" : "Programming language",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      title: "TypeScript",
      desc: isPortuguese ? "JavaScript tipado" : "Typed JavaScript",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      title: "Python",
      desc: isPortuguese ? "Linguagem de programação" : "Programming language",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      title: "Java",
      desc: isPortuguese ? "Linguagem de programação" : "Programming language",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      title: "HTML",
      desc: isPortuguese ? "Marcação web" : "Web markup",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      title: "CSS",
      desc: isPortuguese ? "Estilização web" : "Web styling",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React",
      desc: isPortuguese ? "Biblioteca para interfaces" : "UI library",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      title: "React Native",
      desc: isPortuguese ? "Framework mobile" : "Mobile framework",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      title: "Next.js",
      desc: isPortuguese ? "Framework React" : "React framework",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      title: "Tailwind CSS",
      desc: isPortuguese ? "Framework CSS utilitário" : "Utility-first CSS",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
      title: "Ant Design",
      desc: isPortuguese ? "Biblioteca de componentes" : "Component library",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      title: "PostgreSQL",
      desc: isPortuguese ? "Banco de dados" : "Database",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      title: "Node.js",
      desc: isPortuguese ? "Runtime JavaScript" : "JavaScript runtime",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      title: "Git",
      desc: isPortuguese ? "Controle de versão" : "Version control",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      title: "GitHub",
      desc: isPortuguese ? "Hospedagem de código" : "Code hosting",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      title: "Figma",
      desc: isPortuguese ? "Design de interfaces" : "Interface design",
    },
    {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/p5js/p5js-original.svg",
      title: "p5.js",
      desc: isPortuguese ? "Biblioteca para canvas" : "Canvas library",
    },
    {
      img: "https://ui.shadcn.com/favicon.ico",
      title: "shadcn/ui",
      desc: isPortuguese ? "Componentes React" : "React components",
    },
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    const scrollSpeed = 1;

    const scroll = () => {
      if (!isPaused && scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2;

        if (scrollContainer.scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }

        scrollContainer.scrollLeft += scrollSpeed;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      ref={scrollRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        width: "100%",
        height: "320px",
        marginTop: "20px",
        padding: "10px 0",
        overflowX: "auto",
        overflowY: "hidden",
        position: "relative",
        cursor: "grab",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        background: "white",
      }}
      className="hide-scrollbar"
      onMouseDown={(e) => {
        const target = e.currentTarget;
        target.style.cursor = "grabbing";
        setIsPaused(true);
        const startX = e.pageX - target.offsetLeft;
        const scrollLeft = target.scrollLeft;

        const handleMouseMove = (e: MouseEvent) => {
          const x = e.pageX - target.offsetLeft;
          const walk = (x - startX) * 2;
          target.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
          target.style.cursor = "grab";
          setIsPaused(false);
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "10px",
          width: "max-content",
          background: "white",
        }}
      >
        {cards.map((card, i) => (
          <Card
            key={`card-${i}`}
            img={card.img}
            title={card.title}
            desc={card.desc}
          />
        ))}
        {cards.map((card, i) => (
          <Card
            key={`card-duplicate-${i}`}
            img={card.img}
            title={card.title}
            desc={card.desc}
          />
        ))}
      </div>

      <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
    </div>
  );
}

function Card({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        width: "220px",
        height: "300px",
        backgroundColor: "white",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
        boxShadow: "0px 3px 0px rgb(220, 220, 220)",
        border: "2px solid rgba(0,0,0,0.1)",
        flexShrink: 0,
      }}
    >
      <img
        src={img}
        alt={title}
        style={
          {
            height: "80px",
            width: "80px",
            userSelect: "none",
            pointerEvents: "none",
          } as React.CSSProperties
        }
      />
      <p
        style={{
          fontWeight: 500,
          fontSize: "20px",
          margin: 0,
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontWeight: 200,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
}
