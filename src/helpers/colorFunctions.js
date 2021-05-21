// chroma
import chroma from "chroma-js";

// lodash
import _ from "lodash";

export const colorFormats = ({ value: hex }) => {
  const details = [];

  const joinByComma = (arr) => arr.map((x) => x.toFixed(2)).join(", ");

  details.push({ label: "HEX", value: hex.slice(1).toUpperCase() });
  details.push({ label: "RGB", value: chroma(hex).rgb().join(", ") });
  details.push({ label: "RGBA", value: chroma(hex).rgba().join(", ") });
  details.push({ label: "HSL", value: joinByComma(chroma(hex).hsl()) });
  details.push({ label: "HSV", value: joinByComma(chroma(hex).hsv()) });
  details.push({ label: "HSI", value: joinByComma(chroma(hex).hsi()) });
  details.push({ label: "LAB", value: joinByComma(chroma(hex).lab()) });
  details.push({ label: "CMYK", value: joinByComma(chroma(hex).cmyk()) });
  details.push({ label: "LCH", value: joinByComma(chroma(hex).lch()) });
  details.push({ label: "HCL", value: joinByComma(chroma(hex).hcl()) });

  return details;
};

export const initialColors = (location) => {
  // IT MEANS THAT WE CLICKED ON "OPEN IN GENERATOR" BUTTON
  if (location.search.includes("colors")) {
    return location.search
      .split("?colors=")[1]
      .split("-")
      .map((value, idx) => ({
        id: idx,
        value: `#${value}`,
        isLocked: false,
      }));
  }

  // IT MEANS THAT WE CLICKED ON "GENERATE" LINK
  return Array.from({ length: 5 }).map((_, idx) => ({
    id: idx,
    value: chroma.random().hex(),
    isLocked: false,
  }));
};

export const darkOrLight = ({ value: hex }) => {
  const luminance = chroma(hex).luminance();
  return luminance < 0.3 ? "#eee" : "#333";
};

const getLastShade = (hex) => {
  let last = chroma(hex).darken(5);
  for (let i = 10; i > 0; i = i - 0.1) {
    last = chroma(hex).darken(i).hex();
    if (last !== "#000000") break;
  }

  return last;
};

export const generateShades = ({ value: hex }) => {
  const first = "#ffffff";
  const mid = hex;
  const last = getLastShade(hex);

  const shades = chroma.scale([first, mid, last]).mode("lch").colors(25);
  return _.uniq(shades);
};

export const getSecondaryValues = ({ value }) => {
  const rgb = chroma(value).rgb().join(", ");
  const hsl = chroma(value)
    .hsl()
    .map((c) => c.toFixed(2))
    .join(", ");
  const cmyk = chroma(value)
    .cmyk()
    .map((c) => c.toFixed(2))
    .join(", ");
  const lab = chroma(value)
    .lab()
    .map((c) => c.toFixed(2))
    .join(", ");

  return [rgb, hsl, cmyk, lab];
};
