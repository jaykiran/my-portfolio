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
                                        <h2><a href="#">Mentee at PClub Summer of Code</a> <span>June 2020 - Aug 2020</span></h2>
                                        <p>
                                            Due to this Pandemic Situation, Most of the People lost their jobs. People like Professionals(who have a knowledge on computers & have skills) can get a job through websites like Naukri, linkedin and many more. But the Blue Collar Workers(people lives on daily wages) cannot lead a comfortable life. Our motive is to design a Portal for those Blur collars to get a job and live life with dignity.
                                            <br />For that Purpose, we are designing a Android application using React-Native as tech stack.
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
                                        <h2><a href="#">Research Intern at Tsecond Generation Technology Pvt Ltd</a> <span>July 2019 - Dec 2019</span></h2>
                                        <p>
                                            Developed an IOT device comes with RFID door accessed Security System which captures the Real time behavior of Refrigerators Freezers, stores the data to cloud and raises the alert for unusual behavior in Refrigerators.
                                            <br />Developed a Testing Setup for the Fluid Gauging Device E- Funnel which can capture the Fuel filling at certain intervals and also can capture the Continuous Fuel filling to any range at different angles of E-Funnel.
                                            <br />Automated the Continuous Data Analysis reports of Fluid Gauging Device E-Funnel using python Programming.
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
                                        <h2><a href="#">Summer Intern at RINL Steel Plant</a> <span>July 2018 - Aug 2018</span></h2>
                                        <p>
                                            Worked on different types of telecommunication technologies <br />- Broadband Technology, IP - Networking. <br /> Also studied about the inter Communication Channels from one plant to other plant inside the industry
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
                                        <h2><a href="#">Industrial Trainee at BSNL</a> <span>June 2018 - July 2018</span></h2>
                                        <p>The Training was Based on understanding the methods of communication in rural and urban areas using Optical fibres through underground cables. Also studied about Structure & Management of Database for different sectors.</p>
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