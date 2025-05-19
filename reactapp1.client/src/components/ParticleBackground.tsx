
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// Import the correct type from the tsparticles-engine package
import type { Engine } from "tsparticles-engine";
import type { Container } from "tsparticles-engine";

interface ParticleBackgroundProps {
  height?: string;
}

const ParticleBackground = ({ height = "400px" }: ParticleBackgroundProps) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // This is needed for full functionality - changed to loadSlim
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    if (container) {
      console.log("Particles container loaded", container);
    }
  }, []);

  return (
    <div className="absolute w-full z-0" style={{ height }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: {
            enable: false,
            zIndex: 0
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 120, // Increased from 80 to create a denser effect
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: "#6495ED", // Primary blue color
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: { min: 1, max: 3 },
              random: true,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce"
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#6495ED",
              opacity: 0.5,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 150,
                duration: 0.4,
              },
            },
          },
          detectRetina: true,
          background: {
            color: {
              value: "transparent"
            }
          },
          preset: "default",
        }}
      />
    </div>
  );
};

export default ParticleBackground;
