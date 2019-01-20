import React from 'react'
import logo from '../images/ming.png'

const Socials = [
  {
    name: 'Email',
    link: 'mailto:hello@mervyn.tech',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/vynmer',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/mervyns',
  },
  {
    name: 'Dribbble',
    link: 'https://dribbble.com/mervyns',
  },
  {
    name: 'CodePen',
    link: 'https://codepen.io/mervyns',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/mervyns',
  },
]
const Footer = data => (
  <footer>
    <div className="container">
      <div className="grid">
        <div className="column-xs-12">
          <ul className="social">
            {Socials.map(link => (
              <li>
                <a
                  className="page-link"
                  href={link.link}
                  title={link.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="copyright">&copy; 2019 Mervyn Tan </div>
          <img src={logo} style={{ width: '38px' }} />
        </div>
       </div>
    </div>
  </footer>
)

export default Footer
