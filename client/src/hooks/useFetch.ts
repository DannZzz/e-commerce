import axios from "axios"
import { SERVER_URL } from "../const"

export function useFetch() {
  function request(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "GET",
    data: { query?: any; body?: any } = {}
  ) {
    return axios({
      url: `${SERVER_URL}${url}?${new URLSearchParams(data?.query || {})}`,
      method,
      data: data.body,
    })
  }
  return { request }
}
