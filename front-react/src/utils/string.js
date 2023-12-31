import "@/styles/summary.css";
import "@/styles/summaryButtonPlatform.css";
import { ReactComponent as Code } from "@/assets/summary/code.svg";
import { ReactComponent as NewsPaper } from "@/assets/summary/news-paper.svg";
import { ReactComponent as LaboratoryFlask } from "@/assets/summary/laboratory-flask.svg";
import { ReactComponent as Chart } from "@/assets/summary/chart-network.svg";
import { ReactComponent as ArrowRightMiddleAnimation } from "@/assets/summary/arrow-right-middle-animation.svg";
const string = {
  // firstSummart text
  firstSummary: {
    h2: {
      subHead: "Video.js",
      title: "Create user interfaces from components",
    },
    lowerText:
      " Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.",
    textBox: (
      <p className="text-box-p dark:text-secondary-dark">
        React lets you build user interfaces out of individual pieces called
        components. Create your own React components like&nbsp;
        <code dir="ltr" className="font-mono dark:bg-secondary-button-dark p-2">
          Thumbnail
        </code>
        , &nbsp;
        <code dir="ltr" className="font-mono dark:bg-secondary-button-dark p-2">
          LikeButton
        </code>
        , and&nbsp;
        <code dir="ltr" className="font-mono dark:bg-secondary-button-dark p-2">
          Video
        </code>
        . Then combine them into entire screens, pages, and apps.
      </p>
    ),
  },

  // secondSummart text
  secondSummary: {
    h2: {
      subHead: "VideoList.js",
      title: "Write components with code and markup",
    },
    lowerText:
      "This markup syntax is called JSX. It is a JavaScript syntax extension popularized by React. Putting JSX markup close to related rendering logic makes React components easy to create, maintain, and delete.",
    textBox: (
      <p className="text-box-p dark:text-secondary-dark">
        React components are JavaScript functions. Want to show some content
        conditionally? Use an&nbsp;
        <code dir="ltr" className="font-mono dark:bg-secondary-button-dark p-2">
          if
        </code>
        &nbsp;statement. Displaying a list? Try array&nbsp;
        <code dir="ltr" className="font-mono dark:bg-secondary-button-dark p-2">
          map().
        </code>
        &nbsp;Learning React is learning programming.
      </p>
    ),
  },

  //first SummaryButton
  firstSummaryBtn: {
    h2: {
      subHead: "SearchableVideoList.js",
      title: "Add interactivity wherever you need it",
    },

    lowerText:
      "You don’t have to build your whole page in React. Add React to your existing HTML page, and render interactive React components anywhere on it.",
    textBox: (
      <p className="text-box-p dark:text-secondary-dark">
        React components receive data and return what should appear on the
        screen. You can pass them new data in response to an interaction, like
        when the user types into an input. React will then update the screen to
        match the new data.
      </p>
    ),
    // button layout
    btnText: (
      <div className="lower-button-box">
        <a
          className="group dark:text-white"
          href="https://reactnative.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <Code className="code-logo dark:text-[#f6f7f9] " alt="code logo" />
          Add React to your page
          <ArrowRightMiddleAnimation className="arrow-right-middle-animation text-[#23272f] dark:text-[#f6f7f9] rtl:rotate-180" />
        </a>
      </div>
    ),
  },

  // second SummaryButton
  secondSummaryBtn: {
    h2: {
      subHead: "confs/[slug].js",
      title: "Go full-stack with a framework",
    },
    lowerText:
      "React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.",
    textBox: (
      <p className="text-box-p dark:text-secondary-dark">
        React is a library. It lets you put components together, but it doesn’t
        prescribe how to do routing and data fetching. To build an entire app
        with React, we recommend a full-stack React framework like&nbsp;
        <a href="#" target="black" className="textbox-a">
          Next.js
        </a>
        &nbsp;or&nbsp;
        <a href="#" target="black" className="textbox-a">
          Remix.
        </a>
      </p>
    ),
    btnText: (
      <div className="lower-button-box">
        <a
          className="group dark:text-white"
          href="https://reactnative.dev/"
          target="_blank"
          rel="noreferrer"
        >
          <Chart className="code-logo dark:text-white" alt="code logo" />
          Get started with a framework
          <ArrowRightMiddleAnimation className="arrow-right-middle-animation text-[#23272f] dark:text-[#f6f7f9] rtl:rotate-180" />
        </a>
      </div>
    ),
  },
  // 230923
  // summaryBurronNews
  summaryButtonNews: {
    h2: "Upgrade when the future is ready",
    lowerText:
      "React approaches changes with care. Every React commit is tested on business-critical surfaces with over a billion users. Over 100,000 React components at Meta help validate every migration strategy.",
    textBox:
      "The React team is always researching how to improve React. Some research takes years to pay off. React has a high bar for taking a research idea into production. Only proven approaches become a part of React.",
    btnText: "Read more React news",

    rightTopPtag: "LATEST REACT NEWS",
    rightBox: [
      {
        title: "React Canaries: Incremental Feature Rollout",
        component: <NewsPaper />,
        date: "May 3, 2023",
      },
      {
        title: "React Labs: March 2023",
        component: <LaboratoryFlask />,
        date: "March 22, 2023",
      },
      {
        title: "Introducing react.dev",
        component: <NewsPaper />,
        date: "March 16, 2023",
      },
      {
        title: "React Labs: June 2022",
        component: <LaboratoryFlask />,
        date: "June 15, 2022",
      },
    ],
  },

  // 231021
  // summaryButtonSlider
  summaryButtonSliderString: {
    h2:

        "Join a community of millions"
    ,
    firstText:
      "You’re not alone. Two million developers from all over the world visit the React docs every month. React is something that people and teams can agree on.",
    secondText:
      "This is why React is more than a library, an architecture, or even an ecosystem. React is a community. It’s a place where you can ask for help, find opportunities, and meet new friends. You will meet both developers and designers, beginners and experts, researchers and artists, teachers and students. Our backgrounds may be very different, but React lets us all create user interfaces together.",
  },
  // Footer Button section below the slider
  summaryButtonSliderBtn: {
    h2: "Welcome to the React community",
    btnText: <a className="footer-start-button">Get Started</a>,
  },

  // summaryButtonPlatform
  summaryButtonPlatform: {
    h2: {
      title: "Use the best from every platform",
    },
    textBox:
      "People love web and native apps for different reasons. React lets you build both web apps and native apps using the same skills. It leans upon each platform’s unique strengths to let your interfaces feel just right on every platform.",
    lowerText:
      "With React, you can be a web and a native developer. Your team can ship to many platforms without sacrificing the user experience. Your organization can bridge the platform silos, and form teams that own entire features end-to-end.",
  },
};

export default string;
