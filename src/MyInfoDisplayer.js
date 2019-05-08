import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import { Card, CardImg } from "reactstrap";

import "./style.css";
import "./bootstrap.css";

class MyInfoDisplayer extends Component {
  constructor(props) {
    super(props);
    this.personalInfo = {
      Name: "Ruben Romero",
      "Birth date": "02/14/2019",
      Country: "Spain",
      Address: "Davis, California"
    };
    this.degrees = {
      ucdavis: [
        "Utilities Department of University of California, Davis",
        "Sofware Engineer, Full stack team.",
        "Designing and developing an app to manage the information provided by the meter boxes of every building at the UC Davis Campus. ",
        "Creating  schemas and implementation of the database",
        "Used technologies: ReactJs, Webpack, ExpressJs and SQLDeveloper."
      ],
      clerhp: [
        <a href="http://www.clerhp.com">Clerhp Estructuras SA</a>,
        "Sofware Engineer, Full stack team.",
        "Created schema and implementation of a database using MySQL.",
        "Developed a back-end with PHP that works with the database.",
        "Designed a front-end with Jquery and Boostrap, www.clerhp.com.",
        "Implemented  a CMS to load, update and delete information and  to generate useful reports from the database data."
      ]
    };
    this.socialNetworks = {
      Linkedin: "",
      GitHub: ""
    };
    this.state = {
      name: "",
      display: 0,
      imageUrl: "",
      description: ""
    };
  }

  componentDidMount() {}

  createList(info, ul_style, li_style) {
    let res = [];
    let tmp = "";
    for (let key in info) {
      if (key.length === 1) {
        tmp = info[key];
      } else tmp = key + ": " + info[key];
      res.push(<li className={li_style}>{tmp}</li>);
    }
    return <ul className={li_style}>{res}</ul>;
  }

  render() {
    let ucdavis = this.createList(this.degrees["ucdavis"], "", "m_title");
    let clerhp = this.createList(this.degrees["clerhp"], "", "m_title");
    return (
      <div>
        <Container>
          <h2>Work Experience</h2>
          <Row>
            <Col sm="10">
              <h4>{this.degrees["ucdavis"][0]}</h4>
              {ucdavis}
            </Col>
            <Col sm="2">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={"./images/ucdavis.png"}
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm="10">
              <h4>{this.degrees["clerhp"][0]}</h4>
              {clerhp}
            </Col>
            <Col sm="2">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={"./images/clerhp.png"}
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyInfoDisplayer;
