import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Header.css'

const NAV_ITEMS = [ 'recpies', 'about us', 'galery', 'contact', 'order' ]

/**
 * The header component which wraps together the fix elemnts on top.
 * @returns {HTMLElement} The header.
 */
export default class Header extends React.Component {
public render (): JSX.Element {
  return (
    <header className={ styles.headerContainer }>
      <div className={ styles.mainLogo } />
      <nav className={ styles.navBox }>
        <ul className={ styles.navList }>
          { NAV_ITEMS.map((item, i) => (
            <li className={ styles.navItem } key={ item } onClick={ this.onListElementClick } data-index={ i }>{ item }</li>
        )) }
        </ul>
      </nav>
      <div className={ styles.search }>
        <FontAwesomeIcon className={ styles.searchIcon } icon={ faMagnifyingGlass } />
      </div>
    </header>
    )
  }

  private readonly onListElementClick = (e: React.MouseEvent<HTMLElement>): void => {
    const target = e.currentTarget
    log('target', target)
  }
}

