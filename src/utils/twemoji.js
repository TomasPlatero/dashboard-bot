import twemoji from "twemoji";

export const parseTwemoji = (text) => {
  return twemoji.parse(text, {
    folder: "svg",
    ext: ".svg",
  });
};
