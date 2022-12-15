import React, { useMemo } from "react"
import { CSSProperties } from "react"
import { FC } from "react"
import "./ProductCard.scss"

const ProductCard: FC<{
  size?: number
  product: FakeProduct
  style?: CSSProperties
}> = ({ product, size, style }) => {
  const styleCont = useMemo<CSSProperties>(() => {
    return {
      ...(style || {}),
      width: `${size || 150}px`,
      height: `${size || 150}px`,
    }
  }, [size, style])

  return (
    <div className="product-card" style={styleCont}>
      <div className="image-container">
        <img src={product.image} alt="" className="image" />
      </div>
      <strong className="cost">$ {product.price}</strong>
      <span className="title">{product.title}</span>
    </div>
  )
}

export default ProductCard
