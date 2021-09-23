import React, { useState } from 'react'
import {
  CCarousel,
  CCarouselCaption,
  CCarouselControl,
  CCarouselIndicators,
  CCarouselInner,
  CCarouselItem,
  CCol,
  CRow,
  CContainer,
  CImg
} from '@coreui/react'
import IndicateurFacturation from './indicateurFacturation'

const CarouselComponents = () => {
  const [activeIndex] = useState(0)

  return (
    <CCol sm={12}>
    <CCarousel activeIndex={activeIndex} dark={true}>
        <CCarouselIndicators/>
        <CCarouselInner>
            <CCarouselItem>
                <CContainer>
                    <CRow>
                        <CCol lg="4" className="indicateurHeader" >
                            <span className="indicateurHeader-text" >  Facturation</span> 
                            {/* <CImg src="avatars/calImg.png" alt="" className="indicateurHeader-img"/> */}
                            
                           
                        </CCol>                      
                        <CCol md="4" className="indicateurHeader"><span className="indicateurHeader-text"> Paiement </span></CCol>
                        <CCol sm="4" className="indicateurHeader"><span className="indicateurHeader-text"> CHORUS  </span></CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="4" className="indicateurBody">
                             <IndicateurFacturation />
                        </CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                    </CRow>
                </CContainer>
            <CCarouselCaption><h3>Slide 1</h3><p>Slide 1</p></CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <CContainer>
                    <CRow>
                        <CCol lg="4" className="indicateurHeader"><span className="indicateurHeader-text"> Requisition </span></CCol>
                        <CCol md="4" className="indicateurHeader"><span className="indicateurHeader-text">  PDR </span></CCol>
                        <CCol sm="4" className="indicateurHeader"><span className="indicateurHeader-text">  Note Payeur </span></CCol>
                    </CRow>
                    <CRow>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                        <CCol lg="4" className="indicateurBody"></CCol>
                    </CRow>
                </CContainer>
            <CCarouselCaption><h3>Slide 2</h3><p>Slide 2</p></CCarouselCaption>
            </CCarouselItem>
        </CCarouselInner>
        <CCarouselControl direction="prev" className="arrow-direction"/>
        <CCarouselControl direction="next" className="arrow-direction"/>
    </CCarousel>
    </CCol>
  )
}

export default CarouselComponents
