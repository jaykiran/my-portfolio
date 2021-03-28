import React, {Component} from 'react';

class Blog extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-blog" data-section="blog">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">Hashnode</span>
                                <h2 className="colorlib-heading">Recent Blog</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <a href="https://jayakiran.hashnode.dev/modern-javascript"  target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/js.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                    <div className="desc">
                                        <span><small>March 19, 2021 </small> | <small> JavaScript, ES6 </small></span>  {/*| <small> <i className="icon-bubble3"></i> 4</small> */}
                                        <h3><a href="https://jayakiran.hashnode.dev/modern-javascript" target="_blank" rel="noopener noreferrer">Modern JavaScript (ES6) Hands-On Techniques</a></h3>
                                        <p>JavaScript/ECMAScript 2015(ES6) is keep updating these days. So I've summarized what I seen as the major new features released in each ECMA Script version.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
                                <div className="blog-entry">
                                    <a href="https://jayakiran.hashnode.dev/intro-to-nestjs" target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/nestjs.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                    <div className="desc">
                                        <span><small>March 15, 2021 </small> | <small> NEST.JS </small></span> {/*| <small> <i className="icon-bubble3"></i> 4</small> */}
                                        <h3><a href="https://jayakiran.hashnode.dev/intro-to-nestjs" target="_blank" rel="noopener noreferrer">Intro to Nest.js</a></h3>
                                        <p>Nest.js is a server-side Node.js framework to build efficient, reliable and scalable applications.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
                                <div className="blog-entry">
                                    <a href="https://jayakiran.hashnode.dev/getting-started-with-unit-testing" target="_blank" rel="noopener noreferrer" className="blog-img"><img src="images/unit_testing.png" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
                                    <div className="desc">
                                        <span><small>March 15, 2021 </small> | <small> UNIT TESTING </small></span>  {/*| <small> <i className="icon-bubble3"></i> 4</small> */}
                                        <h3><a href="https://jayakiran.hashnode.dev/getting-started-with-unit-testing" target="_blank" rel="noopener noreferrer">Getting Started With Unit Testing</a></h3>
                                        <p>This is my first ever article😁, and I would like to discuss the Importance of Unit Testing and why we have to do it.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 animate-box">
                                <p><a href="https://jayakiran.hashnode.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg btn-load-more">View more <i className="icon-reload"></i></a></p>
                            </div>
                        </div> 
                    </div>
                </section>
            </div>
        );
    }
}

export default Blog;