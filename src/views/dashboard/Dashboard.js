  import React, { useState } from 'react'
  import {
    CRow,
    CCol,
    CSwitch
  } from '@coreui/react'
  import CarouselComponents from '../customComponents/carouselComponents'
  import Toaster from '../notifications/toaster/Toaster'

  const Dashboard = () => {
    const [applicationIndex, setApplicationIndex] = useState("R1")
    return (
    <>
    <Toaster/>
    <CRow>
      <CCol sm="6" className="header"> BSCS {applicationIndex}</CCol>
      <CCol>
        <div className="application-dropdown">
          <span>R1</span>
          <CSwitch
            className='application-switch'
            id="Appswitch"
            key='Appswitch'
            color='primary'
            value='1'
            variant='opposite'
            onChange={()=> {
              if (document.getElementById('Appswitch').checked) { 
                setApplicationIndex("R17")
              }
              else {
                setApplicationIndex("R1")
              }
            }}
          />
          <span>R17</span>
        </div>
      </CCol>   
    </CRow>
    <CarouselComponents applicationIndex={applicationIndex}/>
    </>
    )
  }

  export default Dashboard
