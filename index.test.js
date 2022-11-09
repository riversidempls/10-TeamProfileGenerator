const expectinquirer = require('./index');

test('make sure program runs without errors', () => {
    expectinquirer.prompt(Questions).then(answers);
});