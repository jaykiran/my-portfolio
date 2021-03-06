import React, {Component} from 'react';

class Skills extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-skills" data-section="skills">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                {/* <span className="heading-meta">My Specialty</span> */}
                                <h2 className="colorlib-heading animate-box">TECH-STACKS</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                                <p>Here are the some of languages and frameworks i've hands-on experience with</p>
                                {/* <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>*/}
                            </div> 
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>C</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Python</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="60"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>OOPS</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Node.js</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>PHP</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>React</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>React-Native</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>75%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>MYSQL</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-2" role="progressbar" aria-valuenow="60"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="progress-wrap">
                                    <h3>Redis</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-1" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>70%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="progress-wrap">
                                    <h3>Git</h3>
                                    <div className="progress">
                                        <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100" style={{width:'90%'}}>
                                        <span>80%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Skills;