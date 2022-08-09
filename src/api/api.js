const url = "https://picsum.photos/";

export function fetchCards() {
  return fetch(url + "v2/list").then((response) => response.json());
}
