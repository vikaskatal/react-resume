import clinkHome from "../assets/images/clink/clink_home.jpg";
import clinkHiw from "../assets/images/clink/clink_hiw.jpg";
import clinkVideo from "../assets/images/clink/clink_video.jpg";
import clinkMobile from "../assets/images/clink/clink_mobile.jpg";
import clinkLogo from "../assets/images/clink/clink_logo.png";

import DockablLogo from "../assets/images/dockabl/dockabl_logo.png";

export const WorkPageTheme = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

export const WorkList = [
  {
    id: 1,
    title: "Clink Website",
    tag: "Feedback sharing app for teams",
    description: "Feedback sharing app for teams",
    url: "https://www.linkedin.com/company/clinkatwork/",
    logo: clinkLogo,
    color: {
      code: "#efb959",
      theme: WorkPageTheme.DARK,
    },
    about: [
      "Building a visually striking website of application Clink with audio, video, images, and animated elements whilst remaining fast to use across a wide range of devices. Clink is a feedback sharing app for teams, that helps you share, organize & analyze feedback, especially for remote working.",
      "The clink team approached me to develop an interactive and smooth front-end experience for the Clink - Feedback sharing app for teams. The project required solutions to produce a website that matched the detailed designs and interactivity concepts provided by the Clink design team whilst remaining fast to use across a wide range of devices. ",
      "To save on overall cost and reduce development time, I built the website on WordPress and Sass Bootstrap. I have given a lot of out-of-the-box features such as Custom image-plus-video slider with next & previous actions (How it works section), Show videos from Youtube API with custom actions, Podcast page with HTML Audio, Blog pages, and Responsive layouts which I customized to respect the designs.",
    ],
    images: [
      {
        url: clinkHome,
        label: "Clink Home Page",
        description: "",
      },
      {
        url: clinkHiw,
        label: "Clink How it work Slider Section",
        description: "",
      },
      {
        url: clinkVideo,
        label: "Clink Video Series Page",
        description: "",
      },
      {
        url: clinkMobile,
        label: "Clink Mobile Screens",
        description: "",
      },
    ],
    technologies: [
      "Semantic HTML",
      "Javascript",
      "Responsive CSS with mobile first approach",
      "Sass/Scss",
      "ECMAScript",
      "WordPress",
      "Bootstrap",
    ],
  },
  {
    id: 2,
    title: "Dockabl App",
    tag: "Work management app",
    description: "Work management app",
    url: "app.dockabl.com",
    logo: DockablLogo,
    color: {
      code: "#335aff",
      theme: WorkPageTheme.DARK,
    },
    about: [
      "Dockabl is a SAAS-based employee experience platform. Some of their features include Objective setting and check-ins through which clients can define and measure their objectives. On-going Reviews assess individuals, and teams on objectives, skills, and competencies. Crowd-source Recognition fosters a positive and collaborative work culture by recognizing individuals and teams on an ongoing basis.",
      "I was the Frontend/Software developer for the Dockabl Web Application and initial dockabl website in 2017 and worked closely with the company for 2 years and 8 months. By mid-2019, Dockabl had successfully raised a total investment fund of 1.3 million dollars.",
      "We develop Dockabl Web Application with the help of angularjs framework and CSS preprocessed SASS. Build Recognition with catalog module for mobile as Progress web application using React library.",
      "Here I partner with the design team to execute user interfaces and design systems and provide assistance to the back-end developers in troubleshooting and coding.",
      "Also Revamped and maintained the company website Dockabl(https://www.dockabl.com/) with a focus on SEO using code technologies like HTML, CSS/Sass, Javascript, JQuery, and Php.",
    ],
    images: [],
    technologies: [
      "Front-End development",
      "AngularJS",
      "React",
      "Javascript",
      "CSS3 preprocessed with Sass",
      "Semantic HTML",
      "ECMAScript",
      "Webpack",
    ],
  },
];
