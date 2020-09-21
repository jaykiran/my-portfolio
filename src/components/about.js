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
                                            <span className="heading-meta">About Me</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p><strong>I'm Jayakiran</strong> from Srikakulam District, Andhra Pradesh. <br />I am a 2020 Electronics and Communication Graduate from Indian Institute of Information Technology Nagpur.</p>
                                            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
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
                                        <p>I have an Experience in building Websites and Web apps using HTML, CSS, JavaScript and Reactjs.</p>
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
                                        <p>I have an Experience in building Mobile Applications using React-Native cross platform framework.</p>
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
                                        <p>Although coming from the Electronics background, I have good grasp over fundamental concepts of DSA.</p>
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