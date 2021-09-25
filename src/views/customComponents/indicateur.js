import React, { useState, useEffect, Fragment } from 'react'
import {
  CCol
} from '@coreui/react'
// const axios = require("axios");


const Indicateur = (props) => {

  const { startDescription, endDescription, url, flag } = props; 
  // const [facturation, setFacturation] = useState({});
  const [badgeColor, setBadgeColor] = useState({});
  const facturation = {
    dernierJJ: 69,
    nbClientsFactures: 145,
    sumMontantFactures: 25,
    variationNbClients: 400,
    variationMontantClients: 63,
    montantMoyenFactures: 21,
    variationMontantMoyenFactures: -257,
    nbClientsJJ55: 32
   };
    
  useEffect(() => {
    // axios.get(url)
    // .then((res) => {
    //   setFacturation(res.data);
    // })
    // .catch((error) => {
    //   console.error("Error", error);
    // });
    Object.keys(facturation).forEach((key, index) => {
      if(flag[key] === "info") {
        badgeColor[key] = 'badgeColor-Info';
        setBadgeColor({ ...badgeColor });
      }
      else if(facturation[key] > 0 ) {
        badgeColor[key] = 'badgeColor-OK';
        setBadgeColor({ ...badgeColor });
      }
      else if(facturation[key] < 0 ) {
        badgeColor[key] = 'badgeColor-Error';
        setBadgeColor({ ...badgeColor });
      }
      else {
        badgeColor[key] = 'badgeColor-Warning';
        setBadgeColor({ ...badgeColor });
      }
      //add more conditions
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array of dependency makes it equivalent to componentDidMount

  return (
    <Fragment>
        {
          Object.keys(startDescription).map((key, index) => {
            return (<CCol className="indicateurData"> {startDescription[key]} <span className={badgeColor[key]}> {facturation[key]} {endDescription[key]} </span></CCol>)
          })
        }
    </Fragment>
  )
}

export default Indicateur