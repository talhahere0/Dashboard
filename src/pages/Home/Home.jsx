import React from 'react'
import Chart from '../../chart/Chart'
import Featureinfo from '../../components/featureinfo/Featureinfo'
import Widgetlg from '../../WidgetLg/Widgetlg'
import Widget from '../../WidgetSm/Widget'

import './Home.css'

const Home = () => {
    return (
        <>
          <div className="home">
              <Featureinfo/>
              <Chart/>
              <div className="homeWidgets">
                  <Widget/>
                  <Widgetlg/>
              </div>
              </div>  
        </>
    )
}

export default Home
