import React, { Component } from "react";
import PersonalInformation from "./PersonalInformation";
import Footer from "./Footer";
import { Container, Row, Col } from "reactstrap";

import "./style.css";
import "./bootstrap.css";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: ""
    };
  }

  handleChangeSection(new_section) {
    this.setState({
      section: new_section
    });
  }

  render() {
    return (
      <div className="fill">
        <Container>
          <PersonalInformation />
          <Footer />
        </Container>
      </div>
    );
  }
}

export default Home;
