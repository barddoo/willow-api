<h1 align="center">Willow Test 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/barddoo/willow-interview" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> Project test for the Willow process

### 🏠 [Homepage](https://github.com/barddoo/willow-interview)

## Install

```sh
yarn install
```

## Usage

```sh
yarn start
```

## Endpoints

[Insomnia](https://insomnia.rest/) collection can be found [here](./requests/Insomnia.yaml)

#### Topics

* List

GET `/topics`

* List by id

GET `/topics/{id}`

* Create

POST `/topics`

{
"english_name":"",
"klingon_name": ""
}

* List users by topic

GET `/topics/{id}/users`

#### Users

* List

GET `/users`

* List by id

GET `/users/{id}`

* Create

POST `/users`

{
"name":"",
"email": ""
}

* List users by topic

`/users/{id}/topics`

#### Associations

* Associate

POST `/associate`

* Remove association

DELETE `/associate`

## Author

👤 **Charles Fonseca**

* Github: [@barddoo](https://github.com/barddoo)
* LinkedIn: [@charlesjrfonseca](https://linkedin.com/in/charlesjrfonseca)

## Show your support

Give a ⭐️ if this project helped you!
