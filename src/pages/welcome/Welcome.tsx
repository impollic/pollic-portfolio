import { useState, useEffect } from "react";
import Wave from "react-wavify";
import styles from "./welcome.module.css";
import "animate.css";

export default function Welcome({ idioma }: { idioma: string }) {
  const introduction = idioma === "pt" ? "Olá, me chamo" : "Hi, my name is";

  const positions =
    idioma === "pt"
      ? [
          "Desenvolvedor Full Stack",
          "Desenvolvedor Front-End",
          "Desenvolvedor Mobile",
          "Desenvolvedor de Jogos",
        ]
      : [
          "Full Stack Developer",
          "Front-End Developer",
          "Mobile Developer",
          "Game Developer",
        ];

  const [currentPosition, setCurrentPosition] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const position = positions[currentPosition];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === position) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentPosition((prev) => (prev + 1) % positions.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? position.substring(0, displayText.length - 1)
          : position.substring(0, displayText.length + 1),
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentPosition, positions]);

  return (
    <article className={styles.welcome} id="Tela-Inicial">
      <div className={styles.maincontent}>
        <p
          className={`${styles.text} animate__animated animate__fadeInDown animate__slow`}
        >
          {introduction}
        </p>
        <p className={`${styles.text} ${styles.gradient}`}>Apollo Borges :)</p>
        <button
          className={`${styles.developer} animate__animated animate__fadeIn animate__delay-1s`}
        >
          {displayText}
          <span className={styles.cursor}>|</span>
        </button>
      </div>

      <Onda />
      <Sociais />
    </article>
  );
}

function Sociais() {
  const links = [
    {
      url: "https://github.com/ImPollic",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png",
      alt: "github",
    },
    {
      url: "https://instagram.com/apollo.bm",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/instagram-white-icon.png",
      alt: "instagram",
    },
    {
      url: "https://br.linkedin.com/in/apollo-borges-9358b939b",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-white-icon.png",
      alt: "linkedin",
    },
    {
      url: "https://discord.com/invite/b4RzDx4M",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png",
      alt: "discord",
    },
  ];

  return (
    <article
      className={`${styles.sociais} animate__animated animate__fadeInRight animate__delay-1s`}
    >
      {links.map((link, index) => (
        <div
          key={link.alt}
          className={`${styles.sociaisLink} animate__animated animate__fadeInRight`}
          style={{ animationDelay: `${1.5 + index * 0.1}s` }}
          onClick={() => window.open(link.url, "_blank")}
        >
          <img src={link.icon} alt={link.alt} width={28} height={28} />
        </div>
      ))}
    </article>
  );
}

function Onda() {
  const waves = [
    {
      fill: "rgba(153, 203, 234, 0.25)",
      height: 55,
      amplitude: 65,
      speed: 0.12,
      points: 5,
    },
    {
      fill: "rgba(153, 203, 234, 0.45)",
      height: 70,
      amplitude: 45,
      speed: 0.18,
      points: 4,
    },
    {
      fill: "rgba(153, 203, 234, 0.7)",
      height: 85,
      amplitude: 30,
      speed: 0.22,
      points: 3,
    },
  ];

  return (
    <div className={styles.waveContainer}>
      {waves.map((wave, index) => (
        <Wave
          key={index}
          fill={wave.fill}
          paused={false}
          options={{
            height: wave.height,
            amplitude: wave.amplitude,
            speed: wave.speed,
            points: wave.points,
          }}
          className={styles.wave}
        />
      ))}
    </div>
  );
}
