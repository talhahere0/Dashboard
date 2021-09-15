import React from 'react'
import './User.css'
import image1 from '../../images/pic2.jpg'
import {Publish,PermIdentity,CalendarToday,PhoneAndroid,LocationSearching,MailOutline} from '@material-ui/icons'
import {Link} from 'react-router-dom'


const User = () => {

 
    return (
        <>
            <div className="User">
                <div className="UserTitleContainer">
                    <h1 className="UserTitle">Edit User</h1>
                    <Link to='/newUser'><button className="UserAddButton">Create</button></Link>
                    
                </div>
                <div className="Usercontainer">
                    <div className="userShow">
                        <div className="userShowTop">
                            <img src={image1} alt="" className="userShowImage" />
                            <div className="userShowTopTitle">
                                <span className="userShowUsername">Muhammad Talha</span>
                                <span className="userShowUserTitle">Software Engineer</span>
                            </div>
                        </div>
                        <div className="userShowBottom">
                            <span className="userShowTitle">Account Details</span>
                            <div className="userShowInfo">
                            <PermIdentity className='UserShowIcon'/>
                            <span className="userShowuserShowInfoTitle">
                                Talha
                            </span>
                            </div>

                            <div className="userShowInfo">
                            <CalendarToday className='UserShowIcon'/>
                            <span className="userShowuserShowInfoDob">
                                9.9.1999
                            </span>
                            </div>
                            <span className="userShowTitle">Contact Details</span>
                            <div className="userShowInfo">
                            
                            <PhoneAndroid className='UserShowIcon'/>
                            
                            <span className="userShowuserShowInfoPhone">
                                +92 315 000 3450
                            </span>
                            </div>

                            <div className="userShowInfo">
                            <MailOutline className='UserShowIcon'/>
                            <span className="userShowuserShowInfoEmail">
                                Muhammadtalha6063@gmail.com
                            </span>
                            </div>

                            <div className="userShowInfo">
                            <LocationSearching className='UserShowIcon'/>
                            <span className="userShowuserShowInfoAddress">
                                Madina Town | Faisalabad
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="userUpdate">
                        <span className="userUpdateTitle">Edit</span>
                        <form className="userUpdateForm">
                            <div className="userUpdateleft">
                                <div className="userUpdateItem">
                                     <label>Username</label>
                                     <input type="text" className="userUpdateInput" placeholder="Talha"/>
                                </div>

                                <div className="userUpdateItem">
                                     <label>DOB</label>
                                     <input type="text" className="userUpdateInput" placeholder="9.9.1999"/>
                                </div>

                                <div className="userUpdateItem">
                                     <label>Phone</label>
                                     <input type="text" className="userUpdateInput" placeholder="+92 315 000 3450"/>
                                </div>

                                <div className="userUpdateItem">
                                     <label>Email</label>
                                     <input type="text" className="userUpdateInput" placeholder="Muhammadtalha6063@gmail.com"/>
                                </div>

                                <div className="userUpdateItem">
                                     <label>Address</label>
                                     <input type="text" className="userUpdateInput" placeholder="Madina Town | Faisalabad"/>
                                </div>
                            </div>
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src={image1} alt="" className="userUpdateImage" />
                                    <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                                    <input type='file' id='file' style={{display:"none"}}/>
                                </div>
                                <button className="userUpdateButton">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User
