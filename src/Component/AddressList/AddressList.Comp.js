import React, { Component } from 'react'
import "./AddressList.scss";

export default class AddressListComp extends Component {
  render() {
    const {addresses,displayAddress,handleShowMore,handleLess}=this.props;
    const addressShow=addresses.slice(0,displayAddress);

    return (
      <div className='container'>
        <h2 className='heading'> Addresses</h2>
        <div className='address'>
        {addressShow.map((address,index)=>(
          <div className='address-detail'
            key={index}>
              <p className='address-detail-street'>Street: {address.street}</p>
              <p className='address-detail-city'> City: {address.city}</p>
              <p className='address-detail-zipcode'>Zip Code: {address.zipcode}</p>
              <p className='address-detail-country'>Country: {address.country}</p>
              <p className='address-detail-state'>State: {address.state}</p>
              {/* <hr /> */}
          </div>
        ))}
        </div>
        {displayAddress<addresses.length ?(
          <button className="more-button" onClick={handleShowMore}>Show More</button>
        ):(
          <button className='less-button-one' onClick={handleLess}>Show Less</button>
        )}
      </div>
    )
  }
}


