import React, { useEffect, useState } from "react"
import { useFetch } from "../../../hooks/useFetch"
import "./Feed.scss"

const Feed = () => {
  const [products, setProducts] = useState<FakeProduct[]>([])
  const { request } = useFetch()

  useEffect(() => {
    request("/products").then((res) => {
      setProducts(res.data)
    })
  }, [])

  return <div></div>
}

export default Feed
