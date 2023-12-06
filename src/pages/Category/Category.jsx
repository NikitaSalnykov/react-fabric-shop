import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import ProductList from "../../components/ProductsList/ProductsList"

const Category = () => {
  return (
    <div className="container">
    <Breadcrumbs/>
    <ProductList title='Весь католог:'/>
    </div>
  )
}

export default Category