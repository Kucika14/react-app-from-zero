import React from 'react'
import styles from './Main.css'

export interface IHelloWorldProps {
    userName: string
    lang: string
}

/**
 * The main structure constructed here.
 * @param {IHelloWorldProps} props Parameters.
 * @returns  {React.ReactFragment} The fragment.
 */
export function Main (props: IHelloWorldProps) {
  log('kacsa', props)
    return (
      <>
        <h1>
          Sütikuckó
          <div className={ styles.topContainerBg } />
          <div className={ styles.topContainerBg2 } />
        </h1>
      </>
  )
}

