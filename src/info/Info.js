import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "의석",
  lastName: "오",
  initials: "Uiseok", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Back-End Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "👨‍🦱",
      text: "이름 : 오의석",
    },
    {
      emoji: "📆",
      text: "생년월일 : 1995.05.12",
    },
    {
      emoji: "📞",
      text: "전화번호 : 010-2016-2083",
    },
    {
      emoji: "📧",
      text: "이메일 : uiseok0512@naver.com",
    },
    {
      emoji: "🏫",
      text: "교육 : 삼성청년SW아카데미 (22.07.06 ~ 23.06.30)",
    },
    {
      emoji: "🏢",
      text: "경력 : 임베디드 리눅스 개발 (19.07.01 ~ 22.02.25)",
    },
  ],
  socials: [
    {
      link: "https://velog.io/@uiseok",
      icon: "fa fa-info-circle",
      label: "Velog",
    },
    {
      link: "https://github.com/ohuiseok",
      icon: "fa fa-github",
      label: "Github",
    },
    // {
    //   link: "https://github.com/ohuiseok",
    //   icon: "fa fa-graduation-cap",
    //   label: "Education",
    // },
    // {
    //   link: "https://github.com/ohuiseok",
    //   icon: "fa fa-building",
    //   label: "Company",
    // },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "도전하는 개발자 오의석입니다. 끊임없이 도전하며 공부하는 개발자 오의석 입니다. 새로운 기술을 배우는 것을 좋아하며, 최적화된 코드를 보면 재미를 느낍니다.",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css3",
      "figma",
    ],
    exposedTo: ["nodejs", "python", "adobe illustrator"],
    framework: ["Spring ★★★★☆", "Flask ★★★☆☆", "Express ★★☆☆☆"],
    language: ["Java ★★★★☆", "python ★★☆☆☆", "C ★★★☆☆"],
    database: ["MariaDB", "MySQL", "MongoDB", "Redis"],
    tool: ["ElasticSearch", "Kafka", "Jenkins", "Docker"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "theater",
      emoji: "🎭",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  canDoIt: [
    {
      label: "QueryDSL과 JPA를 이용한 데이터베이스 매핑",
      content: "[Back-End]",
    },
    {
      label: "Spring MVC 패턴 & RestFul API 구현 가능",
      content: "[Back-End]",
    },
    {
      label: "스프링 시큐리티, Oauth2.0, JWT를 이용한 소셜 로그인",
      content: "[Back-End]",
    },
    {
      label: "Kafka와 Webflux의 SSE를 이용한 채팅 서비스",
      content: "[Back-End]",
    },
    {
      label: "ElasticSearch를 이용한 검색 엔진 활용",
      content: "[Back-End]",
    },
    {
      label: "스프링 스케쥴링",
      content: "[Back-End]",
    },
    {
      label: "Kurento를 이용한 WebRTC 시그널링 서버",
      content: "[Back-End]",
    },
    {
      label: "Flask 프레임워크에서 Knn 추천 알고리즘 적용",
      content: "[Back-End]",
    },
    {
      label: "Vue를 이용한 컴포넌트 설계 및 서버통신",
      content: "[Front-End]",
    },
    {
      label: "Gitlab,Jenkins,Docker를 이용한 자동배포",
      content: "[CI/CD]",
    },
    {
      label: "무중단 배포",
      content: "[CI/CD]",
    },
    {
      label: "SonarQube를 이용한 정적분석",
      content: "[CI/CD]",
    },
    {
      label: "S3를 이용한 파일 관리",
      content: "[Server]",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "JUSTUDY : 온라인 스터디 사이트",
      live: "https://github.com/ohuiseok/SPRING_WEBRTC", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/ohuiseok/SPRING_WEBRTC", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "XYZ : 레트로 SNS 사이트",
      live: "https://github.com/ohuiseok/Retro_SNS",
      source: "https://github.com/ohuiseok/Retro_SNS",
      image: mock2,
    },
    {
      title: "산너머 : 등산로 추천 사이트",
      live: "https://github.com/ohuiseok/Sanneomeo",
      source: "https://github.com/ohuiseok/Sanneomeo",
      image: mock3,
    },
    // {
    //   title: "Project 4",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock4,
    // },
    // {
    //   title: "Project 5",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock5,
    // },
  ],
};
