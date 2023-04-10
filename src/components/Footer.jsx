import React, { useEffect, useRef, useState } from 'react';

function Footer() {

    return (
        <div id='footer'>
            <div className='item'>
                <h3>DataWarehouse</h3>
                <div>
                    <h4>Warehouse Society, 234</h4>
                    <h4>Bahagia Ave Street
                        PRBW 29281
                    </h4>
                </div>
                <div>
                    <h5>
                        info@warehouse.project
                        1-232-3434 (Main)
                    </h5>
                </div>
                <div className='bottom-footer'>
                © Datawarehouse™, 2020. All rights reserved.
Company Registration Number: 21479524.
                </div>
            </div>
            <div className='item'>
                <h3>About</h3>
                <ul>
                    <li>
                        Profile
                    </li>
                    <li>
                        Features
                    </li>
                    <li>
                        Carrers
                    </li>
                    <li>
                        DW News
                    </li>
                </ul>
            </div>
            <div className='item'>
                <h3>Help</h3>
                <ul>
                    <li>
                        Support
                    </li>
                    <li>
                        Sign up
                    </li>
                    <li>
                        Guide
                    </li>
                    <li>
                        Reports
                    </li>
                </ul>
            </div>
            <div className='item'>
                <h3>Help</h3>
                
            </div>
        </div>
    );
}

export default Footer;