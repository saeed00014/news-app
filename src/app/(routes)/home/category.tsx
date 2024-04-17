import { categories } from '@/assets/data'
import CategoryBody from './categoryBody'

const Category = () => {
  return (
    categories.map((category) => {
      return (
        <div key={category}>
          <CategoryBody category={category} />
        </div>
      )
    })
  )
}

export default Category