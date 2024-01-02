import { useParams } from "react-router-dom"
import Review from "./components/review/Review"
import Product from "./components/product/Product"


const ProductDetails = () => {
    const {id} = useParams()
    console.log(id)
  return (
    <>
    <Product id={id}/>
    <Review />
    </>
  )
}

export default ProductDetails