//
//
//
//
//
//
let users = [{
  username: 'Jose',
  email: 'jose.vega@gmail.com',
  subscriptionStatus: 'VIP',
  discordId: 'JoseVega#0001',
  lessonsCompleted: [0,1]
},
{
  username: 'Mitri',
  email: 'mitri@gmail.com',
  subscriptionStatus: 'VIP',
  discordId: 'Mitri#0001',
  lessonsCompleted: [0, 1, 2, 3]
}]

console.log(users[0].username)

console.log(users[0].subscriptionStatus)

console.log(users[0].lessonsCompleted.map(elem => elem * 2))