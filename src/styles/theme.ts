import { createTheme } from "@mui/material/styles";
import { defaultAppTheme, makeThemeOptions } from "czifui";

const primaryColors = {
  "100": "#0099ff",
  "200": "#0099ff",
  "300": "#0099ff",
  "400": "#0099ff",
  "500": "#0099ff",
  "600": "#0099ff",
};

const infoColors = {
  "100": "#F6F2FC",
  "200": "#F3EDFC",
  "400": "#511CC1",
  "600": "#371680",
};

const primaryBorders = {
  300: `1px solid ${primaryColors[300]}`,
  400: `1px solid ${primaryColors[400]}`,
  500: `1px solid ${primaryColors[500]}`,
  600: `1px solid ${primaryColors[600]}`,
  dashed: `2px dashed ${primaryColors[400]}`,
};

const appTheme = { ...defaultAppTheme };

appTheme.colors.primary = primaryColors;
appTheme.colors.info = infoColors;

appTheme.borders = appTheme.borders ?? {
  error: {},
  gray: {},
  link: {},
  primary: {},
  success: {},
  warning: {},
};
appTheme.borders.primary = primaryBorders;

export const theme = createTheme(makeThemeOptions(appTheme));
