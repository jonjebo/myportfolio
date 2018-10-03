import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import mainLogo from '../assets/profile1.JPG';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12} style={{height: '80%'}}>
            <img
              src={mainLogo}
              alt="jonImage"
              className="profileImage"
            />
          </Cell>
          <Cell col={12}>
            <div className="bannerText">
              <h1> Full Stack Web Developer </h1>

              <hr/>

              <p>
              React | JavaScript | NodeJS | Express | MongoDB | MySQL | HTML/CSS
              </p>

              <div className="socialLinks">
                
                {/* LinkedIn */}
                <a href="https://linkedin.com/in/jonathanddangelo" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>

                {/* GitHub */}
                <a href="https://github.com/jonjebo" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>

                 {/* Highbrow Creations */}
                 <a href="https://highbrowcreations.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-coffee" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;