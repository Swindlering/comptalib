#  Simple test Comptalib - Node.js Rest Apis with Express, Sequelize & MySQL.

## Project setup
```
npm install
```

### Run
```
node server.js
```

## MYSQL USER
```
CREATE USER 'comptalib'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON comptalib.* TO 'comptalib'@'localhost';

FLUSH PRIVILEGES;

```
## Routes USER 
  * Create a new User in POST (".../api/users");

  * Retrieve all user in GET (".../api/users");

  * Retrieve a single U with id in GET  (".../api/users/:id");

  * Update a U with id in PUT  (".../api/users/:id");

  * Delete a U with id in DELETE  (".../api/users/:id");

  * Delete all user in DELETE  (".../api/users/");

## Routes SOCIETY

  * Create a new society in POST (".../api/societies");

  * Retrieve all societies in GET (".../api/societies");

  * Retrieve a single society with id in GET (".../api/societies/:id");

  * Update a User with id in PUT (".../api/societies/:id");

  * Add new user working in this society in PUT (".../api/societies/:idSociety/user/:idUser");

  * Delete a User with id in DELETE (W.I.P.);

  * Delete all Users DELETE (W.I.P.)