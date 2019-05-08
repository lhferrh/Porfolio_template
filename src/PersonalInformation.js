import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg } from "reactstrap";

import "./style.css";
import "./bootstrap.css";

class PersonalInformation extends Component {
  constructor(props) {
    super(props);
    this.personalInfo = {
      name: "Ruben Romero",
      birthData: "02/14/2019",
      Country: "Spain",
      Address: "Davis, California",
      Email: "rromerohernandezAucdavis.edu"
    };
    this.degrees = {
      CS: [
        "B.S in Computer Science",
        "University of Granada, Spain",
        "From 2014 to 2019",
        "Major GPA 3.74/4.0",
        "Awarded for international an exchange program and scholarship to  Polytechnic University of Warsawin 2016",
        "Awarded for international an exchange program and scholarship to  University California of Davisin 2018",
        "Relevant Coursework: Artificial Intelligence, Object Oriented Programming, Concurrent and Distributed Systems, Metaheuristics,  Data Management, Data Mining, Deep Learning, Distributed Database, Models of Computation, Language Processors."
      ],
      B: [
        "B.A in Management",
        "University of Granada, Spain",
        "From 2014 to 2019",
        "Major GPA 3.74/4.0",
        "Awarded for international an exchange program and scholarship to  Polytechnic University of Warsawin 2016",
        "Awarded for international an exchange program and scholarship to  University California of Davisin 2018",
        " Relevant Coursework: Law for Business, Marketing, Finance, Business Theory, Accounting, Econometrics, Macroeconomics, Microeconomics, Strategic Management, Market Research."
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
    let personalInfo = this.createList(this.personalInfo, "", "m_title");
    let computerScience = this.createList(this.degrees["CS"], "", "m_title");
    let bussiness = this.createList(this.degrees["B"], "", "m_title");
    return (
      <div>
        <Container>
          <h2>Personal information</h2>
          <Row>
            <Col sm="10">{personalInfo}</Col>
            <Col sm="2">
              <Card>
                <CardImg
                  top
                  width="100%"
                  src={"./images/nutella.jpg"}
                  alt="Card image cap"
                />
              </Card>
            </Col>
          </Row>
          <h2>Education</h2>
          <Row>
            <h4>Computer Science</h4>
            {computerScience}
          </Row>
          <Row>
            <h4>Management</h4>
            {bussiness}
          </Row>
        </Container>
      </div>
    );
  }
}

export default PersonalInformation;
