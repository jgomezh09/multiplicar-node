const { suma } = require('./logica');


suma('uno', 'DOs')
    .then(resp => console.log(resp))
    .catch(err => console.log(err))