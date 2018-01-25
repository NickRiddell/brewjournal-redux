
export const getBrews = () => {
  return fetch('http://localhost:8080/brews')
  .then(res => res.json())
}
