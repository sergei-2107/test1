let defaultName = 'Javascript';
function sayHello (name) {
    if (name == null) {
        alert ('Hello' + defaultName + '!');
    }else {
        alert ('Hello' + name + '!');
    }
}