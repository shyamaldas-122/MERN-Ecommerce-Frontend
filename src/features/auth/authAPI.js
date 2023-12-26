export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    console.log("createUser=",data);
    // O/P: createUser= {email: 'one@gmail.com', password: 'Zxcvbnm1', id: 3}
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch('http://localhost:3000/users?email=' + email);
    // O/P:
    // [
    //   {
    //     "email": "one@gmail.com",
    //     "password": "Zxcvbnm1",
    //     "id": 3
    //   }
    // ]
    const data = await response.json();
    console.log({data})
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: 'wrong credentials' });
      }
    } else {
      reject({ message: 'user not found' });
    }
    // TODO: on server it will only return some info of user (not password)
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:3000/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: { 'content-type': 'application/json' },
    });
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data });
  });
}