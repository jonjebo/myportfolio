import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {activeTab: 0};
  }

/*Tabs for information of projects*/
  toggleCategories() {

    if(this.state.activeTab === 0) {
      return(
      <div className="projectsGrid">
      {/* Project 1*/}
        <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto',  borderRadius: '10px'}}>
          <CardTitle 
            style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8t8PVXRnvJ9cEvRIrth12C9O1h1N-0q3fSRgcmk0hyu2GFGON) center / cover'}}>Stock Trader</CardTitle>
          <CardText>
           Here lies the description of my stock trader app
          </CardText>
          <CardActions border>
            <Button colored href="https://github.com/jonjebo/Project3" target="_blank">GitHub</Button>
            <Button colored>Live Demo</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share"/>
          </CardMenu>
        </Card>
      

      {/*Project 2*/}
      <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
      <CardTitle
        style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
      <CardText>
       Future Builds
      </CardText>
      <CardActions border>
        <Button colored href="">GitHub</Button>
        <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share"/>
      </CardMenu>
    </Card>

      {/*Project 3*/}
      <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
      <CardTitle 
        style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
      <CardText>
       Future Builds
      </CardText>
      <CardActions border>
        <Button colored href="">GitHub</Button>
        <Button colored>Live Demo</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
        <IconButton name="share"/>
      </CardMenu>
    </Card>
    </div>
  )
  
    } else if(this.state.activeTab === 1) {
      return(
        <div className="projectsGrid">
        {/* Project 1*/}
          <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
            <CardTitle 
              style={{color: '#fff', height: '176px', background: 'url(https://images.alphacoders.com/600/thumb-350-600473.png) center / cover'}}>Skyrim RPG</CardTitle>
            <CardText>
             Here lies the description of my stock trader app
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/TeamZebraUCI/Project2Game" target="_blank">GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        
  
        {/*Project 2*/}
        <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
        <CardTitle
          style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
        <CardText>
         Future Builds
        </CardText>
        <CardActions border>
          <Button colored href="">GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
  
        {/*Project 3*/}
        <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
        <CardTitle 
          style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
        <CardText>
         Future Builds
        </CardText>
        <CardActions border>
          <Button colored href="">GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
      </div>
    )
    } else if(this.state.activeTab === 2) {
      return(
        <div className="projectsGrid">
        {/* Project 1*/}
          <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
            <CardTitle 
              style={{color: '#fff', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}}>Politician Search</CardTitle>
            <CardText>
             Here lies the description of my app
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/neoScuba/Neapolitan-" target="_blank">GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        
  
        {/*Project 2*/}
        <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
        <CardTitle
          style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
        <CardText>
         Future Builds
        </CardText>
        <CardActions border>
          <Button colored href="">GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
  
        {/*Project 3*/}
        <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
        <CardTitle 
          style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
        <CardText>
         Future Builds
        </CardText>
        <CardActions border>
          <Button colored href="">GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
      </div>
    )
    } else if(this.state.activeTab === 3) {
      return(
        <div className="projectsGrid">
        {/* Project 1*/}
          <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
            <CardTitle 
              style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8t8PVXRnvJ9cEvRIrth12C9O1h1N-0q3fSRgcmk0hyu2GFGON) center / cover'}}>Stock Trader</CardTitle>
            <CardText>
             Here lies the description of my stock trader app
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/jonjebo/Project3" target="_blank">GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>
        
  
        {/*Project 2*/}
        <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
        <CardTitle
          style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
        <CardText>
         Future Builds
        </CardText>
        <CardActions border>
          <Button colored href="">GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
  
        {/*Project 3*/}
        <Card shadow={5} style={{maxWidth: '30%', height: 'auto', margin: 'auto', borderRadius: '10px'}}>
        <CardTitle 
          style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZlUIdmIuy8bNS-v4U5dobsls-6na5hXnWOmvgPgPqdjO4HD9xw) center / cover'}}></CardTitle>
        <CardText>
         Future Builds
        </CardText>
        <CardActions border>
          <Button colored href="">GitHub</Button>
          <Button colored>Live Demo</Button>
        </CardActions>
        <CardMenu style={{color: '#fff'}}>
          <IconButton name="share"/>
        </CardMenu>
      </Card>
      </div>
    )
    }
  }
  

  render() {
    return(
      <div className="categoryTabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabID) => this.setState({ activeTab: tabID })} ripple>
         <Tab>React</Tab>
         <Tab>Handlebars</Tab>
         <Tab>JavaScript</Tab>
        </Tabs>

       
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>          
        </Grid>
       
      </div>
    )
  }
}

export default Projects;