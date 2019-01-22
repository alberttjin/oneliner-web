export const login = async (username, password) => {
  const response = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: username,
        password: password,
    })
  })
  const json = await response.json();
  const token = json["token"];
  return token;
}

export const getTasks = async () => {

}

export const getEvents = async () => {
  
}