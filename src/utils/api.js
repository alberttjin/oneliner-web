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
  if (response.ok) {
    const json = await response.json();
    const token = json["token"];
    return token;
  } else {
    return response.ok;
  }
}

export const signup = async (username, email, password) => {
  const response = await fetch('http://localhost:8000/api/register', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        username: username,
        email: email,
        password: password,
    })
  })
  if (response.ok) {
    const json = await response.json();
    const token = json["token"];
    return token;
  } else {
    return response.ok;
  }
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
        completed: task["completed"],
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
        start_date: event["start_date"],
        end_date: event["end_date"],
        start_time: event["start_time"],
        end_time: event["end_time"],
        repeat_inf: event["repeat_inf"],
        repeat_times: event["repeat_times"],
        completed: event['completed'],
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
  return response.ok;
}

export const completeEvent = async (token, id) => {
  const response = await fetch('http://localhost:8000/api/complete-event', {
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
  return response.ok;
}


export const addTask = async (token, data) => {
  const task = {
    name: data['name'],
    date: data['date'],
    repeat_inf: 0,
    repeat_times: 1,
    repeat_freq: 1,
  }
  const response = await fetch('http://localhost:8000/api/add-task', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token,
    },
    body: JSON.stringify(task)
  })
  return response;
}

export const addEvent = async (token, data) => {
  const event = {
    name: data['name'],
    start_date: data['date'],
    repeat_inf: 0,
    repeat_times: 1,
    repeat_freq: 1,
  }
  const response = await fetch('http://localhost:8000/api/add-event', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + token,
    },
    body: JSON.stringify(event)
  })
  return response;
}
