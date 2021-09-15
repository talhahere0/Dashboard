import React from 'react'
import './Featureinfo.css'
import { ArrowDownward , ArrowUpward } from '@material-ui/icons'
const Featureinfo = () => {
    return (
        <>
          <div className="featured">
              <div className="featureitem">
                  <span className="featuretitle">Revenue</span>
                  <div className="featuredmoneycontainer">
                      <span className="featuremoney">$2,150</span>
                      <span className="featuremoneyrate">-11.4 <ArrowDownward className="featureicon negative"/></span>
                  </div>
                  <span className="featuresub">Compared to last month</span>
              </div>
              <div className="featureitem">
                  <span className="featuretitle">Sales</span>
                  <div className="featuredmoneycontainer">
                      <span className="featuremoney">$4,150</span>
                      <span className="featuremoneyrate">-91.4 <ArrowDownward className="featureicon negative"/></span>
                  </div>
                  <span className="featuresub">Compared to last month</span>
              </div>
              <div className="featureitem">
                  <span className="featuretitle">Cost</span>
                  <div className="featuredmoneycontainer">
                      <span className="featuremoney">$3,150</span>
                      <span className="featuremoneyrate">-1.4 <ArrowUpward className="featureicon"/></span>
                  </div>
                  <span className="featuresub">Compared to last month</span>
              </div>
              </div>  
        </>
    )
}

export default Featureinfo
