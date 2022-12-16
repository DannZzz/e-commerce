import { theme } from "antd"

const { defaultAlgorithm, defaultSeed } = theme

export const AntdThemeToken = defaultAlgorithm({
  ...defaultSeed,
  colorPrimary: "#9a2f43",
  colorTextBase: "#9a2f43",
})
