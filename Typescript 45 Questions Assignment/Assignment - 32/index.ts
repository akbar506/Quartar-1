const current_users: string[] = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];

const new_users: string[] = ['Frank', 'Grace', 'bob', 'Heidi', 'Ivan'];

for (let i = 0; i < new_users.length; i++) {
    if (current_users.map(user => user.toLowerCase()).includes(new_users[i].toLowerCase())) {
        console.log(new_users[i] + ' will need to enter a new username.');
    } else {
        console.log(new_users[i] + ' is available.');
    }
}