import { createTheme } from "@mui/material/styles";
import { defaultAppTheme, makeThemeOptions } from "czifui";

const primaryColors = {
  "100": "#07458d",
  "200": "#07458d",
  "300": "#07458d",
  "400": "#07458d",
  "500": "#07458d",
  "600": "#07458d",
};

const secondaryColors = {
  "100": "#00A2DE",
  "200": "#00A2DE",
  "300": "#00A2DE",
  "400": "#00A2DE",
  "500": "#00A2DE",
  "600": "#00A2DE",
};

const infoColors = {
  "100": "#F6F2FC",
  "200": "#F3EDFC",
  "400": "#511CC1",
  "600": "#371680",
};

// const primaryBorders = {
//   300: `1px solid ${primaryColors[300]}`,
//   400: `1px solid ${primaryColors[400]}`,
//   500: `1px solid ${primaryColors[500]}`,
//   600: `1px solid ${primaryColors[600]}`,
//   dashed: `2px dashed ${primaryColors[400]}`,
// };

const appTheme = { ...defaultAppTheme };

appTheme.colors.primary = primaryColors;
appTheme.colors.secondary = secondaryColors;
appTheme.colors.info = infoColors;

// appTheme.borders = appTheme.borders ?? {
//   error: {},
//   gray: {},
//   link: {},
//   primary: {},
//   success: {},
//   warning: {},
// };
// appTheme.borders.primary = primaryBorders;

export const theme = createTheme(makeThemeOptions(appTheme));
