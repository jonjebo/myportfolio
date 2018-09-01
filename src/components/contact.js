import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
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
              style={{height: '500px', borderRadius: '10px'}}
            />          
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
              Have some information about the contact page go here.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contactList">
              <List>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Raleway', color: 'white'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (949) 554-9676
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Raleway', color: 'white'}}>
                    <a href="google.com" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-envelope-square" aria-hidden="true"/>
                    </a>
                    contact@jonathandangelo.me
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Raleway', color: 'white'}}>
                    <a href="https://github.com/jonjebo" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" aria-hidden="true"/>
                    </a>
                    github.com/jonjebo
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Raleway', color: 'white'}}>
                  <a href="https://linkedin.com/in/jonathanddangelo" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin-square" aria-hidden="true"/>
                    </a>
                    linkedin.com/in/jonathanddangelo
                  </ListItemContent>
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