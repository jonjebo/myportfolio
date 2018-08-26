import React from 'react';
import { Switch, Route } from 'react-router-dom';

import aboutMe from './aboutMe';
import contact from './contact';
import landingPage from './landingPage';
import projects from './projects';
import resume from './resume';


  const Main = () => (
    <Switch>
      <Route exact path="/aboutme" component={aboutMe} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/" component={landingPage} />
      <Route exact path="/projects" component={projects} />
      <Route exact path="/resume" component={resume} />
    </Switch>
  )

  export default Main;