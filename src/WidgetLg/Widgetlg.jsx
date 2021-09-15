import React from 'react'
import './Widgetlg.css'
import image1 from '../images/pic11.jpg'
import image2 from '../images/pic12.jpg'
import image3 from '../images/pic15.jpg'
import image4 from '../images/pic14.jpg'


const Widgetlg = () => {

    const Button = ({type}) =>{
        return <button className={'widgetLgButton '+type}>{type}</button>
    }
    return (
        <>
          <div className="widgetlg">
              <h3 className="widgetLgTitle">Latest Transactions</h3>
              <table className="widgetLgtable">
                  <tr className="widgetLgtr">
                      <th className="widgetLgTh">Customer</th>
                      <th className="widgetLgTh">Date</th>
                      <th className="widgetLgTh">Amount</th>
                      <th className="widgetLgTh">Status</th>
                  </tr>
                  <tr className="widgetLgtr">
                      <td className="widgetLgUser">
                          <img src={image1} className="widgetLgImg" alt="" />
                          <span className="widgetLgName">Susan Carol</span>

                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmoubt">$112.00</td>
                      <td className="widgetLgStatus"><Button type="Approved"/></td>
                  </tr>

                  <tr className="widgetLgtr">
                      <td className="widgetLgUser">
                          <img src={image2} className="widgetLgImg" alt="" />
                          <span className="widgetLgName">Mila Alan</span>

                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmoubt">$112.00</td>
                      <td className="widgetLgStatus"><Button type="Declined"/></td>
                  </tr>

                  <tr className="widgetLgtr">
                      <td className="widgetLgUser">
                          <img src={image3} className="widgetLgImg" alt="" />
                          <span className="widgetLgName">Maria Waston</span>

                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmoubt">$112.00</td>
                      <td className="widgetLgStatus"><Button type="Pending"/></td>
                  </tr>

                  <tr className="widgetLgtr">
                      <td className="widgetLgUser">
                          <img src={image4} className="widgetLgImg" alt="" />
                          <span className="widgetLgName">Lilla Lin</span>

                      </td>
                      <td className="widgetLgDate">2 Jun 2021</td>
                      <td className="widgetLgAmoubt">$112.00</td>
                      <td className="widgetLgStatus"><Button type="Approved"/></td>
                  </tr>
            
              </table>
              </div>  
        </>
    )
}

export default Widgetlg
