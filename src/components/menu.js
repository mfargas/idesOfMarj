import * as React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = () => {
    return(
        <>
            <Menu>
                <ul>
                    <li> <Link to='/' /> </li>
                    <li> <Link to='/' /> Blog</li>
                </ul>
            </Menu>
        </>
    )
}

export default Menu;