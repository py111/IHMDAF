import { CRow } from '@coreui/react';
import React, { Fragment, useEffect, useState } from 'react'
import Indicateur from '../indicateur'


const IndicateurFacturation = (props) => {

  const { applicationIndex } = props; 
  const [url, setUrl] = useState("");
  const [startDescription, setStartDescription ] = useState({});
  const [flag, setFlag ] = useState({});
  const [endDescription, setEndDescription ] = useState({});

  useEffect(() => {
    switch (applicationIndex.toUpperCase()) {
      case "R1": {
        const facturationStartDescription = {
          dernierJJ: "Dernier JJ :",
          nbClientsFactures: "Nombre des clients facturés :",
          sumMontantFactures: "Montant facturé :",
          variationNbClients: "Variation M-1 en NB Clients :",
          variationMontantClients: "Variation M-1 en Montant Clients :",
          montantMoyenFactures: "Montant Moyen Facturé :",
          variationMontantMoyenFactures: "Variation du montant moyen facturé en % :",
          nbClientsJJ55: "Nombre de clients sur JJ 55 :",
          dateRafraichissement: "Date du dernier rafraichissement :"
         };
         const facturationEndDescription = {
          dernierJJ: "",
          nbClientsFactures: "clients",
          sumMontantFactures: "€",
          variationNbClients: "clients",
          variationMontantClients: "€",
          montantMoyenFactures: "",
          variationMontantMoyenFactures: "%",
          nbClientsJJ55: "",
          dateRafraichissement: ""
         };
         const facturationFlag = {
          dernierJJ: "info",
          nbClientsFactures: "info",
          sumMontantFactures: "info",
          variationNbClients: "value",
          variationMontantClients: "value",
          montantMoyenFactures: "info",
          variationMontantMoyenFactures: "value",
          nbClientsJJ55: "info",
          dateRafraichissement: "info"
         };
         setUrl("http://devbscs2:9000/fact");
         setFlag({...facturationFlag})
         setStartDescription({ ...facturationStartDescription });
         setEndDescription({ ...facturationEndDescription });
        break;
      }  
      case "R17": {
        const facturationStartDescription = {};
        const facturationEndDescription = {};
        const facturationFlag = {};
        setUrl("");
        setFlag({...facturationFlag})
        setStartDescription({ ...facturationStartDescription });
        setEndDescription({ ...facturationEndDescription });
        break;
      }  
      default: {
        const facturationStartDescription = {
          dernierJJ: "Dernier JJ :",
          nbClientsFactures: "Nombre des clients facturés :",
          sumMontantFactures: "Montant facturé :",
          variationNbClients: "Variation M-1 en NB Clients :",
          variationMontantClients: "Variation M-1 en Montant Clients :",
          montantMoyenFactures: "Montant Moyen Facturé :",
          variationMontantMoyenFactures: "Variation du montant moyen facturé en % :",
          nbClientsJJ55: "Nombre de clients sur JJ 55 :",
          dateRafraichissement: "Date du dernier rafraichissement :"
         };
         const facturationEndDescription = {
          dernierJJ: "",
          nbClientsFactures: "clients",
          sumMontantFactures: "€",
          variationNbClients: "clients",
          variationMontantClients: "€",
          montantMoyenFactures: "",
          variationMontantMoyenFactures: "%",
          nbClientsJJ55: "",
          dateRafraichissement: ""
         };
         const facturationFlag = {
          dernierJJ: "info",
          nbClientsFactures: "info",
          sumMontantFactures: "info",
          variationNbClients: "value",
          variationMontantClients: "value",
          montantMoyenFactures: "info",
          variationMontantMoyenFactures: "value",
          nbClientsJJ55: "info",
          dateRafraichissement: "info"
         };
         setUrl("");
         setFlag({...facturationFlag})
         setStartDescription({ ...facturationStartDescription });
         setEndDescription({ ...facturationEndDescription });
        break;
      }  
    }
  },[applicationIndex])

  return (
    <Fragment>
        <Indicateur startDescription={startDescription} endDescription={endDescription} url={url} flag={flag}/>
    </Fragment>
  )
}

export default IndicateurFacturation
