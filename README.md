<img src="./src/img/UniPix-logo.png" width="150" height="150" alt="Unipix Logo">

# UniPix Back-End

This is our third coding project as part of the IronHack bootcamp - SAO-29-WD-PT. It's a digital wallet called **UniPix** and it allows the user to store his/her Pix keys (new Brazilian payment method) and also from others (family, friends, etc). Additionally it automatically generates QR codes that ease the sharing process for the user to receive or perform money transfers. The UX is created with mobile first in mind.

## Summary

- [How it works](#how-it-works)
- [How to use our app](#how-to-use-our-app)
- [Version](#version)
- [Authors](#authors)
- [Resources](#resources)
- [Roadmap](#roadmap)
- [Acknowledgments](#acknowledgments)

## How it works

1. Sign up for an account - **/api/auth/public/signup**
2. Login with your user - JSON Web Token - **/api/auth/public/login**
3. Get user details - **/api/user/private/info**
4. Update user details - **/api/user/private/update**
5. Add your keys (CPF, CNPJ, e-mail, cellphone, random) - **/api/pix/private/create**
6. Add keys from others (CPF, CNPJ, e-mail, cellphone, random) - **/api/pix/private/create**
7. List all keys - **/api/pix/private/list**
8. List one keys - **/api/pix/private/list/id**
9. Edit keys - **/api/pix/private/update/id**
10. Delete keys - **/api/pix/private/delete/id**
11. List available banks - **/api/bank/private/list**

## How to use our app

You can use and modify our project by downloading/cloning the project files or you can run our online instance from [Heroku](https://unipix.herokuapp.com/)

## Version

| Version | Comments                             |
| ------- | ------------------------------------ |
| 0.1     | Initial release, basic functionality |
| 0.2     | Bug fixes, new user route            |
| 0.3     | City added to User model             |
| 0.4     | New banks and logos                  |

## Authors

- **Leonardo Mezzanotti** - [leomezza](https://github.com/leomezza) - @github/leomezza
- **Rodrigo Muniz** - [ramunizbh](https://github.com/ramunizbh) - @github/ramunizbh

## Resources

- [Node.js Heroku Runtime](https://www.heroku.com/nodejs)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [axios](https://github.com/axios/axios)
- [joi](https://github.com/sideway/joi)
- [cpf-cnpj-validator](https://github.com/carvalhoviniciusluiz/cpf-cnpj-validator)
- [JSON Web Tokens](https://jwt.io/)

## Roadmap

- Central Bank integration
- Social login
- Pix key sharing with other UniPix users
- Increase/Automate available Banks

## Acknowledgments

- **Henrique** - Instructor
- **Ingrid** - Teacher Assistant
