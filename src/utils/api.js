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

export const getTasks = async (token, start_date, end_date) => {
  const response = await fetch(`http://localhost:8000/api/tasks?start_date=${start_date}&end_date=${end_date}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token,
    },
  })
  const json = await response.json();
  const result = [];
  let i;
  for (i in json) {
    const task = json[i]
    result.push({
        id: task["id"],
        name: task["name"],
        date: task["date"],
        repeat_inf: task["repeat_inf"],
        repeat_times: task["repeat_times"],
    });
  }
  return result;
}

export const getEvents = async (token, start_date, end_date) => {
  const response = await fetch(`http://localhost:8000/api/events?start_date=${start_date}&end_date=${end_date}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token,
    },
  })
  const json = await response.json();
  const result = [];
  let i;
  for (i in json) {
    const event = json[i]
    result.push({
        id: event["id"],
        name: event["name"],
        date: event["date"],
        repeat_inf: event["repeat_inf"],
        repeat_times: event["repeat_times"],
    });
  }
  return result;
}

export const completeTask = async (token, id) => {
  const response = await fetch('http://localhost:8000/api/complete-task', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token,
    },
    body: JSON.stringify({
        id: id,
    })
  })
}