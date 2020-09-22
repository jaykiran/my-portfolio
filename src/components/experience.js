import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return(
            <div>
                <section class="colorlib-experience" data-section="experience">
                    <div class="colorlib-narrow-content">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span class="heading-meta">Experience</span>
                                <h2 class="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                            <div class="timeline-centered">
                                {/* <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div class="timeline-entry-inner">

                                    <div class="timeline-icon color-1">
                                        <i class="icon-pen2"></i>
                                    </div>

                                    <div class="timeline-label">
                                        <h2><a href="#">Full Stack Developer</a> <span>2017-2018</span></h2>
                                        <p>Tolerably earnestly middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise. Greatly who affixed suppose but enquire compact prepare all put. Added forth chief trees but rooms think may.</p>
                                    </div>
                                    </div>
                                </article> */}


                                <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                    <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-2">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="https://drive.google.com/file/d/177mJEVvuz44f2yfwcjFRUBJYu3Oes4kL/view?usp=sharing">Mentee at PClub Summer of Code</a> <span>June 2020 - Aug 2020</span></h2>
                                        <p>
                                            Worked as a Team member to develop an Opensource Project called OpenJobApp.<br/>
                                            OpenJobApp helps bluecollar workers/Daily Wagers to find job in this pandemic situations.<br />
                                            Android app is developed using Expo-CLI and Database is handled through firbase.
                                        </p>
                                    </div>
                                    </div>
                                </article>

                                <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-3">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="#experience">Research Intern at Tsecond Generation Technology Pvt Ltd</a> <span>July 2019 - Dec 2019</span></h2>
                                        <p>
                                            - Developed an IOT device to capture the Real time behavior of Refrigerators & Freezers, it will store the data to cloud and raises the alert for unusual behavior in Refrigerators.
                                            <br /> - Developed a Mechanical Testing Setup for E- Funnel to capture the continous fuel filling any range at different angles.
                                            <br /> - Automated the Continuous Data Analysis reports of Fluid Gauging Device E-Funnel using python & Tableau.
                                            <br /> - Designed a Dashboard UI to monitor the real time data of an IoT device. <br />
                                            click here to view the <a href="https://drive.google.com/file/d/1-QfJ7Yfdx1e6HOAc8I9n-3s2dBGGkLW7/view?usp=sharing">report</a> 
                                        </p>
                                    </div>
                                    </div>
                                </article>

                                <article class="timeline-entry animate-box" data-animate-effect="fadeInTop">
                                    <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-4">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="#exp">Summer Intern at RINL Steel Plant</a> <span>July 2018 - Aug 2018</span></h2>
                                        <p>
                                            Worked on different types of Communication from different divisons inside the plant.<br/>
                                            - Loudspeaker intercom systems (LMMM & WRM)<br/>
                                            - Closed Circuit Television Systems (CCTV)<br/>
                                            - Hotline communication systems<br/>
                                            - VHF communication systems
                                            

                                        </p>
                                    </div>
                                    </div>
                                </article>

                                <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-5">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="https://drive.google.com/file/d/1BmFF5qrKeCBwUe_OKpFKi2pFOdkMfzEd/view?usp=sharing">Industrial Trainee at BSNL</a> <span>June 2018 - July 2018</span></h2>
                                        <p>
                                            One month Training Based on Understanding the methods of Communication in rural and Urban areas through
                                            Optical fibre mode of communication.<br />
                                            Worked on the technologies like - Broadband Technology <br /> - Fibre Optics Transmission System (FOTS)
                                            <br /> - OCB and C-DOT Switches <br/> - Mobile Communication and Call Routing <br/> - Signalling (CAS & CCS7)
                                        </p>
                                    </div>
                                    </div>
                                </article>

                                <article class="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                                    <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-none">
                                    </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Experience;