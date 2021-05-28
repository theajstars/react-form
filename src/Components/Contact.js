import React, { Component } from 'react'
import '../Assets/css/contact.css'
import Navbar from './Navbar'
export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             name: '',
             message: '',
             emailValid: Boolean(false)
        }
        
    }
    
    componentDidMount(){
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)){
                if(this.state.name === '' || this.state.message === ''){
                    document.querySelector('.fail').style.display = 'block'
                    document.querySelector('#err').innerHTML = '<strong>Error! </strong>Please fill out all fields'
                }else{
                    document.querySelector('.success').style.display = 'block'
                }
            }else{
                document.querySelector('.fail').style.display = 'block'
                document.querySelector('#err').innerHTML = '<strong>Error! </strong>Please enter a valid email address'
            }
            
        })
    }
    render() {
        return (
            <>
                <Navbar/>
                <center>
                    <form action="#">
                        <div className="contact-form">
                            <div className="wrapper">
                                <div className="left">
                                    <div className="img"></div>
                                </div>
                                {/* Horizontal Line */}
                                <hr className="contact" />
                                <div className="right">
                                    <input type="text" className="text-input" placeholder="&#xf007; &nbsp; Name"  spellCheck="false" 
                                        onChange={(e) =>{
                                            if(document.querySelector('.success').style.display === 'block'){
                                                document.querySelector('.success').style.display = 'none'
                                            }
                                            if(document.querySelector('.fail').style.display === 'block'){
                                                document.querySelector('.fail').style.display = 'none'
                                            }
                                            this.setState({
                                                name: e.target.value
                                            });
                                        }}
                                    />
                                    <br />
                                    <input type="email" className="text-input" placeholder="&#xf0e0; &nbsp; Email" name="email" spellCheck="false"
                                        onChange={(e) => {
                                            if(document.querySelector('.success').style.display === 'block'){
                                                document.querySelector('.success').style.display = 'none'
                                            }
                                            if(document.querySelector('.fail').style.display === 'block'){
                                                document.querySelector('.fail').style.display = 'none'
                                            }
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} 
                                    />
                                    <br />
                                    <textarea name="message" id="message" cols="30" rows="10" spellCheck="false" placeholder="&#xf305; &nbsp; Message"
                                        onChange={(e) => {
                                            if(document.querySelector('.success').style.display === 'block'){
                                                document.querySelector('.success').style.display = 'none'
                                            }
                                            if(document.querySelector('.fail').style.display === 'block'){
                                                document.querySelector('.fail').style.display = 'none'
                                            }
                                            this.setState({
                                                message: e.target.value
                                            })
                                        }}
                                    ></textarea>
                                    <br />
                                    <button className="submit_button">Submit</button>
                                </div>
                            </div>
                            <div className="alert-div">
                                <div className="success">
                                    <strong>Success!</strong> Your message has been submitted
                                    <span className="close-success" onClick={() => document.querySelector('.success').style.display = 'none'}><i className="fas fa-times-circle"></i></span>
                                </div>
                                <div className="fail">
                                    <span id="err"><strong>Error!</strong> Please fill out all fields.</span>
                                    <span className="close-fail" onClick={() => document.querySelector('.fail').style.display = 'none'}><i className="fas fa-times-circle"></i></span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <footer style={{ backgroundColor: '#1A7BBD' }}>
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
                                    <center class="copyright" style={{ 'marginBottom': '40px' }}>
                                        &copy; 2021. Lorem Ipsum <b>by</b> <i>The Ajstars</i>
                                    </center>

                                    
                                </div>
                                <center>
                                <div className="second-footer-section">
                                    {/* <div className="footer-img"></div> */}
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
                </center>
            </>
        )
    }
}

