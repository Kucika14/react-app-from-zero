import styles from './Recipes.css'

/* interface IIngredients {

} */

interface IRecipe {
  title: string
  id: number
  content: string
  ingredients: { [key: string]: string }
}

type TRecipes = IRecipe[]

const mockRecipes: TRecipes = [
  {
    title: 'kakakós kevert',
    id: 0,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vero! Ab nemo tempore aliquid veritatis perferendis animi ipsa. Nemo, sed dignissimos! Doloremque repudiandae ea maxime tenetur voluptatum, voluptates voluptas quasi.',
    ingredients: {
      'ing-0': '5dkg vaj',
      'ing-1': '1kg liszt',
      'ing-2': '3 ek cukor',
      'ing-3': '1 zsák szeretet'
    }
  },
  {
    title: 'meggyes pite',
    id: 1,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vero! Ab nemo tempore aliquid veritatis perferendis animi ipsa. Nemo, sed dignissimos! Doloremque repudiandae ea maxime tenetur voluptatum, voluptates voluptas quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vero! Ab nemo tempore aliquid veritatis perferendis animi ipsa. Nemo, sed dignissimos! Doloremque repudiandae ea maxime tenetur voluptatum, voluptates voluptas quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vero! Ab nemo tempore aliquid veritatis perferendis animi ipsa. Nemo, sed dignissimos! Doloremque repudiandae ea maxime tenetur voluptatum, voluptates voluptas quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vero! Ab nemo tempore aliquid veritatis perferendis animi ipsa. Nemo, sed dignissimos! Doloremque repudiandae ea maxime tenetur voluptatum, voluptates voluptas quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vero! Ab nemo tempore aliquid veritatis perferendis animi ipsa. Nemo, sed dignissimos! Doloremque repudiandae ea maxime tenetur voluptatum, voluptates voluptas quasi.',
    ingredients: {
      'ing-0': '10dkg vaj',
      'ing-1': '0.5kg liszt',
      'ing-2': '1 ek cukor',
      'ing-3': '30dkg meggy'
    }
  },
  {
    title: 'almás torta',
    id: 2,
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, vero! Ab nemo tempore aliquid veritatis perferendis animi ipsa. Nemo, sed dignissimos! Doloremque repudiandae ea maxime tenetur voluptatum, voluptates voluptas quasi.',
    ingredients: {
      'ing-0': '5 db tojás',
      'ing-1': '0.5kg liszt',
      'ing-2': '1 ek cukor',
      'ing-3': '30dkg meggy',
      'ing-4': '3 dl tej'
    }
  }

]

export default function Recipes (): JSX.Element {
  const recipes = mockRecipes.map((recipe) => {
    const { content, id, ingredients, title } = recipe

    return (
      <div className={ styles.tile }>

        <h2 className={ styles.title }>
          { title }
        </h2>
        <p className={ styles.desc }>
          { content }
        </p>
        <div className={ styles.list }>
          <ol>
            { Object.values(ingredients).map((ingridient) => {
              const listkey = `${ title }-${ id }`
              return (
                <li key={ listkey }>{ ingridient }</li>
              )
            }) }
          </ol>
        </div>
      </div>
    )
  })

  return (
    <div className={ styles.container }>
      { recipes }
    </div>
  )
}
