import React from 'react'
import Read from '../../CRUD/Read';

const Overview = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row gx-lg-0'>
              {/* <div className='col-lg-3 text-black'>
              </div> */}
              {/* <div className='col-lg-6 text-black'>
                  <Read/>
              </div> */}
              <Read/>
            </div>
        </div>
    </>
  )
}

export default Overview;
