import React from "react";
import './Footer.css'
import { withRouter } from 'react-router'

function Footer(props) {
    const {history} = props
    const handleBack = (e) =>{
        history.push(props.link)
    }
  return (
    <div className="w-100 text-light fixed-bottom text-center MenuFooter"
        onClick={handleBack}
    >
      بازگشت به مرحله قبل
    </div>
  );
}

export default withRouter(Footer)
