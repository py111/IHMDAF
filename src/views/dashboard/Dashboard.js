  import React, { useState } from 'react'
  import {
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu,
    CAlert
  } from '@coreui/react'
  import CarouselComponents from '../customComponents/carouselComponents'

  const Dashboard = () => {
    const [applicationIndex, setApplicationIndex] = useState("R1")
    return (
    <>
    <div>
    <CAlert color="primary" className="alertFeature" dismissible>
      This is info alert.This is info alert.
      This is info alert.This is info alert.
      This is info alert.This is info alert.
      This is info alert.This is info alert.
    </CAlert>
  </div>
    <CDropdown className="m-1">
      <CDropdownToggle className="application-dropdown"> Applications </CDropdownToggle>
        <CDropdownMenu placement="bottom">
          <CDropdownItem onClick={() => setApplicationIndex("R1")}>R1</CDropdownItem>
          <CDropdownItem onClick={() => setApplicationIndex("R17")}>R17</CDropdownItem>
        </CDropdownMenu>
    </CDropdown>      
    <CarouselComponents applicationIndex={applicationIndex}/>
    {/* <div class="indicateurHeader-news">
    <div class="row">
        <div class="col-md-12">
            <div class="d-flex justify-content-between align-items-center breaking-news bg-white">
                <div class="d-flex flex-row flex-grow-1 flex-fill justify-content-center bg-danger py-2 text-white px-1 news">
                  <span class="d-flex align-items-center">&nbsp; News</span></div>
                <marquee class="news-scroll" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();"> 
                  <a href="#">Data Refreshed</a> </marquee>
            </div>
        </div>
    </div>
    </div> */}
    </>
    )
  }

  export default Dashboard
