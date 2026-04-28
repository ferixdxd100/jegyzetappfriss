# Jegyzet App Frontend

A vizsgaremekünk egy webalapú jegyzetelő alkalmazás. Lehetővé teszi a felhasználók számára, hogy regisztráljanak, bejelentkezzenek, majd saját jegyzeteiket létrehozzák, szerkesszék és töröljék. 

A frontend **React** keretrendszerre épül, **Vite** fejlesztői eszközzel, és **Netlify**-on került publikálásra.

---

## Technológiák

- **React 19** – komponens alapú UI felépítés
- **React Router DOM 7** – kliensoldali útvonalkezelés (SPA navigáció)
- **Bootstrap 5** – reszponzív stílusok és UI komponensek
- **Vite 7** – fejlesztői szerver és build eszköz

---

## Projekt struktúra

```
jegyzetappfriss/
├── public/             # Statikus fájlok
├── src/                # Forráskód
│   ├── components/     # Újrafelhasználható komponensek
│   ├── pages/          # Oldalak (útvonalakhoz rendelve)
│   └── main.jsx        # Belépési pont
├── dist/               # Build kimenet (generált)
├── index.html          # HTML sablon
├── vite.config.js      # Vite konfiguráció
├── netlify.toml        # Netlify deploy konfiguráció
└── package.json
```

## Design
A projektet a tervezéssel kezdtük, ahol Figmában kialakítottuk a kezdetleges UI prototípust

<img width="1361" height="630" alt="image" src="https://github.com/user-attachments/assets/59a52a53-826b-4d7e-901f-1704a6506c32" />

[FIGMA LINK](https://www.figma.com/design/wKDqh8OcFkdEovDjfnQxmO/Untitled?t=wxhNlT3Zb3VKhhFu-1)

---

## Oldalak és funkciók

### Regisztráció / Bejelentkezés
A felhasználó név, felhasználónév és jelszó megadásával tud regisztrálni. Bejelentkezés után a munkamenet HTTP-only cookie-ban tárolódik a szerver oldalon.
<img width="1906" height="937" alt="image" src="https://github.com/user-attachments/assets/1c39146a-aa70-442e-89c8-88d59f27f7d1" />


### Főoldal – Jegyzetek
Bejelentkezés után a felhasználó látja az összes saját jegyzetét. Lehetőség van új jegyzet létrehozására, meglévők szerkesztésére és törlésére.
<img width="1906" height="938" alt="image" src="https://github.com/user-attachments/assets/6d1e5b19-40d7-45fb-a6dd-737c5b2718ce" />


### Fiókbeállítások
A felhasználó módosíthatja a felhasználónevét és jelszavát, valamint törölheti a fiókját.
<img width="1913" height="944" alt="image" src="https://github.com/user-attachments/assets/78353319-748a-4de3-94c5-e3f093da5db4" />

---

### Responsive kialakítás

<img width="3291" height="1500" alt="Group 3" src="https://github.com/user-attachments/assets/9f570f7e-c7b2-42ac-88e0-20e86ffaae98" />


---

## Telepítés és futtatás

```bash
# Függőségek telepítése
npm install

# Fejlesztői szerver indítása
npm run dev

# Build készítése
npm run build

# Build előnézete
npm run preview
```

A fejlesztői szerver alapértelmezetten a `http://localhost:5173/` címen érhető el.

---
## Tesztelés

Élő verzió: [https://jegyzetapp.netlify.app](https://jegyzetapp.netlify.app)

Tesztfelhasználó:

- email: teszt@gmail.com
- felhasználónév: teszt
- jelszó: teszt

---

## Felhasznált eszközök

| Csomag | Verzió | Leírás |
|--------|--------|--------|
| `react` | ^19.2.0 | UI keretrendszer |
| `react-dom` | ^19.2.0 | React DOM renderelés |
| `react-router-dom` | ^7.13.1 | Kliensoldali routing |
| `bootstrap` | ^5.3.8 | CSS keretrendszer |
| `vite` | ^7.3.1 | Build eszköz és dev szerver |
| `@vitejs/plugin-react` | ^5.1.1 | React Fast Refresh támogatás |
| `eslint` | ^9.39.1 | Kódminőség ellenőrzés |

## Készítették
- [Deák Feri](https://github.com/ferixdxd100)
- [Váradi krisztián](https://github.com/avaradikrisz127)
