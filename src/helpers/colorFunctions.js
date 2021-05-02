import chroma from "chroma-js";

export const colorFormats = ({ value: hex }) => {
  const details = [];

  const joinByComma = (arr) => arr.map((x) => x.toFixed(2)).join(", ");

  details.push({ label: "HEX", value: hex });
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
