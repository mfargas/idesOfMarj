import * as React from 'react'
import { Link } from 'gatsby'

class Menu extends React.Component {
    render(){
    return(
            <menu>
                <ul>
                    <li> <Link to='/'>Art</Link></li>
                    <li> <Link to='/'> Blog</Link></li>
                </ul>
            </menu>
        );
    }
}

export default Menu
