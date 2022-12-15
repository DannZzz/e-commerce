import { Carousel } from "antd"
import React, { useEffect, useState } from "react"
import { useFetch } from "../../../hooks/useFetch"
import ProductCard from "../../../shared/ProductCard/ProductCard"
import "./SpecialFeed.scss"

const ProductsInEachSlide = 10

const SpecialFeed = () => {
  const [products, setProducts] = useState<FakeProduct[]>([])
  const [sortedProducts, setSortedProducts] = useState<FakeProduct[][]>([])
  const { request } = useFetch()

  useEffect(() => {
    const arrs: FakeProduct[][] = []
    for (let i = 0; i < products.length; i += ProductsInEachSlide) {
      arrs.push(products.slice(i, i + ProductsInEachSlide))
    }
    setSortedProducts(arrs)
  }, [products])

  useEffect(() => {
    request("/products").then((res) => {
      setProducts(
        res.data?.slice(
          0,
          Math.floor(res.data?.length / ProductsInEachSlide) *
            ProductsInEachSlide
        )
      )
    })
  }, [])
  return (
    <div className="main-special-feed">
      <Carousel autoplay autoplaySpeed={10000}>
        {sortedProducts.map((arr, i) => (
          <div className="special-product-slide" key={i + ""}>
            <div className="special-product-slide-container">
              {arr.map((product, ind) => (
                <ProductCard size={250} key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default SpecialFeed
