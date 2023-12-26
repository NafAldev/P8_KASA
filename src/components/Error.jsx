import React from 'react'
import "../style/Error.scss";
import { Link } from 'react-router-dom';


function Error() {
  return (
 
      <div className="error">
          <p className="error_Number">404</p>
          <p className="error_Txt">Oops ! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="error_HomepageLink">
            Retourner sur la page d’accueil
          </Link>
      </div>

  )
}

export default Error;
