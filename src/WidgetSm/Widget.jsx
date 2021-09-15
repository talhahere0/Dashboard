import React from 'react'
import './Widget.css'
import image2 from '../images/pic1.png'
import image3 from '../images/pic2.jpg'
import image4 from '../images/pic3.png'
import image5 from '../images/pic6.jpg'
import image6 from '../images/pic9.png'
import {Visibility} from '@material-ui/icons' 

const Widget = () => {
    return (
        <>
          <div className="widgetsm">
              <span className="widgetsmTitle">New Join Members</span>
              <ul className="widgetSmList">
                  <li className="widgetSmListItem">
                      <img src={image2} className="widgetSmImg" alt="" />
                      <div className="widgetSmUser">
                          <span className="widgetSmusername">Anna Keller</span>
                          <span className="widgetSmuserTitle">Software Engineer</span>
                      </div>
                      <button className="widgetSmButton">
                          <Visibility className="widgetSmicons"/>
                          Display
                      </button>
                  </li>

                  <li className="widgetSmListItem">
                      <img src={image3} className="widgetSmImg" alt="" />
                      <div className="widgetSmUser">
                          <span className="widgetSmusername">Talha Zulfiqar</span>
                          <span className="widgetSmuserTitle">Software Engineer</span>
                      </div>
                      <button className="widgetSmButton">
                          <Visibility className="widgetSmicons"/>
                          Display
                      </button>
                  </li>

                  <li className="widgetSmListItem">
                      <img src={image4} className="widgetSmImg" alt="" />
                      <div className="widgetSmUser">
                          <span className="widgetSmusername">Mickel Carkel</span>
                          <span className="widgetSmuserTitle">Software Engineer</span>
                      </div>
                      <button className="widgetSmButton">
                          <Visibility className="widgetSmicons"/>
                          Display
                      </button>
                  </li>

                  <li className="widgetSmListItem">
                      <img src={image5} className="widgetSmImg" alt="" />
                      <div className="widgetSmUser">
                          <span className="widgetSmusername">M. Talha</span>
                          <span className="widgetSmuserTitle">Software Engineer</span>
                      </div>
                      <button className="widgetSmButton">
                          <Visibility className="widgetSmicons"/>
                          Display
                      </button>
                  </li>

                  <li className="widgetSmListItem">
                      <img src={image6} className="widgetSmImg" alt="" />
                      <div className="widgetSmUser">
                          <span className="widgetSmusername">Shan Waston</span>
                          <span className="widgetSmuserTitle">Software Engineer</span>
                      </div>
                      <button className="widgetSmButton">
                          <Visibility className="widgetSmicons"/>
                          Display
                      </button>
                  </li>
              </ul>
              </div>  
        </>
    )
}

export default Widget
