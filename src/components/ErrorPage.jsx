import React from 'react'
import { Link } from 'react-router-dom';
import "../style/Error.scss";

function ErrorPage() {
  return (
    <div className='error'>
       <p className="error_Number">404</p>
			<p className="error_Txt">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="error_HomepageLink">
				Retourner sur la page d’accueil
			</Link>
    </div>
  )
}

export default ErrorPage;