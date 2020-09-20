import React, { Component } from 'react';

class Navigator extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
                            <h1 id="colorlib-logo"><a href="index.html">Jayakiran Guntuku</a></h1>
                            <span className="position">Graduate from <a href="https://iiitn.ac.in/">IIIT Nagpur</a></span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#" data-nav-section="about">Experience</a></li>
                                    <li><a href="#" data-nav-section="about">Education</a></li>
                                    <li><a href="#" data-nav-section="about">Projects</a></li>
                                    <li><a href="#" data-nav-section="about">Skills</a></li>
                                    <li><a href="#" data-nav-section="about">Certifications</a></li>
                                    <li><a href="#" data-nav-section="about">Organizations</a></li>
                                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                                    <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    {/* <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li> */}
                                </ul>
                            </div>
                        </nav>
                        {/* <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                                <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                            </ul>
                        </nav> */}
                        <div className="colorlib-footer">
                            <p>
                                Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> 
                            </p>
                            <p><small>
                                Something coming soon !!
                            </small></p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

export default Navigator;