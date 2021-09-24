import React, { useState, useEffect } from 'react'
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

const axios = require("axios");
const IndicateurFacturation = () => {

    const [facturation, setFacturation] = useState({});
    const [badgeColor, setBadgeColor] = useState("");
    
  useEffect(() => {
    const url = "http://devbscs2:9000/fact";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data)
        setFacturation(res.data);
        console.log(facturation["dernierJJ"])
      })
      .catch((error) => {
        console.error("Error", error);
      });
      if(facturation["variationNbClients"] > 0)
        setBadgeColor('badgeColor-OK'); 
      else if(facturation["variationNbClients"] < 0)
        setBadgeColor('badgeColor-Error');
  }, []); // Empty array of dependency makes it equivalent to componentDidMount

  return (
    <span>
        <CCol className="indicateurData"> Dernier JJ : <span className="badgeColor-Info"> {facturation["dernierJJ"]} </span></CCol>
        <CCol className="indicateurData"> Nombre des clients facturés : <span className="badgeColor-Info">{facturation["nbClientsFactures"]} clients </span></CCol>
        <CCol className="indicateurData"> Montant facturés :  <span className="badgeColor-Info">{facturation["sumMontantFactures"]} € </span></CCol>
        <CCol className="indicateurData" > Variation M-1 en NB Clients : <span className={badgeColor}>{facturation["variationNbClients"]} clients </span></CCol>
        <CCol className="indicateurData"> Variation M-1 en Montant Clients : {facturation["variationMontantClients"]} €</CCol>
        <CCol className="indicateurData"> Montant Moyen Facturés : <span className="badgeColor-Info">{facturation["montantMoyenFactures"]} </span></CCol>
        <CCol className="indicateurData"> Variation du montant moyen facturés en % : {facturation["variationMontantMoyenFactures"]} € </CCol>
        <CCol className="indicateurData"> Nombre de clients sur JJ 55 : {facturation["nbClientsJJ55"]} </CCol>
    </span>
  )
}

export default IndicateurFacturation
