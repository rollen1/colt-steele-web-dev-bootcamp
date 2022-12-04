let input = prompt('what would you like to do?');
const todos = [];
 
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
    } else if (input === 'new') {
        const newTodo = prompt('add a new task?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('enter an index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`okay, deleted ${deleted[0]}`)
        } else {
            console.log('unknown index');
        }
    }
    input = prompt('what would you like to do?');
}
console.log('quitting...');
