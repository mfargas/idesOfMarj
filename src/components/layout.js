import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div >
      <Header siteTitle="ides of Marge" />
      <main style={{
        margin: `0 auto`,
        maxWidth: 1000,
        minHeight: `75vh`,
      }}>
        {children}
      </main>
      <footer style={{ margin: `1rem` }}>
        <p>Developed by Marjoree E. F. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
