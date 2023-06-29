const express = require("express");
const app = express();
const {faker} = require("@faker-js/faker");
const port = 8000

const user = () => ({
    passsword: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    _id: faker.string.uuid(),
    });

const company = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
        },
    });

app.get("/api/user/new", (req, res) => {
    const newUser = user();
    res.json(newUser);
})

app.get("/api/company/new", (req, res) => {
    const newCompany = company();
    res.json(newCompany);
})

app.get("/api/user/company", (req, res) => {
    const newUserCompany = {
        newCompany: company(),
        newUser: user(),
    }
    res.json(newUserCompany);
})

app.listen( port, () => {console.log("App listening on port " + port)})