import React, { Component } from 'react';

class Navigator extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{backgroundImage: 'url(images/abouttt.jpg)'}} />
                            <h1 id="colorlib-logo"><a href="index.html">Jayakiran Guntuku</a></h1>
                            <span className="position">Former Research Intern | <br /> Web & Android Developer | <br />Graduate from <a href="https://iiitn.ac.in/">IIIT Nagpur</a> </span>
                            {/* <span className="position">Graduate from <a href="https://iiitn.ac.in/">IIIT Nagpur</a></span> */}
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Home</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    <li><a href="#experience" data-nav-section="experience">Experience</a></li>
                                    {/* <li><a href="#education" data-nav-section="education">Education</a></li> */}
                                    <li><a href="#skills" data-nav-section="skills">Skills</a></li>
                                    <li><a href="#work" data-nav-section="work">Projects</a></li>
                                    {/* <li><a href="#blog" data-nav-section="blog">Blog</a></li>
                                    <li><a href="#certifications" data-nav-section="certifications">Certifications</a></li>
                                    <li><a href="#organizations" data-nav-section="organizations">Organizations</a></li> */}
                                    <li><a href="#contact" data-nav-section="contact">Contact</a></li>
                                    
                                </ul>
                            </div>
                        </nav>
                        <div className="colorlib-footer">
                            <ul>
                                <li><a href="https://www.facebook.com/jai.kiran.121/"><i class="icon-facebook2"></i></a></li>
                                <li><a href="https://twitter.com/Jay34641135"><i class="icon-twitter2"></i></a></li>
                                <li><a href="https://www.instagram.com/i_am._.jay/"><i class="icon-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/jayakiran-guntuku-3b5a23131/"><i class="icon-linkedin2"></i></a></li>
                            </ul>
                            <br />
                            <p>
                                Made with <i className="icon-heart" aria-hidden="true" /> and <i className="icon-beer" aria-hidden="true"></i><br></br> 
                            </p>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}

export default Navigator;