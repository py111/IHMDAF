import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CImg,
} from '@coreui/react'

// routes config
// import routes from '../routes'

import { 
  // TheHeaderDropdown,
  // TheHeaderDropdownMssg,
  // TheHeaderDropdownNotif,
  // TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  // const dispatch = useDispatch()
  // const sidebarShow = useSelector(state => state.sidebarShow)

  // const toggleSidebar = () => {
  //   const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
  //   dispatch({type: 'set', sidebarShow: val})
  // }

  // const toggleSidebarMobile = () => {
  //   const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
  //   dispatch({type: 'set', sidebarShow: val})
  // }

  return (
    <CHeader className="badgeColor-headerbackGround" withSubheader>
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
       <CImg src="avatars/Logo-LPM.png" alt="" className="lpmLogo"/>
      </CHeaderBrand>

      <CHeaderNav className="px-3">
      </CHeaderNav>
      <CImg src="avatars/Logo-LPM.png" alt="" className="lpmLogo"/>
      <div className ="badgeColor-headerTitle"> Indicateurs DAF </div>
          <div className="d-md-down-none mfe-2 c-subheader-nav">
      </div>
    </CHeader>
  )
}

export default TheHeader
