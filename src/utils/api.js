export const login = (username, password) => {
  console.log("import export working");
  let token;
  fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: username,
        password: password,
    })
  }).then(results => {
    console.log(results);
    return results.json();
  }).then(data => {
    console.log(data);
    token = data["token"];
    console.log(token);
  });
  return token;
}