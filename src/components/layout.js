import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Background from './background'
import Header from './header'
import Footer from './footer'

import './layout.scss'
import 'typeface-assistant'

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'A full-stack web developer based in Singapore. I aim to create enabling technologies through code.' },
            { name: 'keywords', content: 'mervyn tan, web design, full-stack web development' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <main className="page-content">
          {children}
        </main>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
