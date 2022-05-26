//https://www.tutorialspoint.com/how-to-remove-html-tags-from-a-string-in-javascript

export default function removeTags(str) {
  if (str === null || str === "") return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, "");
}
