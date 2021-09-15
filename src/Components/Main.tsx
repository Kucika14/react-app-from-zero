import React from "react"
// import styles from './main.css'

export interface IHelloWorldProps {
    userName: string
    lang: string
}

export function Main (props: IHelloWorldProps) {
    return (
    <h1>
        Sütikuckó
        <div className="topcontainerbg"></div>
    </h1>
  ) }

