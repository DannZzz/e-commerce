import { theme } from "antd";

const { defaultAlgorithm, defaultSeed } = theme;

export const AntdThemeToken = defaultAlgorithm({
  ...defaultSeed,
  colorPrimary: "#252525",
});
