import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import contactLogo from '../assets/profile2.JPG'

class Contact extends Component {
  render() {
    return(
      <div className="contactBody">
        <Grid className="contactGrid">
          <Cell col={6}>
            <h2>Jonathan Dangelo </h2>
            <img 
              src={contactLogo}
              alt="myPhoto"
              style={{maxHeight: '75%', maxWidth: '75%', borderRadius: '10px'}}
            />          
            <p style={{width: '70%', margin: 'auto', paddingTop: '1em'}}>
             Please feel free to contact with any projects you may need and I will respond promptly.
            </p>
          </Cell>
          <Cell className="contactList" col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div>
              <List>
                <ListItem>
                  <a style={{fontSize: '1.5vw', fontFamily: 'Raleway', color: 'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (949) 554-9676
                  </a>
                </ListItem>
                <ListItem>
                  <a style={{fontSize: '1.5vw', fontFamily: 'Raleway', color: 'white'}}>
                    <a href="google.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope-square" aria-hidden="true"/>
                    </a>
                    contact@jonathandangelo.me
                  </a>
                </ListItem>
                <ListItem>
                  <a style={{fontSize: '1.5vw', fontFamily: 'Raleway', color: 'white'}}>
                    <a href="https://github.com/jonjebo" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" aria-hidden="true"/>
                    </a>
                    github.com/jonjebo
                  </a>
                </ListItem>
                <ListItem>
                  <a style={{fontSize: '1.5vw', fontFamily: 'Raleway', color: 'white'}}>
                  <a href="https://linkedin.com/in/jonathanddangelo" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>
                    linkedin.com/in/jonathanddangelo
                  </a>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>        
      </div>
    )
  }
}

export default Contact;