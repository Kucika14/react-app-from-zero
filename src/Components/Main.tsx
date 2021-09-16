import React from "react"
import styles from './main.css'

export interface IHelloWorldProps {
    userName: string
    lang: string
}

export function Main (props: IHelloWorldProps) {
    console.log('props',props)
    return (
    <h1>
        Sütikuckó
        <div className={styles.topcontainerbg}></div>
    </h1>
  ) }

