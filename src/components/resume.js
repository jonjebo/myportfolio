import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import resumePhoto from '../assets/preg1.jpg'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resumeLeftCol"col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={resumePhoto}
                alt="resume profile"
                style={{maxWidth: '100%', height: 'auto', borderRadius: '10px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Jonathan Dangelo</h2>
            <h4 style={{color: '#696969'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px dotted #833fb2', width: '100%'}}/>
            <p>
              Fill in some information here for my resume
            </p>
            <hr style={{borderTop: '3px dotted #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>1 Hacker Way Menlo Park, 94025</p>
            <h5>Phone</h5>
            <p>(949) 554-9676</p>
            <h5>Email</h5>
            <p>contact@jonathandangelo.me</p>
            <h5>Web</h5>
            <p>jonathandangelo.me</p>
            <p>highbrowcreations.com</p>
          </Cell>
          <Cell className="resumeRightCol" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2007}
              endYear={2009}
              schoolName="Bowling Green State University"
              schoolDescription="Put in some information about shcool here"
            />

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="Colorado State University"
              schoolDescription="Put in some information about shcool here"
            />
            <hr style={{borderTop: '3px dotted white'}}/>
            <h2>Experience</h2>
          <Experience
            startYear={2005}
            endYear={2012}
            jobName="First Job"
            jobDescription="Do some job descriptions"
          />

          <Experience
            startYear={2005}
            endYear={2012}
            jobName="First Job"
            jobDescription="Do some job descriptions"
          />

          <Experience
            startYear={2005}
            endYear={2012}
            jobName="First Job"
            jobDescription="Do some job descriptions"
          />

          <Experience
            startYear={2005}
            endYear={2012}
            jobName="First Job"
            jobDescription="Do some job descriptions"
          />

          <Experience
            startYear={2005}
            endYear={2012}
            jobName="First Job"
            jobDescription="Do some job descriptions"
          />

          <Experience
            startYear={2005}
            endYear={2012}
            jobName="First Job"
            jobDescription="Do some job descriptions"
          />
          <hr style={{borderTop: '3px dotted white'}}/>
          <h2>Skills</h2>
          <Skills 
          // eslint-disable-next-line
            skill="JavaScript: "
            progress={60}
            percentage=""
          />
          <Skills 
            skill="HTML/CSS: "
            progress={80}
            percentage=""
          />
          <Skills 
            skill="React: "
            progress={20}
            percentage=""
          />
          <Skills 
            skill="MySQL: "
            progress={20}
            percentage=""
          />
          <Skills 
          // eslint-disable-next-line
            skill="JavaScript: "
            progress={30}
            percentage=""
          />
          <Skills 
          // eslint-disable-next-line
            skill="JavaScript: "
            progress={30}
            percentage=""
          />

              


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;