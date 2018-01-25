
export const getBrews = () => {
  return fetch('http://localhost:8080/brews')
  .then(res => res.json())
}

export const createBrew = (title, ingredients, method, initialSG) => {
  return fetch('http://localhost:8080/brews', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({title: title, ingredients: ingredients, method: method, initialSG: initialSG})
  })
  .then(res => res.json())
}
