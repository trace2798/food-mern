import ProductSummaryCard from "./ProductSummaryCard"
import { useSelector } from "react-redux"
import { cartProducts } from "../stores/cart/cartSlice"

const ProductsSummary = () => {
    const cart = useSelector(cartProducts)
    

  return (
    <div>
        {
            cart && cart?.map((product, index) => {
            return(
                <ProductSummaryCard product={product} key={index}/>
            )
            })
        }
    </div>
  )
}

export default ProductsSummary