import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={Style.green}>(main)</span> ${" "}
          </span>
          {info.bio}
        </p>
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>

        <p style={{ color: info.baseColor }}> 프레임워크</p>
        <ul className={Style.skills}>
          {info.skills.framework.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p style={{ color: info.baseColor }}> 언어</p>
        <ul className={Style.skills}>
          {info.skills.language.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p style={{ color: info.baseColor }}> 데이터베이스</p>
        <ul className={Style.skills}>
          {info.skills.database.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <p style={{ color: info.baseColor }}> 플랫폼</p>
        <ul className={Style.skills}>
          {info.skills.tool.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </>
    );
  }

  //   function miscText() {
  //     return (
  //       <>
  //         <p>
  //           <span style={{ color: info.baseColor }}>
  //             {firstName}
  //             {info.lastName.toLowerCase()} $
  //           </span>{" "}
  //           cd hobbies/interests
  //         </p>
  //         <p>
  //           <span style={{ color: info.baseColor }}>
  //             hobbies/interests <span className={Style.green}>(main)</span> $
  //           </span>{" "}
  //           ls
  //         </p>
  //         <ul>
  //           {info.hobbies.map((hobby, index) => (
  //             <li key={index}>
  //               <Box component={"span"} mr={"1rem"}>
  //                 {hobby.emoji}
  //               </Box>
  //               {hobby.label}
  //             </li>
  //           ))}
  //         </ul>
  //       </>
  //     );
  //   }

  function canDoText() {
    //소셜 로그인, 등등 넣기
    return (
      <>
        <p>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd introduction/strengths
        </p>
        <p>
          <span style={{ color: info.baseColor }}>
            introduction/strengths <span className={Style.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p style={{ color: info.baseColor }}> 할 수 있는 개발</p>
        <ul>
          {info.canDoIt.map((it, index) => (
            <li key={index}>
              <Box component={"span"} mr={"1rem"}>
                {it.content}
              </Box>
              {it.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={skillsText()} />
      {/* <Terminal text={miscText()} /> */}
      <Terminal text={canDoText()} />
    </Box>
  );
}
