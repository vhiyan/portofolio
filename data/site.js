export const site = {
  name: "Kristiawan Devianto",
  role: "Embedded Software Engineer",
  tagline: "Building reliable embedded systems • AI/Robotics • CAN/J1939/UDS",
  email: "kristiawan.devianto@gmail.com",
  resumeUrl: "#", // replace with a public link to your CV/Resume
  socials: [
    { label: "GitHub", href: "https://github.com/vhiyan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/kristiawan-devianto/" },
  ],
  skills: [
    "C/C++ (MISRA)",
    "Python",
    "CAN, J1939, UDS, ISO-TP",
    "Linux services & networking",
    "Redis, MySQL",
    "Arduino, Raspberry Pi, PCAN",
    "Robotics & control (PID, PSO, MPC)"
  ],
  projects: [
    {
      title: "UDS Flashing Tool",
      summary: "Python-based UDS flasher over ISO-TP with configurable STmin/BS and PCAN support.",
      tags: ["Python", "UDS", "ISO-TP", "PCAN"],
      link: "https://github.com/yourusername/uds-flasher"
    },
    {
      title: "J1939 Manager",
      summary: "High-throughput J1939 message manager with BAM/RTS-CTS and Redis pub/sub.",
      tags: ["C", "J1939", "Redis"],
      link: "https://github.com/yourusername/j1939-manager"
    },
    {
      title: "Quadcopter PSO Tuner",
      summary: "Particle Swarm Optimization to auto-tune PID gains for quadcopter roll control.",
      tags: ["PSO", "Control", "Robotics"],
      link: "https://github.com/yourusername/quadcopter-pso"
    }
  ]
};
