import React, { Component } from 'react'
import Navbar from './Navbar'
import '../Assets/css/about.css'
import CountUp from 'react-countup'
import Aos from 'aos'
export default class About extends Component {
    componentDidMount(){
        Aos.init({
            duration: 1000
        });
        // var solutions = parseInt(document.querySelector('.solution-number').innerHTML)

    }
    render() {
        return (
            <>
                <Navbar/>
                <div style={{ 'backgroundColor': 'white' }}>
                    <div className="top-background">
                        <div className="contained">
                            <span className="header">
                                Top class lorem Ipsum solutions
                            </span>
                            <div className="header-social" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                                <span className="social-ic">
                                    <i className="fab fa-twitter"></i>
                                </span>
                                <span className="social-ic">
                                    <i className="fab fa-facebook"></i>
                                </span>
                                <span className="social-ic">
                                    <i className="fab fa-instagram"></i>
                                </span>
                                <span className="social-ic">
                                    <i className="fab fa-linkedin"></i>
                                </span>
                                <span className="social-ic">
                                    <i className="fab fa-dribbble"></i>
                                </span>
                            </div>
                        </div>
                        <div className="partners">
                            <span className="partner-header" data-aos="zoom-in-up">
                                Our Partners
                            </span>
                            <div className="partner-icons" data-aos="zoom-in-up">
                                <div className="icon-side">
                                    <div className="partner-icon">
                                        <i className="fab fa-cc-paypal" style={{ color: 'yellowgreen' }}></i><br />
                                        <span className="icon-text">
                                            Paypazz
                                        </span>
                                    </div>
                                    
                                    <div className="partner-icon">
                                        <i className="fab fa-reddit-alien" style={{ color: '#4754b6' }}></i><br />
                                        <span className="icon-text">
                                            Revvit
                                        </span>
                                    </div>

                                    <div className="partner-icon">
                                        <i className="fab fa-cloudscale" style={{ color: '#ff3300' }}></i><br />
                                        <span className="icon-text">
                                            Intwine
                                        </span>
                                    </div>

                                    <div className="partner-icon">
                                        <i className="fas fa-burn" style={{ color: 'orange' }}></i><br />
                                        <span className="icon-text">
                                            Burnt
                                        </span>
                                    </div>

                                </div>

                                <div className="icon-side">
                                    <div className="partner-icon">
                                        <i className="fab fa-fedora" style={{ color: '#999966' }}></i><br />
                                        <span className="icon-text">
                                            Rabona
                                        </span>
                                    </div>


                                    <div className="partner-icon">
                                        <i className="fab fa-umbraco" style={{ color: '#2eb82e' }}></i><br />
                                        <span className="icon-text">
                                            Ubby
                                        </span>
                                    </div>

                                    <div className="partner-icon">
                                        <i className="fab fa-quora" style={{ color: '#4d4d00' }}></i><br />
                                        <span className="icon-text">
                                            Quavo
                                        </span>
                                    </div>

                                    <div className="partner-icon">
                                        <i className="fas fa-piggy-bank" style={{ color: '#2eb82e' }}></i><br />
                                        <span className="icon-text">
                                            Saveling
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <center>
                            <div className="after">
                            </div>
                        </center>
                        <p className="parent-stuff-head">
                            Lorem Ipsum sit dolor
                        </p>
                        <div className="parent-stuff">
                            <div className="child-stuff" data-aos="zoom-in-right">
                                <div className="icon-stuff">
                                <i className="fab fa-amazon"></i>
                                </div>
                                <div className="text-stuff">
                                <p className="card-head-stuff">Lorem Head</p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
                                distinctio accusantium eveniet quos
                                </div>
                            </div>
                            <div className="child-stuff" data-aos="zoom-in-left">
                                <div className="icon-stuff">
                                <i className="fas fa-anchor"></i>
                                </div>
                                <div className="text-stuff">
                                <p className="card-head-stuff">Lorem Head</p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
                                distinctio accusantium eveniet quos
                                </div>
                            </div>
                            <div className="child-stuff" data-aos="zoom-in-right">
                                <div className="icon-stuff">
                                <i className="fab fa-airbnb"></i>
                                </div>
                                <div className="text-stuff">
                                <p className="card-head-stuff">Lorem Head</p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
                                distinctio accusantium eveniet quos
                                </div>
                            </div>
                        </div>
                        <div className="parent-stuff">
                            <div className="child-stuff" data-aos="zoom-in-right">
                                <div className="icon-stuff">
                                <i className="fas fa-ankh"></i>
                                </div>
                                <div className="text-stuff">
                                <p className="card-head-stuff">Lorem Head</p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
                                distinctio accusantium eveniet quos
                                </div>
                            </div>
                            <div className="child-stuff" data-aos="zoom-in-left">
                                <div className="icon-stuff">
                                <i className="fas fa-meh-blank"></i>
                                </div>
                                <div className="text-stuff">
                                <p className="card-head-stuff">Lorem Head</p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
                                distinctio accusantium eveniet quos
                                </div>
                            </div>
                            <div className="child-stuff" data-aos="zoom-in-right">
                                <div className="icon-stuff">
                                <i className="fas fa-hotdog"></i>
                                </div>
                                <div className="text-stuff">
                                <p className="card-head-stuff">Lorem Head</p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
                                distinctio accusantium eveniet quos
                                </div>
                            </div>
                        </div>

                        <div className="our-details" data-aos="fade-down">
                                <div className="clients">
                                    <span className="client-number">
                                    <CountUp end={332} delay={1} duration={5}/> 
                                    </span>
                                    <span className="client-text">
                                        Happy Customers
                                    </span>
                                </div>
                                <div className="solutions">
                                    <span className="solution-number">
                                        <CountUp end={562} delay={1} duration={4}/>
                                    </span>
                                    <span className="solution-text">
                                        Solutions developed
                                    </span>
                                </div>
                                <div className="contracts">
                                    <span className="contract-number">
                                        <CountUp end={720} delay={1} duration={4} />
                                    </span>
                                    <span className="contract-text">
                                        Contracts Handled
                                    </span>
                                </div>
                        </div>
                        <footer>
                                <div className="footer-text">
                                    Lorem ipsum dolor sit amet   cumque nam <br/> quis vitae 
                                    soluta, sunt, dolore eaque nesciunt <br/> ab accusamus! Aliquid, nisi 
                                    officia dolores.<br></br>
                                     non enim animi dolorem architecto? Illum<br/>  enim laborum esse impedit <br/>
                                    odio cum cupiditate ipsa explicabo <br/>
                                    Lorem ipsum dolor sit amet consectetur<br/>
                                    odio cum cupiditate ipsa explicabo <br/>
                                    <br/>
                                    <div className="social-bar">
                                        <span className="social-icon">
                                            <i className="fab fa-twitter"></i>
                                        </span>
                                        <span className="social-icon">
                                            <i className="fab fa-facebook"></i>
                                        </span>
                                        <span className="social-icon">
                                            <i className="fab fa-instagram"></i>
                                        </span>
                                        <span className="social-icon">
                                            <i className="fab fa-linkedin"></i>
                                        </span>
                                    </div>
                                    <br/>
                                    <hr className="copy-rule" color="#2B336E" />
                                    <br /><br />
                                    <center class="copyright">
                                        &copy; 2021. Lorem Ipsum <b>by</b> <i>The Ajstars</i>
                                    </center>

                                    
                                </div>
                                <center>
                                <div className="second-footer-section">
                                    <div className="footer-img"></div>
                                    {/* <hr className="footer" /> */}
                                    <div className="join">
                                        <h1>Join our Event</h1>
                                        <hr width="100%" color="#1d2249" />
                                        <p className="join-body">
                                            <span className="date">
                                                Friday 13<sup>th</sup> November 2021
                                                <br /><br />
                                                <input type="email" className="text-input" placeholder="&#xf0e0; &nbsp; Email" name="email" spellCheck="false"/>
                                                
                                                <br/><br/>
                                                <button className="submit_button">Submit</button>
                                                <br />
                                                <small style={{ fontSize: '13px' }}>You'll be notified a week before launch</small>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                </center>
                            </footer>
                    </div>
                </div>
            </>
        )
    }
}