import React, { useEffect, useRef, useState, useContext } from 'react';
import HeadSave from '../image/head-img.png'
import Feautures1 from '../image/feau1.png'
import Feautures2 from '../image/feau2.png'
import Feautures3 from '../image/image4.png'
import Feautures4 from '../image/image6 1.png'
import Next from '../image/Group 56.png'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { ThemeContext, ThemeProvider } from './ThemeContext'
import LoopSlider from './loopSlider';

function Header() {
    const context = useContext(ThemeContext);
    console.log(context.checkLogin);
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/login');
    }
    const handleLogout = () => {
        navigate('/login');
    }
     const moveToProfile = () => {
        navigate('/profile');
     }
    return (
        <div>
            <div className='top'>
                <div id='rectangle'>
                    <div></div>
                    <div></div>
                </div>
                <div id='sign-in'>
                    {context.checkLogin.length === 0 ? <button onClick={handleLogin}>
                        Sign in
                    </button> : 
                    <>
                    <div className='logged'>
                    <button  onClick={moveToProfile}>
                        Profile
                    </button>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                    </div>
                    </>
                    }
                </div>
            </div>
            <div id='headline'>
                <h2 id='save-tittle'>Save your data storage here.</h2>
                <h5>Data Warehouse is a data storage area that has been tested for security, so you can store your data here safely but not be afraid of being stolen by others.</h5>
                <button><h6>Learn more</h6></button>
                <div className='img-headline'><img src={HeadSave} alt="" /></div>
            </div>
            <div id='features'>
                <h3>Features</h3>
                <h5>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</h5>
            </div>
            <div>
                <div id='list-actions'>
                    <div className='action'>
                        <div className='action-img'>
                            <img src={Feautures1} alt="" />
                        </div>
                        <div className='action-infor'>
                            <div className='infor-detail'>
                                <h3>Search Data</h3>
                                <h5>Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time.</h5>
                                <div className='more-infor'>
                                    <h4>Learn more</h4>
                                    <img src={Next} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='action'>

                        <div className='action-img'><img src={Feautures4} alt="" /></div>

                        <div className='action-infor'>
                            <div className='infor-detail'>
                                <h3>24 Hours Access</h3>
                                <h5>Access is given 24 hours a full morning to night and
                                    meet again in the morning, giving you comfort when
                                    you need data when urgent.</h5>
                                <div className='more-infor'>
                                    <h4>Learn more</h4>
                                    <img src={Next} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='action'>

                        <div className='action-img'><img src={Feautures2} alt="" /></div>
                        <div className='action-infor'>
                            <div className='infor-detail'>
                                <h3>Print Out</h3>
                                <h5>Print out service gives you convenience if someday
                                    you need print data, just edit it all and just print it.</h5>
                                <div className='more-infor'>
                                    <h4>Learn more</h4>
                                    <img src={Next} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='action'>
                        <div className='action-img'><img src={Feautures3} alt="" /></div>
                        <div className='action-infor'>
                            <div className='infor-detail'>
                                <h3>Security Code</h3>
                                <h5>Data Security is one of our best facilities. Allows for your files
                                    to be safer. The file can be secured with a code or password that
                                    you created, so only you can open the file.</h5>
                                <div className='more-infor'>
                                    <h4>Learn more</h4>
                                    <img src={Next} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <LoopSlider/>
            <Footer />
        </div>
    );
}

export default Header;