module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    home: {
      personalInfor: [
        { label: "Age", value: "30" },
        { label: "Residence", value: "belgium" },
        { label: "Address", value: "27 rue léopold, 1000 bruxelles" },
        { label: "e-mail", value: "sadikosad@gmail.com" },
        { label: "Phone", value: "0032492436675" },
        { label: "Freelance", value: "Available" },
      ],
    },
    resume: {
      experience: [
        {
          icon: "fa fa-mobile",
          companyName: "Little Big Smala",
          duration: "Jan 2020 – Dec 2021",
          role: "Front end developer",
          roleDescription:
            "integrator, React developer , React-Native et React-Native-Web",
          task:
            " Integrating html5 / css3 PSD mockups, Develop React, React-Native and React-Native-Web components, Creating generic components in Storybook",
        },
        {
          icon: "fa fa-rocket ",
          companyName: "Toolynk",
          duration: "AVR 2018 – Jan 2020",
          role: "Front end developer",
          roleDescription: "integrator, React developer , React-Native",
          task:
            "Integrating html5 / css3 PSD mockups,Develop React and React-Native components, Creating generic components",
        },
        {
          icon: "fa fa-briefcase",
          companyName: "3dfordeco",
          duration: "MARCH 2016 – MARCH 2018",
          role: "Integrator & web-Designer (2D ,3D)",
          roleDescription:
            "integrator, React developer , React-Native et React-Native-Web",
          task:
            "Creation UX/UI des maquettes PSD, Integrating html5 / css3 PSD mockups ,CMS administration,Creation 3D model with 3DS max",
        },
      ],
      mySkills: [
        "Javascript ES6",
        "reactJs",
        "react-native",
        " React-Native-Web",
        "Redux",
        "GIT",
        "storybook",
        "HTML",
        "CSS",
        "SASS",
        "LESS",
        "Styled Components",
      ],
    },
    services: [
      {
        icon: " fa fa-globe ",

        title: "Web Development",
        subtitle: "we develop web applications with react JS",
      },
      {
        icon: " fa fa-mobile ",
        title: "Mobile Development",
        subtitle:
          "we develop mobile applications with react-native & react-native-web",
      },
      {
        icon: " fa fa-desktop ",
        title: "Web Design",
        subtitle: "we do the design for web and mobile applications",
      },
    ],
    panelColors: [
      "#7e6df6",
      "#F44336",
      "#2196F3",
      "#FF5722",
      "#2eca7f",
      "#29B6F6",
      "#E91E63",
      "#A0F",
      "#FF9800",
      "#FBC02D",
      "#9dd100",
      "#26d9ac",
    ],
    header: {
      menus: [
        { link: "/", title: "Home" },
        { link: "/Resume", title: "Resume" },
        { link: "/Services", title: "Services" },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
