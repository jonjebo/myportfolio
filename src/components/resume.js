import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import resumePhoto from '../assets/hiking.JPG'

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resumeLeftCol"col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={resumePhoto}
                alt="hiking"
                style={{marginTop: '30px', maxHeight: '100%', maxWidth: '100%', borderRadius: '10px'}}
              />
            </div>

            <h2 style={{paddingTop: '2em'}}>Jonathan Dangelo</h2>
            <h4 style={{color: '#696969'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px dotted #833fb2', width: '100%'}}/>
            <p>
              I am a software engineer that spends my time learning as much about React to develop very immersive web pages for clients and myself. 
              While learning React, I am also teaching myself Python and Swift so that I can build iPhone apps and machine learning software to 
              suit the needs of myself and others. 
            </p>
            <hr style={{borderTop: '3px dotted #833fb2', width: '100%'}}/>
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
              schoolDescription="I attended this university my final two years of high school as a way to get a jumpstart on college. During those two years I studied Mechanical Engineering and maintained a 3.5 GPA"
            />

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="Colorado State University"
              schoolDescription="My undergraduate degree was in Health and Exercise Science with a concentration in Sports Medicine"
            />

            <Education
              startYear={2018}
              endYear={2018}
              schoolName={"University of California - Irvine"}
              schoolDescription={"I attended a 12 week full-stack coding bootcamp where I learned: HTML, CSS, JavaScript, jQuery, Node.js, Express, MySQL, Handlebars, Mongoose, and React"}
            />
            <hr style={{borderTop: '3px dotted white'}}/>
            
            <h2>Experience</h2>
          
          <Experience
            startYear={"Mar 2017"}
            endYear={"Present"}
            jobLocation="Driftwood Kitchen"
            jobName="Bartender"
            jobDescription="Mixologist that provides customers with custom cocktails on demand but can also create new and exciting drinks to bring in new customers accounting for a 5% revenue growth each year."
          />
          <p></p>
          <Experience
            startYear={"Sept 2017"}
            endYear={"Present"}
            jobLocation="Apple"
            jobName="Technical Expert"
            jobDescription="My daily work consists of repairing customers iPhones as well as their thoughts about our products so that we can continue to be the best brand in consumer electronics."
          />
          <p></p>
          <Experience
            startYear={"Jan 2017"}
            endYear={"Sep 2017"}
            jobLocation="Equinox"
            jobName="Personal Trainer"
            jobDescription="National Academy of Sports Medicine (NASM) trainer that implemented proven exercise routines to keep each client on target with their goals and provided them with quantitative results at the end of each month."
          />
          <p></p>
          <Experience
            startYear={"Jan 2016"}
            endYear={"Jan 2017"}
            jobLocation="Minnich Manufacturing"
            jobName="Computer Numerical Control Machinist"
            jobDescription="Adjusted program design, technique and tooling for Haas CNC Lathes which reduced production times by 50% while eliminating loss by 20%"
          />
          <p></p>
          <Experience
            startYear={"Mar 2014"}
            endYear={"Nov 2016"}
            jobLocation="Custom Auto"
            jobName="Auto Fabrication"
            jobDescription="Learned and mastered TIG welding in order to build customers custom cars to increase shop revenue by 10% per year"
          />
          <p></p>
          <Experience
            startYear={"Jan 2015"}
            endYear={"Jan 2016"}
            jobLocation="Manes Machine and Engineering"
            jobName="Computer Numerical Control Machinist"
            jobDescription="Machined complex 5 axis titanium Aerospace parts to tolerances as close as 0.0003” using: Okuma, Deckel Maho, and Cincinnati Magnum CNC Mills"
          />
          <p></p>
          <Experience
            startYear={"Sep 2014"}
            endYear={"Jan 2016"}
            jobLocation="Colorado State University"
            jobName="Research Assistant"
            jobDescription="Assisted Lab Managers, Ph.D students, and doctors with each step in a lab experiment. Which included: arterial line catheter setups/prep, mixture and Infusion of drugs, as well as data and blood analysis"
          />
          <p></p>
          <Experience
            startYear={"Mar 2012"}
            endYear={"Aug 2016"}
            jobLocation="Pelican Lakes"
            jobName="Bartender"
            jobDescription="Provided fast paced bartending services to 500+ guests per shift, as well as consistently exceeded sales goals in personal bar sales"
          />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;