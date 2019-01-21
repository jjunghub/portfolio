import React, { Component } from "react";
import classNames from "classnames";

// using material-ui
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// using material-kit-react
import Footer from "components/Footer";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

import mainPageStyle from "./mainPageStyle.jsx";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import ProjectCard from "components/ProjectCard";

const style = {
  ...mainPageStyle,
  ...imagesStyles
};

const projects = [
  {
    category: "Product",
    name: "Cerebro.Scholar",
    when: "2018.06 ~",
    subname: "학술 동향 분석 서비스",
    object:
      "연구자가 관심 연구분야의 동향을 빠르고 쉽게 파악할 수 있도록 돕기위한 학술동향 분석 서비스",
    how:
      "1. 논문 수집 : 웹 크롤링과 API를 통하여 논문을 자동적으로 수집\n 2. 학술 키워드 정제 및 태깅 : 각 논문에 각 논문을 대표하는 정제된 학술 키워드를 추출 및 부여\n 3. 태그기반 검색 시스템과 시계열, 네트워크 데이터 분석/시각화로 인터렉티브한 분석결과 제공",
    tags: ["웹", "데이터 분석", "데이터 시각화", "NLP", "서비스 기획"],
    role: "팀리더 | 기획 | 데이터 분석 및 시각화",
    detail_role: [
      "프로젝트 기획부터 새로운 팀이 4개월 내에 일차적인 프로덕트를 배포할 수 있도록 팀 리딩",
      "학술 키워드를 분석하여 다양한 형태의 키워드(활용형, 축약형, 기호유무 등)를 정제된 키워드셋으로 구축",
      "연구자에게 인사이트를 줄 수 있도록 연관 키워드, 키워드 네트워크, 주요 논문, 저자 등을 분석. API 구현 및 시각화"
    ],
    techstack: ["Python", "React", "D3.js", "AWS"],
    why: "",
    new: "",
    learn: "",
    link: "https://cerebroscholar.com",
    cover_img: "./cs_viz.png",
    imgs_big: [
      {
        path: "./cs_recommendTags.gif",
        cap: "[gif] recommend related academic tags"
      },
      {
        path: "./cs_viz.png",
        cap: "capture of data visualization result examples"
      },
      { path: "./cs_timetrend.gif", cap: "[gif] interactive line chart" },
      {
        path: "./cs_keyword.gif",
        cap: "[gif] interactive keyword network analysis"
      },
      {
        path: "./cs_researcher.gif",
        cap: "[gif] list up impactful researchers"
      },
      { path: "./cs_papers.gif", cap: "[gif] list up impactful papers" },
      { path: "./proto1.gif", cap: "[gif] data viz prototype 1/2" },
      { path: "./proto2.gif", cap: "[gif] data viz prototype 2/2" },
      {
        path: "./tagdict1.png",
        cap: "construct the refined academic tagset - 1/3"
      },
      {
        path: "./tagdict2.png",
        cap: "construct the refined academic tagset - 2/3"
      },
      {
        path: "./tagdict3.png",
        cap: "construct the refined academic tagset - 3/3"
      }
    ],
    imgs: ["./cs_recommendTags.png", "./cs_viz.png"],
    slideshare: (
      <GridItem xs={12}>
        <iframe
          title="hoho"
          src="//www.slideshare.net/slideshow/embed_code/key/2UChwvOWz1nHQ4"
          width="100%"
          height="300vw"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          scrolling="no"
          allowFullscreen="true"
          style={{
            border: "1px solid  #CCC",
            borderWidth: "1px",
            marginBottom: "5px",
            maxWwidth: "100%"
          }}
        />
        <div style={{ marginBottom: "5px" }}>
          {" "}
          <strong>
            {" "}
            <a
              href="//www.slideshare.net/JungeunKim49/about-cerebro-scholar"
              title="About cerebro scholar"
              target="_blank"
            >
              About cerebro scholar
            </a>{" "}
          </strong>{" "}
          from{" "}
          <strong>
            <a href="//www.slideshare.net/JungeunKim49" target="_blank">
              JungeunKim49
            </a>
          </strong>{" "}
        </div>
      </GridItem>
    )
  },
  {
    name: "오늘하루",
    when: "2017.01 ~",
    subname:
      "원형계획표, 시간 분석 어플리케이션. * 2019년 1월, 8.5만+ 다운로드, 1.2만+ 실사용자",
    object:
      "어제 뭐했는지도 기억안나는 우리를 위한, 하루를 계획, 기록, 분석하는 쓰기 쉬운 앱",
    how:
      "1. 기존의 쓰기 불편하고 안이쁜 원형계획표앱 대신 그리듯이 드래그로 원형계획표를 생성.\n2. 계획한 일정이 끝나면 자동으로 기록이 남고, 기록된 시간을 분석해볼수 있도록 구현. \n 3. 추상적인 시간이라는 요소를 시각적으로 구현함으로써 시간의 흐름에 대한 인식 강화",
    tags: ["Android", "데이터 시각화", "UXUI 기획", "1인 개발"],
    role: "1인 개발 (기획, 개발, 유지, 관리)",
    detail_role: [
      "처음으로 안드로이드 앱을 개발, 하나의 서비스를 런칭하고, 유저에게 피드백을 받아 서비스 개선,유지,관리 경험.",
      "유저는 정말 다양하고, UX의 약간의 차이가 유저의 경험을 굉장히 좌우함. 유저입장에서 서비스를 만드는 어려움과 중요성을 느낌."
    ],
    techstack: ["Android Studio(java)", "D3.js", "SQLite"],
    why: "",
    new:
      "처음으로 안드로이드 앱을 개발하고, 하나의 서비스를 런칭하고, 유저에게 피드백을 받아봄.",
    learn:
      "유저는 정말 다양하고, UX의 약간의 차이가 유저의 경험을 굉장히 좌우함. 유저입장에서 서비스를 만드는 어려움을 느낌.",
    link:
      "https://play.google.com/store/apps/details?id=com.actionersl.onlharu",
    cover_img: "./onlharu_cover.png",
    imgs_big: [
      { path: "./onlharu-plan1.gif", cap: "[gif] plan and accumulate - 1/2" },
      { path: "./onlharu-plan2.gif", cap: "[gif] plan and accumulate - 2/2" },
      { path: "./onlharu-data1.gif", cap: "[gif] data viz - 1/2" },
      { path: "./onlharu-data2.gif", cap: "[gif] data viz - 2/2" }
    ],
    imgs: ["./onlharu_cover.png"],
    slideshare: ""
  },
  {
    category: "Project",
    name: "[공모전] AquaGlobe",
    when: "2017.09 ~ 2017.10",
    subname:
      "3rd Award, Global Big Datatone - for climate change, by UN PULSE. 1st Prize in South Korea.",
    object:
      "기후변화로 인한 어류데이터의 변화를 분석하여 숨겨진 국가 사이의 교류 네트워크를 찾고 시각화.",
    how:
      "년도에 따른 어종분포 변화를 분석하여 새로운 경제, 문화 교류 가능성이 있는 국가간 네트워크와 어종변화를 시각화",
    tags: ["데이터 분석", "데이터 시각화", "아이디어/기획"],
    role: "팀리더(팀 3명) | 데이터 분석 및 시각화",
    detail_role: [
      "필요한 분석을 위한 데이터 소스를 찾고 수집하여 일관된 형태로 전처리",
      "시계열 데이터로부터 각 국가별 어류의 상태와 유의미한 네트워크 강도를 정의",
      "국가간 네트워크 시각화"
    ],
    techstack: ["R", "D3.js", "R-shiny"],
    why: "",
    new: "",
    learn: "",
    link: "https://github.com/jjunghub/AquaGlobe",
    cover_img: "./ag_network.png",
    imgs_big: [
      { path: "./ag_formula.png", cap: "formula" },
      { path: "./ag_network.png", cap: "network chart example" },
      { path: "./ag_instBubble.png", cap: "bubble chart instruction" },
      { path: "./ag_instNetwork.png", cap: "network chart instruction" }
    ],
    imgs: ["./ag_formula.png", "./ag_network.png"],
    slideshare: (
      <GridItem xs={12}>
        <iframe
          title="hoho"
          src="//www.slideshare.net/slideshow/embed_code/key/qdkModNbHGlyF0"
          width="100%"
          height="300vw"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          scrolling="no"
          allowFullscreen="true"
          style={{
            border: "1px solid  #CCC",
            borderWidth: "1px",
            marginBottom: "5px",
            maxWwidth: "100%"
          }}
        />
        <div style={{ marginBottom: "5px" }}>
          {" "}
          <strong>
            {" "}
            <a
              href="//www.slideshare.net/JungeunKim49/aquaglobe-project"
              title="AquaGlobe project"
              target="_blank"
            >
              AquaGlobe project
            </a>{" "}
          </strong>{" "}
          from{" "}
          <strong>
            <a href="//www.slideshare.net/JungeunKim49" target="_blank">
              JungeunKim49
            </a>
          </strong>{" "}
        </div>
      </GridItem>
    )
  },
  {
    name: "[프로젝트] Yummy Project",
    when: "2017.11~",
    subname: "음식사진 SNS",
    object:
      "머신러닝 기술을 적용하여 실제 문제를 해결할 수 있는 무언가를 만들어보자",
    how:
      "1. 문제 정의/기획 \n 2. 음식 이미지 수집, 이미지 피쳐 벡터를 사용한 클러스터링 => 학습 데이터 구축 \n3. 이미지 카테고리별 classification, 음식/얼굴 detection",
    tags: ["딥러닝", "Image Classification/Detection", "Transfer learning"],
    role: "팀리딩 | 기획 | 학습데이터 구축 | 딥러닝 기술 적용",
    techstack: ["Tensorflow", "Python", "R"],
    why: "",
    new: "",
    learn: "",
    link: "",
    cover_img: "./yummy_4.png",
    imgs_big: [
      { path: "./yummy_1.png", cap: "he" },
      { path: "./yummy_2.png", cap: "he" },
      { path: "./yummy_3.png", cap: "he" },
      { path: "./yummy_4.png", cap: "he" },
      { path: "./yummy_5.png", cap: "he" },
      { path: "./yummy_6.png", cap: "he" },
      { path: "./yummy_7.png", cap: "he" }
    ],
    imgs: ["./yummy_4.png"],
    slideshare: (
      <GridItem xs={12}>
        <iframe
          title="hoho"
          src="//www.slideshare.net/slideshow/embed_code/key/KHSrCGS1ryfa42"
          width="100%"
          height="300vw"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          scrolling="no"
          allowFullscreen="true"
          style={{
            border: "1px solid  #CCC",
            borderWidth: "1px",
            marginBottom: "5px",
            maxWwidth: "100%"
          }}
        />
        <div style={{ marginBottom: "5px" }}>
          {" "}
          <strong>
            {" "}
            <a
              href="//www.slideshare.net/JungeunKim49/about-yummyproject"
              title="About YummyProject"
              target="_blank"
            >
              About YummyProject
            </a>{" "}
          </strong>{" "}
          from{" "}
          <strong>
            <a href="//www.slideshare.net/JungeunKim49" target="_blank">
              JungeunKim49
            </a>
          </strong>{" "}
        </div>
      </GridItem>
    )
  },
  {
    name: "[프로젝트] Moving Peture",
    when: "2018.12~",
    subname: "진행중인 프로젝트 입니다.",
    object: "",
    how: "",
    tags: ["딥러닝"],
    role: "",
    techstack: ["Tensorflow", "Python"],
    why: "",
    new: "",
    learn: "",
    link: "",
    imgs_big: []
  }
];

class MainPage extends Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };

    return (
      <div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12}>
                <div className={classes.profile}>
                  <div>
                    {/* <img src={image1} alt="..." className={imageClasses} /> */}
                  </div>
                  <div className={classes.name}>
                    <h2>JUNG-EUN KIM</h2>
                    <h3>ENGINEER, DEVELOPER, DATA SCIENTIST</h3>
                    <div>
                      {/* <Button
                        color="github"
                        simple
                        href="https://google.com"
                        size="sm"
                      >
                        <i className={"fas fa-mobile-alt"} />
                        {"010-7657-5571"}
                      </Button> */}
                      <Button
                        href="mailto:kimje487@gmail.com"
                        color="github"
                        simple
                        justIcon
                        className={classes.button}
                      >
                        <i className={"far fa-envelope"} />
                      </Button>
                      kimje487@gmail.com
                      <Button
                        color="github"
                        simple
                        href="https://jjunghub.github.io/blog/"
                        target="_blank"
                        className={classes.button}
                      >
                        blog
                      </Button>
                      <Button
                        color="github"
                        simple
                        justIcon
                        href="https://github.com/jjunghub"
                        target="_blank"
                        className={classes.button}
                      >
                        <i class="fab fa-github" />
                      </Button>
                      <Button
                        color="github"
                        simple
                        justIcon
                        href="https://www.linkedin.com/in/jung-eun-kim-472191173"
                        target="_blank"
                        className={classes.button}
                      >
                        <i class="fab fa-linkedin-in" />
                      </Button>
                    </div>
                  </div>
                </div>
              </GridItem>

              <GridItem xs={12} md={8}>
                {projects.map(d => {
                  return (
                    <div>
                      {d.category && (
                        <div className={classes.category}>{d.category}</div>
                      )}
                      <ProjectCard info={d} />
                    </div>
                  );
                })}
              </GridItem>

              {/* <GridItem xs={6} className={classes.marginAuto}>
                <Card>
                  <img
                    className={classes.imgCard}
                    // style={latest_img}
                    src={image1}
                    alt="First slide"
                    className="slick-image"
                  />
                  <CardBody>
                    <div className={classes.imgCardOverlay}>
                      <h4 className={classes.cardTitle}>Card title</h4>
                      <p>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p>Last updated 3 mins ago</p>
                    </div>
                  </CardBody> */}
              {/* <div className={classes.imgCardOverlay}>
                    <h4 className={classes.cardTitle}>Card title</h4>
                    <p>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p>Last updated 3 mins ago</p>
                  </div> 
                </Card>
                <Card carousel>
                  <Carousel {...settings}>
                    <div>
                      <img
                        src={image1}
                        alt="First slide"
                        className="slick-image"
                      />
                      <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />
                          Yellowstone National Park, United States
                        </h4>
                      </div>
                    </div>
                    <div>
                      <img
                        src={image2}
                        alt="Second slide"
                        className="slick-image"
                      />
                      <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />
                          Somewhere Beyond, United States
                        </h4>
                      </div>
                    </div>
                    <div>
                      <img
                        src={image3}
                        alt="Third slide"
                        className="slick-image"
                      />
                      <div className="slick-caption">
                        <h4>
                          <LocationOn className="slick-icons" />
                          Yellowstone National Park, United States
                        </h4>
                      </div>
                    </div>
                  </Carousel>
                </Card> 
              </GridItem>*/}
              {/* <GridItem xs={6} className={classes.marginAuto}>
                <Card>hello</Card>
              </GridItem> */}
            </GridContainer>
            {/* HOHOHHOHO
            <Button variant="outlined" color="primary">
              Using MUI
            </Button> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(style)(MainPage);
