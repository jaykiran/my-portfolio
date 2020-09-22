import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Navigator from './components/navigator';
import About from './components/about';
import Contact from './components/contact';
import Education from './components/education';
import Experience from './components/experience';
import Intro from './components/intro';
import Projects from './components/projects';
import Skills from './components/skills';
// import Blog from './components/blog';
// import Certifications from './components/certifications';



class App extends Component {
  render() {
    return(
        <div id="colorlib-page">
            <div id="container-wrap">
                <Navigator></Navigator>
                <div id="colorlib-main">
                  <Intro></Intro>
                  <About></About>
                  <Experience></Experience>
                  {/* <Education></Education> */}
                  <Skills></Skills>
                  <Projects></Projects>
                  {/* <Blog></Blog>
                  <Certifications></Certifications> */}
                  <Contact></Contact>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
