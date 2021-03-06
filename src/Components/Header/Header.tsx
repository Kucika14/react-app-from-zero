import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import ListElem from '../ListElem/ListElem'
import styles from './Header.css'

const NAV_ITEMS = [ 'recpies', 'about us', 'galery', 'contact', 'order' ]

/**
 * The header component which wraps together the fix elemnts on top.
 * @returns {HTMLElement} The header.
 */

export default function Header (props: any): JSX.Element {
  log(props)

   const onListElementClick = (e: React.MouseEvent<HTMLElement>): void => {
      const target = e.currentTarget
      const [ first ] = useState('')
      log('target', target, first)
    }

    return (
      <header className={ styles.headerContainer }>
        <div className={ styles.mainLogo } />
        <nav className={ styles.navBox }>
          <ul className={ styles.navList }>
            { NAV_ITEMS.map((item, i) => (
              <ListElem
                key={ item }
                item={ item }
                index={ i }
                onClickElem={ onListElementClick }
              />
          )) }
          </ul>
        </nav>
        <div className={ styles.search }>
          <FontAwesomeIcon className={ styles.searchIcon } icon={ faMagnifyingGlass } />
        </div>
      </header>
      )
  }

