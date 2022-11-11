function solve(commands){
    let output = [];

    for (const command of commands) {
        let commandTokens = command.split(' ');

        let commandKey = commandTokens[0];
        let commandValue = commandTokens[1];

        switch (commandKey){
            case "add":
                add(commandValue);
                break;
            case "remove":
                remove(commandValue);
                break;
            case "print":
                console.log(output.join(','));
        }
    }

    function add(value){
        output.push(value);
    }

    function remove(value){
        output = output.filter(x => x !== value);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);