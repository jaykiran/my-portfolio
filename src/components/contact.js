import React, {Component} from 'react';

class Contact extends Component {
    render() {
        return(
            <div>
                <section className="colorlib-contact" data-section="contact">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                {/* <span className="heading-meta">Get in Touch</span> */}
                                <h2 className="colorlib-heading">Get In Touch</h2>
                            </div>
                        </div>
                        <div className="row">
                            {/* <div className="col-md-5"> */}
                                <p>
                                    My inbox is always open. Whether you have a question or just want to say hello, 
                                    I'll try my best to get back to you. <br /> Feel free to connect with me on social media!
                                </p>
                                
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-mail"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href="mailto:jaikiranjay@gmail.com">jaikiranjay@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-github"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href="https://github.com/jaykiran">Github</a></p>
                                    </div>
                                </div>
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-linkedin2"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href="https://www.linkedin.com/in/jayakiran-guntuku-3b5a23131/">LinkedIn</a></p>
                                    </div>
                                </div>
                                <div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="colorlib-icon">
                                        <i className="icon-instagram"></i>
                                    </div>
                                    <div className="colorlib-text">
                                        <p><a href="https://www.instagram.com/i_am._.jay/">Instagram</a></p>
                                    </div>
                                </div>
                            {/* </div> */}
                            {/* <div className="col-md-7 col-md-push-1">
                                <div className="row">
                                    <div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box" data-animate-effect="fadeInRight">
                                        <form action="">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Subject" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" className="btn btn-primary btn-send-message" value="Send Message" />
                                            </div>
                                        </form>
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

export default Contact;