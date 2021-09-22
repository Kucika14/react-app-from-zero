import React, { Fragment } from "react"
import styles from './Main.css'

console.log('styles', styles)

export interface IHelloWorldProps {
    userName: string
    lang: string
}

export function Main (props: IHelloWorldProps) {
    console.log('props',props)
    return (
        <Fragment>

    <h1>
        Sütikuckó
        <div className={styles.topContainerBg}></div>
        <div className={styles.topContainerBg2}></div>
    </h1>
        </Fragment>
  ) }

