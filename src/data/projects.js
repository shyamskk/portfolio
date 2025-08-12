const projectData = {
  netflix: {
    id: "netflix",
    title: "Netflix Clone",
    description:
      "Developed a Netflix-style streaming UI with Firebase authentication and dynamic content fetched from external APIs.",
    features: [
      "User authentication (Sign Up/Sign In) via Firebase",
      "Dynamic content browsing with multiple genres",
      "Background trailer playback & preview cards",
      "External API integrations (OMDb / YouTube)"
    ],
    techStack: "React, Firebase, OMDb API, YouTube API"
  },
  swiggy: {
    id: "swiggy",
    title: "Swiggy Clone",
    description:
      "Full-stack food ordering app inspired by Swiggy, with persistent cart state and order history.",
    features: [
      "Dynamic restaurant listings and menu browsing",
      "Search & filter, persistent cart using Redux (or context)",
      "Order flow & order history",
      "User authentication & profile"
    ],
    techStack: "React, Redux Toolkit, Node.js, Express.js, MongoDB"
  }
};

export default projectData;
