
var usersNumber = prompt("الرقم");
var users = [];

function addUser(name, id, balance) {
  users.push({ name: name, id: id, balance: balance });
}

function editUserBalanceById(id, newBalance) {
  let index = users.findIndex(user => user.id == id);
  if (index !== -1) {
    users[index].balance = newBalance;
  } else {
    console.log("not found");
  }
}

function deleteUserById(id) {
  let index = users.findIndex(user => user.id == id);
  if (index !== -1) {
    users.splice(index, 1); 
    console.log("");  }
   else {
    console.log("  ");
  }
}

for (var i = 0; i < usersNumber; i++) {
  var name = prompt("name");
  var id = prompt("id");
  var balance = prompt("balance");
  addUser(name, id, parseFloat(balance));
}
console.table(users);