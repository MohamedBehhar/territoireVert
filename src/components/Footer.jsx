import React from 'react'
// import { Link } from 'react-router-dom'

const Footer = () => {
  return (
		<div className='footer'>
			<div className='footer-center'>
				<img className='footer-logo' src="images/logo.png" alt="logo-img" />
				{/* <div className="links">
					<Link  className="link" to="/mention-legales">Mentions légales</Link>
					<Link className="link" to="/donnees-personnelles"> Politique de respect de la vie privée</Link>
				</div> */}
				<p>@Territoire Vert-2022</p>
			</div>
		</div>
  )
}

export default Footer