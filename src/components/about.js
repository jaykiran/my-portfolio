import React, {Component} from 'react';

class About extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            {/* <span className="heading-meta">About Me</span> */}
                                            <h2 className="colorlib-heading">About Me</h2>
                                        </div>
                                            <p>Hey Peeps! I'm glad that you are here :p <br />
                                                Let me Introduce myself, I'm Jayakiran working as a software developer in India's #1 Beauty Destination Purplle.com<br />
                                                I did my Bachelors in Electronics from <a href="https://iiitn.ac.in/" target="_blank" rel="noopener noreferrer">Indian Institute of Information Technology, Nagpur.</a><br />
                                                I'm Primarily interested in Developing Fullstack Web and Mobile Applications using cross platform frameworks.<br />
                                                Feel free to connect with me in social media for any freelancing opportunities :)
                                            </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                {/* <span className="heading-meta">What I do?</span> */}
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-code"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Web Development</h3>
                                        <p>I've hands-on experience in developing Restful fullstack Web applications using node.js and React framework.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Mobile App Development</h3>
                                        <p>I've hands-on experience in developing fullstack mobile applications with interactive UI using React-Native cross platform framework.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Content Creation</h3>
                                        <p>I personally love exploring different technologies and creating meaningful content on them through <a href="https://jayakiran.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blogs</a></p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-layers2"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Graphic Design</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Software</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-phone3"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Application</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;