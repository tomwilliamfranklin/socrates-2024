/* removes spaces and makes the url lower case. */
export function convertStringToValidURL(string: string) {
  if (string)
    return (string.split("./")[1] ?? string)
      .split(".md")[0]
      .toLowerCase()
      .toLowerCase()
      .split(" ")
      .join("");
  else return "";
}

export function isValidURL(string: string) {
  let isValidURL = true;

  // checking if image URL is valid.
  let url;
  try {
    url = new URL(string);
    isValidURL = url.protocol === "http:" || url.protocol === "https:";
  } catch (_) {
    isValidURL = false;
  }

  return isValidURL;
}

export function createValidImageURL(src: string | undefined) {
  let source = src;

  if (src && !isValidURL(src)) {
    if (src.includes("public/")) {
      source = src.replace("public/", "");
    }
    source = window.location.origin + source;
  }

  return source;
}
