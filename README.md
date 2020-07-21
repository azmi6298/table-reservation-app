# Table Reservation App
![npm](https://img.shields.io/npm/v/express?label=express&logo=npm) ![npm](https://img.shields.io/npm/v/mongoose?label=mongoose&logo=npm) ![npm](https://img.shields.io/npm/v/vue?label=vue&logo=npm) ![GitHub last commit](https://img.shields.io/github/last-commit/azmi6298/table-reservation-app)

> A table reservation app built on ExpressJS + VueJS.

**Check out my Medium stories on how I built this app (in bahasa Indonesia :indonesia:)**
* [Membangun Aplikasi Reservasi Meja dengan MEVN — Bagian Pertama](https://medium.com/easyread/bagaimana-saya-membangun-aplikasi-reservasi-meja-dengan-mevn-bagian-pertama-eac108f266a3)
* [Membangun Aplikasi Reservasi Meja dengan MEVN — Bagian Kedua](https://medium.com/easyread/membangun-aplikasi-reservasi-meja-dengan-mevn-bagian-kedua-feabd7bd7b00)
* More to go ...

## How to use it?
```bash
# install all of the dependencies first
npm install

# to run ExpressJS server on port 5000, but you can change it in app.js
npm start

# to run VueJS on development mode
cd client
npm run serve
```

## Things to do
- [x] Implement Frontend (VueJS)
- [x] Implement CSS with TailwindCSS
- [ ] Implement Advanced Search
- [ ] Implement History
- [ ] Implement Order Calculator
- [ ] Implement API Auth
- [ ] Implement Login
- [ ] Implement RBAC + Admin Control Panel

## Changelog

**20-06-2020**
* Initial commit
* Implement Backend API (ExpressJS + MongoDB)

**21-06-2020**
* Add status code into routes

**24-06-2020**
* Change API URI
* Add CORS package
* Change method to update and remove data on API
* Implement VueJS + VueX with CRUD operation

**29-06-2020**
* Implement styling with Tailwind CSS
* Add custom page title with Mixin

