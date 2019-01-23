import React, { Component } from "react";
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import { withStyles } from "@material-ui/core";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import Button from "components/CustomButtons/Button.jsx";

import MyGallery from "components/MyGallery";
import Tooltip from "@material-ui/core/Tooltip";
import projectCardStyle from "./projectCardStyle.jsx";
import Chip from "@material-ui/core/Chip";

const jpgs = require.context("../../assets/jpg", true);

const style = {
  ...projectCardStyle,
  cardTitle
};

// name: "Cerebro.Scholar",
// when: "2018.06 ~",
// subname: "학술 동향 분석 서비스",
// object:
//   "연구자가 관심연구분야의 동향을 쉽고 빠르게 파악할 수 있도록 도와주는 웹서비스",
// how:
//   "SCI, ArXiv 논문을 수집하여 각 논문에 알맞은 정제된 학술 키워드를 태그.</br> 태그기반 검색 시스템과 시계열, 네트워크 데이터 분석 및 시각화로 효율적인 연구동향 인사이트 제공하고자 함.",
// tags: ["데이터 분석", "데이터 시각화", "웹 서비스"],
// role: "팀리더(팀:3명). 기획, 데이터 분석 및 시각화",
// detail_role: [
//   "다양한 팀원이 기간 내에 유의미한 1차적 결과를 낼 수 있도록 팀 리딩",
//   "저자가 부여한 학술 키워드를 분석하여 다양한 형태의 동의어 키워드를 정제된 키워드셋으로 구축",
//   "연구자에게 중요한 정보를 쉽게 전달하기 위한 시각화 방법 고민 및 구현"
// ],
// techstack: ["Python", "React", "D3", "AWS"],
// why: "",
// new: "",
// learn: "",
// link: "",
// imgs: []
class ProjectCard extends Component {
  summary = true;

  toggleDetails = () => {
    this.summary = !this.summary;
    console.log(this.summary);
    this.forceUpdate();
  };

  render() {
    const { classes, info } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <GridContainer justify="center" style={{ fontSize: "1.1rem" }}>
              <GridItem xs={12} sm={12} md={12}>
                <CardBody>
                  {!this.summary && (
                    <div style={{ textAlign: "right" }}>
                      {/* 기간 */}
                      <span>{info.when}</span>
                      <div style={{ textAlign: "right" }}>
                        {info.techstack.map(d => (
                          <Chip
                            label={d}
                            className={classes.chip}
                            variant="outlined"
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  <h3 className={classes.title}>{info.name}</h3>
                  {info["tags"].map(d => (
                    <span className={classes.tags} color="info">
                      {"#" + d + " "}
                    </span>
                  ))}
                  <h4 className={classes.subtitle}>{info.subname}</h4>
                </CardBody>
                <CardBody>
                  {info.imgs && (
                    <div
                      style={{ overflow: "scroll" }}
                      onClick={this.toggleDetails}
                    >
                      <MyGallery imgs_big={info.imgs_big} imgs={info.imgs} />
                    </div>
                  )}
                </CardBody>
                {!this.summary && (
                  <CardBody>
                    {/* 무엇 */}
                    {info.object !== "" && (
                      <div className={classes.ptitle}>WHAT</div>
                    )}
                    {info.object !== "" && <p>{info.object}</p>}

                    {/* 어떻게 */}
                    {info.how !== "" && (
                      <div className={classes.ptitle}>HOW</div>
                    )}
                    {info.how !== "" && (
                      <p>
                        {" "}
                        {info.how.split("\n").map(line => {
                          return (
                            <span>
                              {line}
                              <br />
                            </span>
                          );
                        })}
                      </p>
                    )}
                    {/* 역할 */}
                    {info.role !== "" && (
                      <div className={classes.ptitle}>ROLE</div>
                    )}
                    {info.role !== "" && <p>{info.role}</p>}

                    {/* 디테일 역할 */}
                    {info.detail_role && (
                      <div className={classes.ptitle}>DETAILS</div>
                    )}
                    {info.detail_role && (
                      <ul>
                        {info.detail_role.map(d => (
                          <li>{d}</li>
                        ))}
                      </ul>
                    )}

                    {info.link && (
                      <div style={{ textAlign: "right" }}>
                        <a
                          href={info.link}
                          target="_blank"
                          className={classes.cardLink}
                        >
                          Link
                        </a>
                      </div>
                    )}

                    {/* slideshare */}
                    {info.slideshare && (
                      <div>
                        <div className={classes.ptitle}>SLIDESHARE</div>
                        한글 폰트가 깨지면 전체화면 보기를 눌러주세요!
                      </div>
                    )}
                    {info.slideshare}
                  </CardBody>
                )}
              </GridItem>
            </GridContainer>

            <Tooltip
              title={this.summary ? "show details" : "show less"}
              placement="top"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                simple
                color="info"
                type="button"
                onClick={this.toggleDetails}
              >
                {this.summary ? (
                  <i class="fas fa-chevron-down" />
                ) : (
                  <i class="fas fa-chevron-up" />
                )}
              </Button>
            </Tooltip>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(style)(ProjectCard);
