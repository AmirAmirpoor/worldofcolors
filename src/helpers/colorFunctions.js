import chroma from "chroma-js";

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
      }));
  }

  // IT MEANS THAT WE CLICKED ON "GENERATE" LINK
  return Array.from({ length: 5 }).map((_, idx) => ({
    id: idx,
    value: chroma.random().hex(),
  }));
};

export const darkOrLight = ({ value: hex }) => {
  const luminance = chroma(hex).luminance();
  return luminance < 0.3 ? "#eee" : "#333";
};
