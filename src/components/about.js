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
                                            <p>Hello! I'm Jayakiran from Andhra Pradesh. <br />I did my Bachelors in Electronics from <a href="https://iiitn.ac.in/" target="_blank" rel="noopener noreferrer">IIIT Nagpur</a> (2016 - 2020)</p>
                                            <p>
                                                I'm Primarly interested in Frontend Web and Mobile App development using cross platform frameworks.
                                            </p>
                                        </div>
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
                                        <p>I have Experience building Web apps using HTML, CSS, JavaScript and React.</p>
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
                                        <p>I have Experience building Mobile Apps using React-Native cross platform framework.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Ds & Algos</h3>
                                        <p>Although coming from ECE background, I have good grasp over concepts of DSA.</p>
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