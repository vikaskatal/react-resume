import clinkHome from "../assets/images/clink_home.jpg";
import clinkHiw from "../assets/images/clink_hiw.jpg";
import clinkVideo from "../assets/images/clink_video.jpg";
import clinkMobile from "../assets/images/clink_mobile.jpg";

export const workList = [
  {
    id: 1,
    name: "Dockabl",
    tag: "Work management app",
    description: "Work management app",
    url: "app.dockabl.com",
    color: {
      code: "#335aff",
      theme: "dark",
    },
    about: [
      "An employee experience platform, that enhances productivity, enables continuous performance & drives engagement in an effective way.",
      "A SAAS based tool, we’re nimble & flexible, with a superior interface & a rich feature set like Objectives & Key Results, Reviews, Recognition, Feedback, etc",
    ],
    images: [],
    technologies: [
      "Front-End",
      "HTML5",
      "CSS3 preprocessed with SASS",
      "Javascript",
      "AngularJS",
      "React",
      "ECMAScript",
      "Webpack",
    ],
  },
  {
    id: 2,
    name: "Clink Website",
    tag: "Feedback sharing app for teams",
    description: "Feedback sharing app for teams",
    url: "https://www.clink.work",
    color: {
      code: "#efb959",
      theme: "dark",
    },
    about: [
      "Clink is a feedback sharing app for teams, that helps you share, organize & analyze feedback, especially for remote working.",
      "By doing so, we enable continuous performance & development for teams.",
    ],
    images: [
      {
        url: clinkHome,
        label: "",
        description: "",
      },
      {
        url: clinkHiw,
        label: "",
        description: "",
      },
      {
        url: clinkVideo,
        label: "",
        description: "",
      },
      {
        url: clinkMobile,
        label: "",
        description: "",
      },
    ],
    technologies: [
      "HTML5",
      "CSS3 preprocessed with SASS",
      "Javascript",
      "ECMAScript",
      "WordPress",
    ],
  },
];
