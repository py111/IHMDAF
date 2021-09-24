  import React, { lazy, useState } from 'react'
  import {
    CCol,
    CRow,
    CDropdown,
    CDropdownItem,
    CDropdownToggle,
    CDropdownMenu
  } from '@coreui/react'
  import CarouselComponents from '../customComponents/carouselComponents'
  import CIcon from '@coreui/icons-react'

  // const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
  // const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

  const Dashboard = () => {
    const [applicationIndex, setApplicationIndex] = useState("R1")
    // const [activeApplication, setActiveApplication] = useState(0)
    return (
    <>
    <CDropdown className="m-1">
      <CDropdownToggle className="application-dropdown"> Applications </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={() => setApplicationIndex("R1")}>R1</CDropdownItem>
          <CDropdownItem onClick={() => setApplicationIndex("R17")}>R17</CDropdownItem>
        </CDropdownMenu>
    </CDropdown>      
    <CarouselComponents applicationIndex={applicationIndex}/>
    </>
    )
  }

  export default Dashboard
