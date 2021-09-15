import React from 'react'
import './topbar.css'
import {NotificationsNone,Person,Language} from '@material-ui/icons';
import image1 from '../../images/pic2.jpg'

const topbar = () => {
    return (
        <>
        <div className="topbar">
          <div className="topnavbar">
              <div className="topleft">
                  <span className="logo">
                  Admin Plane
                  </span>
              </div>
              <div className="topright">
                  <div className="topbaricon">
                    <NotificationsNone/>
                    <span className="topiconbadage">13</span>
                  </div>
                  <div className="topbaricon">
                    <Person/>
                    <span className="topiconbadage">7</span>
                  </div>
                  <div className="topbaricon">
                    <Language/>
                    <span className="topiconbadage">2</span>
                  </div>
                  <img src={image1} alt="" className="topAvatar" />
              </div>
              </div>  
              </div>
        </>
    )
}

export default topbar
