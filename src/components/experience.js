import React, {Component} from 'react';

class Experience extends Component {
    render() {
        return(
            <div>
                <section class="colorlib-experience" data-section="experience">
                    <div class="colorlib-narrow-content">
                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                {/* <span class="heading-meta">Experience</span> */}
                                <h2 class="colorlib-heading animate-box">Work Experience</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                            <div class="timeline-centered">
                                <article class="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                                    <div class="timeline-entry-inner">

                                    <div class="timeline-icon color-1">
                                        <i class="icon-pen2"></i>
                                    </div>

                                    <div class="timeline-label">
                                        <h2><a href="#">Software Developer (API) - Purplle</a> <span>Nov 2020 - Present</span></h2>
                                        <p>
                                            Currently working as an API developer at one of the India's Beauty Destination Purplle.com
                                            <li>Involved in Handling features like Listing Pages, Filters API and Desktop Navigation</li>
                                            <li>Tech Stacks: PHP, Node.js, Redis, Mysql, Nest.js</li>
                                        </p>
                                    </div>
                                    </div>
                                </article>


                                <article class="timeline-entry animate-box" data-animate-effect="fadeInRight">
                                    <div class="timeline-entry-inner">
                                    <div class="timeline-icon color-2">
                                        <i class="icon-pen2"></i>
                                    </div>
                                    <div class="timeline-label">
                                        <h2><a href="https://drive.google.com/file/d/177mJEVvuz44f2yfwcjFRUBJYu3Oes4kL/view?usp=sharing" target="_blank" rel="noopener noreferrer">Mentee - PClub Summer of Code</a> <span>June 2020 - Aug 2020</span></h2>
                                        <p>
                                            <li>Worked as a Team member to develop an Open-source Project called OpenJobApp.</li>
                                            <li>OpenJobApp helps blue-collar workers/Daily Wagers to find job in this pandemic situations.</li>
                                            <li>Android app is developed using Expo-CLI and Database is handled through firebase.</li>
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
                                        <h2><a href="#experience">Research Intern - Tsecond Generation Technology Pvt Ltd</a> <span>July 2019 - Dec 2019</span></h2>
                                        <p>
                                            <li>Developed an IOT device to capture the Real time behavior of Refrigerators & Freezers, it will store the data to cloud and raises the alert for unusual behavior in Refrigerators.</li>
                                            <li>Developed a Mechanical Testing Setup for E- Funnel to capture the continuous fuel filling any range at different angles.</li>
                                            <li>Automated the Continuous Data Analysis reports of Fluid Gauging Device E-Funnel using python & Tableau.</li>
                                            <li>Designed a Dashboard UI to monitor the real time data of an IoT device. </li>
                                            {/* click here to view the <a href="https://drive.google.com/file/d/1-QfJ7Yfdx1e6HOAc8I9n-3s2dBGGkLW7/view?usp=sharing">report</a>  */}
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
                                        <h2><a href="#exp">Summer Intern - RINL Steel Plant</a> <span>July 2018 - Aug 2018</span></h2>
                                        <p>
                                            Worked on different types of Communication from different divisons inside the plant.<br/>
                                            <li>Loudspeaker intercom systems (LMMM & WRM)</li>
                                            <li>Closed Circuit Television Systems (CCTV)</li>
                                            <li>Hotline communication systems</li>
                                            <li>VHF communication systems</li>
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
                                        <h2><a href="https://drive.google.com/file/d/1BmFF5qrKeCBwUe_OKpFKi2pFOdkMfzEd/view?usp=sharing" target="_blank" rel="noopener noreferrer">Industrial Trainee - BSNL</a> <span>June 2018 - July 2018</span></h2>
                                        <p>
                                            One month Training Based on Understanding the methods of Communication in rural and Urban areas through
                                            Optical fibre mode of communication.<br />
                                            Worked on the technologies like - 
                                            <li>Broadband Technology</li>
                                            <li>Fibre Optics Transmission System (FOTS)</li>
                                            <li>OCB and C-DOT Switches</li>
                                            <li>Mobile Communication and Call Routing</li>
                                            <li>Signalling (CAS & CCS7)</li>
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