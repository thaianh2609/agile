import React, { useEffect, useRef, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext, ThemeProvider } from './ThemeContext'

function Profile() {

    return (
        <div className='box-manage'>
            <div className='dashboard'>
                <div>
                    Post
                </div>
                <div>
                    Logout
                </div>
            </div>
            <div className='table'>
                <div className='act-head'>
                    <div id='addnew'>Add New</div>
                    <div className='table-action'>
                        <div>
                            <form>
                                <div className='sth1'>Tittle</div>
                            </form>
                        </div>
                        <div className='sth2'>
                            Tags
                        </div>
                    </div>
                </div>
                <div>
                    <table className='list-profile'>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Tags</th>
                            <th>Actions</th>
                            
                        </tr>
                        
                        
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Profile;