import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg } from "reactstrap";
import MyCarousel from "./MyCarousel";
import Project from "./Project";
import { Player } from "video-react";

import "./style.css";
import "./bootstrap.css";
//import "~video-react/dist/video-react.css";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = {
      smartFood: {
        title: "SmartFood",
        video: `<Player>
                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
              </Player>`,
        ppt: `<iframe src="//www.slideshare.net/slideshow/embed_code/key/1JCXcvN4CiD9JZ" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" /* style={"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"} */allowfullscreen> </iframe> 
                <div /*style={"margin-bottom:5px"}*/> <strong> 
                    <a href="//www.slideshare.net/RubenRomeroHernandez/reinforcement-learning-for-marlo" title="Reinforcement Learning for Marlo" target="_blank">Reinforcement Learning for Marlo</a> </strong> from <strong>
                    <a href="//www.slideshare.net/RubenRomeroHernandez" target="_blank">Ruben R.</a></strong> 
                </div>`,
        description:
          "Our application was conceptualized and brought to life at the event ¨HackDavis 2019.¨  We had intended to attend the event only as spectators, but after hearing of the events objective, we quickly decided to become participants.  After an hour of brainstorming, we embarked upon a twenty-four hour coding marathon that was ultimately realized in our winning application Smartfood.",

        links: {
          github: "https://github.com/sfilippo/hackdavis-backend",
          devpost: "https://devpost.com/software/smartfood-5arz3b#updates"
        }
      },
      ExpoDB: {
        title: "Research ExpoDB",
        ppt: `<iframe src="//www.slideshare.net/slideshow/embed_code/key/1JCXcvN4CiD9JZ" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" /* style={"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"} */allowfullscreen> </iframe> 
                <div /*style={"margin-bottom:5px"}*/> <strong> 
                    <a href="//www.slideshare.net/RubenRomeroHernandez/reinforcement-learning-for-marlo" title="Reinforcement Learning for Marlo" target="_blank">Reinforcement Learning for Marlo</a> </strong> from <strong>
                    <a href="//www.slideshare.net/RubenRomeroHernandez" target="_blank">Ruben R.</a></strong> 
                </div>`,
        description:
          "Our application was conceptualized and brought to life at the event ¨HackDavis 2019.¨  We had intended to attend the event only as spectators, but after hearing of the events objective, we quickly decided to become participants.  After an hour of brainstorming, we embarked upon a twenty-four hour coding marathon that was ultimately realized in our winning application Smartfood.",

        links: {
          github: "https://github.com/sfilippo/hackdavis-backend",
          devpost: "https://devpost.com/software/smartfood-5arz3b#updates"
        }
      },
      UCDavisMarlo: {
        title: "UC Davis Marlo Team for Reinforcement Learning",
        ppt: `<iframe src="//www.slideshare.net/slideshow/embed_code/key/1JCXcvN4CiD9JZ" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" /* style={"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"} */allowfullscreen> </iframe> 
                <div /*style={"margin-bottom:5px"}*/> <strong> 
                    <a href="//www.slideshare.net/RubenRomeroHernandez/reinforcement-learning-for-marlo" title="Reinforcement Learning for Marlo" target="_blank">Reinforcement Learning for Marlo</a> </strong> from <strong>
                    <a href="//www.slideshare.net/RubenRomeroHernandez" target="_blank">Ruben R.</a></strong> 
                </div>`,
        description:
          "Our application was conceptualized and brought to life at the event ¨HackDavis 2019.¨  We had intended to attend the event only as spectators, but after hearing of the events objective, we quickly decided to become participants.  After an hour of brainstorming, we embarked upon a twenty-four hour coding marathon that was ultimately realized in our winning application Smartfood.",

        links: {
          github: "https://github.com/sfilippo/hackdavis-backend",
          devpost: "https://devpost.com/software/smartfood-5arz3b#updates"
        }
      }
    };

    this.createProject = this.createProject.bind(this);
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

  createProject(info) {
    return (
      <Project
        title={info["title"]}
        description={info["description"]}
        links={info["links"]}
        ppt={info["ppt"]}
      />
    );
  }

  render() {
    let projects = this.projects;
    let createProject = this.createProject;

    return (
      <div>
        <Container>
          <h2>Projects</h2>
          {Object.keys(this.projects).map(function(key, index) {
            return createProject(projects[key]);
          })}
        </Container>
      </div>
    );
  }
}

export default Projects;
