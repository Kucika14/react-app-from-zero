import React from 'react'
import { Header } from '../Components/Header/Header'
import styles from './Main.css'

export interface IHelloWorldProps {
    userName: string
    lang: string
}

/**
 * The main structure constructed here.
 * @param {IHelloWorldProps} props Parameters.
 * @returns {HTMLElement} The element.
 */
export function Main (props: IHelloWorldProps): JSX.Element {
    log('props', props)
    return (
      <section>
        <Header />
      </section>

  )
}

