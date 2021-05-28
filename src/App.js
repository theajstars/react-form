import React, { Component } from 'react'
import './Assets/css/style.css'
import Navbar from './Components/Navbar'
import logo from './Assets/img/logo.PNG'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AOS from 'aos'
import { Grid } from '@material-ui/core'
import Carousel from './Components/Carousel';


export default class App extends Component {
    componentDidMount(){
        AOS.init({
            duration: 2000
        });
    }
    render() {
        return (
            <>
                <div>
                    <Navbar/>
                    <div className="jumbo-back">
                        <center>
                            <div className="jumbo">
                                <h1>Lorem <br /> Ipsum</h1>
                                <img src={logo} alt="Logo" />
                            </div>
                            <div data-aos="zoom-in" className="some-content">
                                <h1 className="content-header">Dolor sit amet</h1>
                                <div className="cards">
                                    <Grid container alignContent="center" alignItems="center" justify="center">
                                        <Grid item xs={8} sm={4} md={3} >
                                            <Card className="card">
                                                <CardActionArea>
                                                    <CardMedia
                                                    style={{ height: '140px' }}
                                                    image='https://sell.g2.com/hubfs/iStock-1054858914.jpg'
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lorem
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint nostrum optio sunt eius error ipsum nam quod reiciendis quo minus assumenda, expedita officia debitis a nemo eligendi alias quidem?
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>

                                        <Grid item xs={8} sm={4} md={3} >
                                            <Card className="card">
                                                <CardActionArea>
                                                    <CardMedia
                                                    style={{ height: '140px' }}
                                                    image='https://www.typingpal.com/en/news/lorem-ipsum-the-ultimate-placeholder-text/lorem-ipsum@2x.png'
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lorem
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint nostrum optio sunt eius error ipsum nam quod reiciendis quo minus assumenda, expedita officia debitis a nemo eligendi alias quidem?
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>

                                        <Grid item xs={8} sm={4} md={3} >
                                            <Card className="card">
                                                <CardActionArea>
                                                    <CardMedia
                                                    style={{ height: '140px' }}
                                                    image='http://denielleemans.com/wp-content/uploads/2012/09/004_lorem.jpg'
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lorem
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint nostrum optio sunt eius error ipsum nam quod reiciendis quo minus assumenda, expedita officia debitis a nemo eligendi alias quidem?
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>

                                        <Grid item xs={8} sm={4} md={3} >
                                            <Card className="card">
                                                <CardActionArea>
                                                    <CardMedia
                                                    style={{ height: '140px' }}
                                                    image='https://befonts.com/lorem-ipsum-font.html/lorem-ipsum-font-1-big'
                                                    />
                                                    <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2">
                                                        Lorem
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, sint nostrum optio sunt eius error ipsum nam quod reiciendis quo minus assumenda, expedita officia debitis a nemo eligendi alias quidem?
                                                    </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                    Learn More
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </div>
                                <br />
                                <hr className="norm-break" color="#4754B6" size="1" />
                                <br />
                                <Carousel />
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
                        </center>
                    </div>
                </div>

            </>
        )
    }
}
