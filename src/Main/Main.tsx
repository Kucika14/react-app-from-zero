import Header from '../Components/Header/Header'

export interface IHelloWorldProps {
    userName: string
    lang: string
}

/**
 * The main structure constructed here.
 * @param {IHelloWorldProps} props Parameters.
 * @returns {HTMLElement} The element.
 */
export default class Main extends React.Component {
  public constructor (props: IHelloWorldProps) {
    super(props)
    log('props', props)
  }

  public render (): JSX.Element {
    return (
      <section>
        <Header />
      </section>
    )
  }
}

