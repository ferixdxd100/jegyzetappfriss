# Jegyzet App - Telepítési Útmutató

## Előfeltételek
- Node.js (v20+)
- MySQL szerver
- npm

## Backend Telepítés

1. Navigálj a backend mappába:
```bash
cd backend
```

2. Telepítsd a függőségeket:
```bash
npm install
```

3. Állítsd be a `.env` fájlt:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=jegyzetapp
PORT=3000
```

4. Indítsd el a backend szervert:
```bash
npm start
```

A backend a http://localhost:3000 címen fog futni.

## Frontend Telepítés

1. Navigálj vissza a projekt gyökérkönyvtárába:
```bash
cd ..
```

2. Telepítsd a függőségeket (ha még nem tetted):
```bash
npm install
```

3. Indítsd el a frontend szervert:
```bash
npm run dev
```

A frontend a http://localhost:5173 címen fog futni.

## Használat

1. Nyisd meg a böngészőt és menj a http://localhost:5173 címre
2. Regisztrálj egy új felhasználót
3. Jelentkezz be
4. Kezdj el jegyzeteket készíteni!

## Adatbázis

Az alkalmazás automatikusan létrehozza a `jegyzetapp` adatbázist és a szükséges táblákat:
- `users` - Felhasználók tárolása (bcrypt hash-elt jelszavakkal)
- `notes` - Jegyzetek tárolása (user_id foreign key-vel)

## API Végpontok

- POST `/api/register` - Regisztráció
- POST `/api/login` - Bejelentkezés
- GET `/api/notes/:userId` - Jegyzetek lekérése
- POST `/api/notes` - Új jegyzet
- PUT `/api/notes/:id` - Jegyzet frissítése
- DELETE `/api/notes/:id` - Jegyzet törlése

## Technológiák

### Backend:
- Node.js + Express
- MySQL2
- bcrypt (jelszó hash-elés)
- CORS
- dotenv

### Frontend:
- React 19
- React Router DOM 7
- Bootstrap 5
- Vite

## Biztonsági Funkciók

- Jelszavak bcrypt hash-eléssel tárolva
- SQL injection védelem (prepared statements)
- CORS konfiguráció
- Session kezelés
- Felhasználói adatok elkülönítése
