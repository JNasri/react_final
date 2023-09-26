import React from "react";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div id="skills" className="container py-2">
      <div className="row text-white text-center">
        <h1 className="display-2 mt-5" style={{ fontWeight: 500 }}>
          Skills
        </h1>
        <hr className="bg-danger border-2 border-top border-white" />
      </div>
      <div className="row text-white text-center justify-content-center">
        <div className="col-md-4">
          <h1 className="display" style={{ fontWeight: 500 }}>
            FrontEnd
            <hr className="bg-danger border-2 border-top mb-4 border-white w-50 mx-auto" />
            <Skill
              link={"ttps://en.wikipedia.org/wiki/HTML5"}
              img={
                "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://www.w3schools.com/css/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://www.javascript.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
              }
            ></Skill>
            <Skill
              link={"https://reactjs.org/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://getbootstrap.com/docs/3.4/javascript/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
              }
            ></Skill>
            <Skill
              link={"https://redux.js.org/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/redux-original.svg"
              }
            ></Skill>
          </h1>
        </div>
        <div className="col-md-4">
          <h1 className="display- mt-3" style={{ fontWeight: 500 }}>
            BackEnd
            <hr className="bg-danger border-2 border-top mb-4 border-white w-50 mx-auto" />
            <Skill
              link={"https://www.java.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://www.javascript.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
              }
            ></Skill>
            <Skill
              link={"https://nodejs.org/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg"
              }
              white={"1"}
            ></Skill>
            <Skill
              link={"https://expressjs.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg"
              }
              white={"1"}
            ></Skill>
            <Skill
              link={"https://www.php.net/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/php-original.svg"
              }
            ></Skill>
            <Skill
              link={"https://laravel.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/laravel-plain-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://www.python.org"}
              img={
                "https://profilinator.rishav.dev/skills-assets/python-original.svg"
              }
            ></Skill>
            <Skill
              link={"https://nextjs.org/"}
              img={"https://profilinator.rishav.dev/skills-assets/nextjs.png"}
            ></Skill>
          </h1>
        </div>
        <div className="col-md-4">
          <h1 className="display- mt-3 mb-5" style={{ fontWeight: 500 }}>
            DBMS
            <hr className="bg-danger border-2 border-top mb-4 border-white w-50 mx-auto" />
            <Skill
              link={"https://www.mysql.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://www.mongodb.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/mongodb-original-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://www.firebase.com/"}
              img={"https://profilinator.rishav.dev/skills-assets/firebase.png"}
            ></Skill>
          </h1>
        </div>
        <div className="col-md-4">
          <h1 className="display- mt-3 mb-5" style={{ fontWeight: 500 }}>
            Mobile Development
            <hr className="bg-danger border-2 border-top mb-4 border-white w-50 mx-auto" />
            <Skill
              link={"https://www.android.com/intl/en_in"}
              img={
                "https://profilinator.rishav.dev/skills-assets/android-original-wordmark.svg"
              }
            ></Skill>
            <Skill
              link={"https://reactnative.dev/"}
              img={
                "https://raw.githubusercontent.com/kristerkari/react-native-svg-transformer/HEAD/images/react-native-logo.png"
              }
            ></Skill>
          </h1>
        </div>
        <div className="col-md-4">
          <h1 className="display- mt-3 mb-5" style={{ fontWeight: 500 }}>
            Version Control
            <hr className="bg-danger border-2 border-top mb-4 border-white w-50 mx-auto" />
            <Skill
              link={"https://github.com/"}
              img={
                "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg"
              }
            ></Skill>
            <Skill
              link={"https://www.mysql.com/"}
              img={
                "https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
              }
            ></Skill>
            <Skill
              link={"https://www.firebase.com/"}
              img={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png"
              }
            ></Skill>
          </h1>
        </div>
      </div>
    </div>
  );
}
