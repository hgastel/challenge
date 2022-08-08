# Challenge

Previous requirements to run locally:
- Have postgresql installed.
- Edit '/database/database.js' with your credentials.
- Go to the root directory of the project and run 'npm install' in the terminal.
- Run the command 'npm run dev' in the terminal.

1.- User Section

- createUser: Generates user data with encrypted password.
curl --location --request POST 'http://localhost:4000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "usrname": "usuario4",
    "pass": "pass4",
    "name": "nombre4",
    "gender": "M",
    "age": 20,
    "phone": 6671096948,
    "birthdate": "1992-08-01"
}'

- userLogin: Login for users.
curl --location --request POST 'http://localhost:4000/api/users/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "usrname": "usuario4",
    "pass": "pass4"
}'

- getUsers: Retrieves all user data.
curl --location --request GET 'localhost:4000/api/users/'

- getUserById: Retrieves specific user data.
curl --location --request GET 'localhost:4000/api/users/3'

- deleteUser: Deletes user by his id.
curl --location --request DELETE 'localhost:4000/api/users/3'

- updateUser: Updates user info by his id.
curl --location --request PUT 'localhost:4000/api/users/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "usrname": "usuario1",
    "pass": "pass1",
    "name": "nombre1UP",
    "gender": "M",
    "age": 29,
    "phone": 6671096948,
    "birthdate": "1992-08-01"
}'

2.- Property Section

- createProperty: Generates property data.
curl --location --request POST 'http://localhost:4000/api/properties/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "PropTest",
    "description": "DescTest",
    "price": "123",
    "quantity": "456"
}'

- getProperties: Retrieves all properties data.
curl --location --request GET 'localhost:4000/api/properties/'

- getPropertiesById: Retrieves specific property data.
curl --location --request GET 'localhost:4000/api/properties/2'

- deleteProperty: Deletes property by id.
curl --location --request DELETE 'localhost:4000/api/properties/2'

- Updates property info by id.
curl --location --request PUT 'localhost:4000/api/properties/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "PropTestUP",
    "description": "DescTestUP",
    "price": "123",
    "quantity": "456"
}'