//
//
//
//
//
//
let users = [
  {
    username: "Jose",
    email: "jose.vega@gmail.com",
    password: "test123",
    subscriptionStatus: "VIP",
    discordId: "JoseVega#0001",
    lessonsCompleted: [0, 1],
  },
  {
    username: "Mitri",
    email: "mitri@gmail.com",
    password: "mitri123",
    subscriptionStatus: "VIP",
    discordId: "Mitri#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
  {
    username: "Zen",
    email: "zen@gmail.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "Zen#0001",
    lessonsCompleted: [0, 1, 2, 3],
  },
];

function login(email, password) {
  for (let i = 0; i < users.length; ++i) {
    if (users[i].email === email) {
      console.log(users[i]);
      if (users[i].password === password) {
        console.log("log the user  in - the details are correct");
      } else {
        console.log("password is incorrect");
      }
      return;
    }
  }
  console.log("could not find an email that matches");
}

function register(user) {
  users.push(user);
}

register({
  username: "Sergio",
  email: "sergio@gmail.com",
  password: "sergio123",
  subscriptionStatus: "VIP",
  discordId: "Sergio#0001",
  lessonsCompleted: [0, 1],
});

login("sergio@gmail.com", "sergio123");
