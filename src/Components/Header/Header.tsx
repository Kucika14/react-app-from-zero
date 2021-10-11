import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Header.css'

interface INavItems {
    name: string
    index: number
}

const NAV_ITEMS = [ 'recpies', 'about us', 'galery', 'contact' ]
const font = 'fa-solid fa-magnifying-glass' as IconProp

/**
 * The header component which wraps together the fix elemnts on top.
 * @returns {HTMLElement} The header.
 */
export function Header (): JSX.Element {
    return (
      <header className={ styles.headerContainer }>
        <div className={ styles.mainLogo } />
        <nav className={ styles.navBox }>
          <ul className={ styles.navList }>
            { NAV_ITEMS.map((item) => (
              <li className={ styles.navItem } data-name={ item }>{ item }</li>
            )) }
          </ul>
        </nav>
        <div className={ styles.search }>
          <FontAwesomeIcon className={ styles.searchIcon } icon={ font } />
        </div>
      </header>

  )
}

