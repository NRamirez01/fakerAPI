// const express = require("express");
// const app = express();

// // req is short for request
// // res is short for response
// app.get("/api", (req, res) => {
//   res.send("Our express api server is now sending this over to the browser");
// });

// const server = app.listen(8000, () =>
//   console.log(`Server is locked and loaded on port ${server.address().port}!`)
// );




const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const createUser = () => {
  const newUser = {
    password: faker.datatype.uuid(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
  };
  return newUser;
}

const createCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newCompany;
}

const newFakeUser = createUser();
const newFakeCompany= createCompany();

app.get("/api/users/new", (req, res) => {
    res.json({ newFakeUser });
});

app.get("/api/companies/new", (req, res) => {
  res.json({ newFakeCompany });
});

app.get("/api/user/company", (req, res) => {
  res.json({newFakeCompany, newFakeUser});
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );
