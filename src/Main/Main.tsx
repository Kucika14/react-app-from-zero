import { useState, useRef } from 'react'
import Header from '../Components/Header/Header'
import Recipes from '../Components/Recipes/Recipes'

export interface IHelloWorldProps {
    userName: string
    lang: string
}

export default function Main (props: IHelloWorldProps): JSX.Element  {
    return (
      <section>
        <Header />
        <Recipes />
      </section>
    )
}

