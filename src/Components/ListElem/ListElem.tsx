import styles from './ListElem.css'

interface IListParams {
  item: string
  index: number
  key: string
  onClickElem: (e: React.MouseEvent<HTMLElement>) => void
}

export default function ListElement (params: IListParams): JSX.Element {
  return (
    <li
      className={ styles.navItem }
      key={ params.item }
      data-index={ params.index }
      onClick={ params.onClickElem }
    >
      <span>{ params.item }</span>
    </li>
  )
}
