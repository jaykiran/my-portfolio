import React, {Component} from 'react';

class Projects extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-work" data-section="work">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                {/* <span className="heading-meta">My Work</span> */}
                                <h2 className="colorlib-heading animate-box">Recent Work</h2>
                            </div>
                        </div>
                        {/* <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <p className="work-menu"><span><a href="webapp" className="active">Web Apps</a></span> <span><a href="mobileapp">Mobile Apps</a></span> <span><a href="software">Software</a></span></p>
                            </div>
                        </div> */}
                        <div className="row">
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{backgroundImage: "url(images/img-1.jpg)"}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://jaykiran-portfolio.netlify.app/">My portfolio App</a></h3>
                                            <span>Web Application</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/jaykiran/my-portfolio" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> Github</a></span>
                                                {/* <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                                <span><a href="#"><i className="icon-heart"></i> 49</a></span> */}
                                                <span style={{marginLeft: '25rem'}}> HTML </span> 
                                                <span> CSS </span>
                                                <span> JavaScript </span>
                                                <span> React </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{backgroundImage: "url(images/img-2.jpg)"}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/jaykiran/ChatApp" target="_blank" rel="noopener noreferrer">Chat Application</a></h3>
                                            <span>Mobile Application</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/jaykiran/ChatApp" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> Github</a></span>
                                                {/* <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                                <span><a href="#"><i className="icon-heart"></i> 49</a></span> */}
                                                <span style={{marginLeft: '20rem'}}> JavaScript </span> 
                                                <span> React-native CLI </span>
                                                <span> Firebase </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInTop">
                                <div className="project" style={{backgroundImage: "url(images/img-3.jpg)"}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/jaykiran/youtube_clone" target="_blank" rel="noopener noreferrer">Youtube Clone</a></h3>
                                            <span>Mobile Application</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/jaykiran/youtube_clone" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> Github </a></span>
                                                {/* <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                                <span><a href="#"><i className="icon-heart"></i> 49</a></span> */}
                                                <span style={{marginLeft: '22rem'}}> JavaScript </span> 
                                                <span> Expo CLI </span>
                                                <span> Google API </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInBottom">
                                <div className="project" style={{backgroundImage: "url(images/img-7.jpg)"}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://react-slack-clone-v1.netlify.app/" target="_blank" rel="noopener noreferrer">DevChat</a></h3>
                                            <span>Web Application</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/jaykiran/slack_chat-application" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> Github </a></span>
                                                <span><a href="https://github.com/jaykiran/slack_chat-application" target="_blank" rel="noopener noreferrer"><i className="icon-code"></i> On-Progress </a></span>
                                                {/* <span><a href="#"><i className="icon-heart"></i> 49</a></span> */}
                                                <span style={{marginLeft: '13rem'}}> JavaScript </span> 
                                                <span> React </span>
                                                <span> Semantic UI </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="project" style={{backgroundImage: "url(images/img-5.jpg)"}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="software"> Real time Weather Forecasting </a></h3>
                                            <span>Software</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/jaykiran/Weather_forecasting_using_python" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> Github </a></span>
                                                {/* <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                                <span><a href="#"><i className="icon-heart"></i> 49</a></span> */}
                                                <span style={{marginLeft: '22rem'}}> Python </span> 
                                                <span> Tkinter </span>
                                                <span> API </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="project" style={{backgroundImage: "url(images/img-8.jpg)"}}>
                                    <div className="desc">
                                        <div className="con">
                                            <h3><a href="https://github.com/jaykiran/Face-Recognition-Attendance-System" target="_blank" rel="noopener noreferrer">Face Recognition Attendance System</a></h3>
                                            <span>Software</span>
                                            <p className="icon">
                                                <span><a href="https://github.com/jaykiran/Face-Recognition-Attendance-System" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i> Github </a></span>
                                                {/* <span><a href="#"><i className="icon-eye"></i> 100</a></span>
                                                <span><a href="#"><i className="icon-heart"></i> 49</a></span> */}
                                                <span style={{marginLeft: '22rem'}}> Python </span> 
                                                <span> Tkinter </span>
                                                <span> OpenCV </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="https://github.com/jaykiran?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-load-more">View more <i className="icon-reload"></i></a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Projects;