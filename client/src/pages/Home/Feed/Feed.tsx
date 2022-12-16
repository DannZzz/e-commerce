import React, { useEffect, useState } from "react"
import { useFetch } from "../../../hooks/useFetch"
import ProductCard from "../../../shared/ProductCard/ProductCard"
import "./Feed.scss"

const Feed = () => {
  const [products, setProducts] = useState<FakeProduct[]>([])
  const { request } = useFetch()

  useEffect(() => {
    request("/products").then((res) => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className="main-feed">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} size={250} />
      ))}
    </div>
  )
}

export default Feed
