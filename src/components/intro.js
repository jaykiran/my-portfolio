import React, {Component} from 'react';
 
class Intro extends Component {
    render() {
        return(
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home">
                    <div className="flexslider js-fullheight">
                        <ul className="slides">
                        <li>
                        {/* style={{backgroundImage: "url(images/img_bg_4.jpg)"}} */}
                            <div className="overlay"></div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1>Hello! <br />I'm Jayakiran Guntuku</h1>
                                                    {/* <p><a className="btn btn-primary btn-learn" href="https://drive.google.com/file/d/1xTDXmwbAF7B6dUMginniC3_d4moQpyEU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume <i className="icon-download4"></i></a></p> */}
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                        {/* style={{backgroundImage: "url(images/img_bg_4.jpg)"}} */}
                            <div className="overlay"></div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>I Love <br /> Building new Things!</h1>
                                                    {/* <h2>100% html5 bootstrap templates Made by <a href="https://colorlib.com/" target="_blank">colorlib.com</a></h2> */}
                                                    <p><a className="btn btn-primary btn-learn" href="https://github.com/jaykiran" target="_blank" rel="noopener noreferrer">View Projetcs <i className="icon-briefcase3"></i></a></p>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        </ul>
                    </div>
			    </section>
            </div>
        );
    }
}

export default Intro;