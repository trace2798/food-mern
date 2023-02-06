import { useDispatch } from "react-redux"
import { incrementProductAmount, decrementProductAmount } from "../stores/cart/cartSlice"

const ProductSummaryCard = ({product}) => {
  const dispatch = useDispatch();
  
  return (
    <div className="flex p-1 sm:p-2 border-b border-b-gray-200">
      <div className="product-image mr-2 border border-grey-200 rounded-lg w-full sm:w-1/3">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-gray-600 mt-4">{product.desciption}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="price font-bold">{`${product.price}$`}</div>
        <div className="quantity flex">
          <button className="p-1 font-bold" disabled={product.amount <=0} onClick = {() => dispatch(decrementProductAmount(product))}>-</button>
          <span className="p-1 font-bold">{product.amount}</span>
          <button className="p-1 font-bold" onClick = {() => dispatch(incrementProductAmount(product))}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductSummaryCard