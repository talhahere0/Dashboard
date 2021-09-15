import React from 'react'
import './Sidebar.css'
import {LineStyle,Timeline,TrendingUp,Person,Storefront,AttachMoney,Report,Mail,Feedback,Message,ChatBubbleOutline,MeetingRoom,Notifications,Settings} from '@material-ui/icons';
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebarwrapper">
                    <div className="sidebarmenu">
                        <h3 className="sidebartitle">
                            Dashboard
                        </h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem active">
                               <LineStyle className="sidebaricon"/>
                               <Link className="LinkRouter" to="/">Home</Link>
                                
                            </li>
                            <li className="sidebarlistitem">
                               <Timeline className="sidebaricon"/>
                               Analytics 
                            </li>
                            <li className="sidebarlistitem">
                               <TrendingUp className="sidebaricon"/>
                               Trending 
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarmenu">
                        <h3 className="sidebartitle">
                            Quick Menu
                        </h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                               <Person className="sidebaricon"/>
                               <Link className="LinkRouter" to="/users">User</Link>
                                
                            </li>
                            <li className="sidebarlistitem">
                               <Storefront className="sidebaricon"/>
                               Products 
                            </li>
                            <li className="sidebarlistitem">
                               <AttachMoney className="sidebaricon"/>
                               Transactions 
                            </li>
                            <li className="sidebarlistitem">
                               <Report className="sidebaricon"/>
                               Reports 
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarmenu">
                        <h3 className="sidebartitle">
                            Notifications
                        </h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                               <Mail className="sidebaricon"/>
                               Mail 
                            </li>
                            <li className="sidebarlistitem">
                               <Feedback className="sidebaricon"/>
                               Feedback 
                            </li>
                            <li className="sidebarlistitem">
                               <Message className="sidebaricon"/>
                               Message 
                            </li>
                        </ul>
                    </div>
                    <div className="sidebarmenu">
                        <h3 className="sidebartitle">
                            Staff
                        </h3>
                        <ul className="sidebarlist">
                            <li className="sidebarlistitem">
                               <ChatBubbleOutline className="sidebaricon"/>
                               Manage 
                            </li>
                            <li className="sidebarlistitem">
                               <MeetingRoom className="sidebaricon"/>
                               Meeting 
                            </li>
                            <li className="sidebarlistitem">
                               <Notifications className="sidebaricon"/>
                               Notification 
                            </li>
                            <li className="sidebarlistitem">
                               <Report className="sidebaricon"/>
                               Reports 
                            </li>
                            <li className="sidebarlistitem">
                               <Settings className="sidebaricon"/>
                               Setting 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
