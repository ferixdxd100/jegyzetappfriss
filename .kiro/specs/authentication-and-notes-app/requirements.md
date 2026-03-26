# Requirements Document

## Introduction

Ez a dokumentum a Notesed jegyzet alkalmazás követelményeit tartalmazza. Az alkalmazás egy React-alapú webes felület, amely lehetővé teszi a felhasználók számára a regisztrációt, bejelentkezést, és jegyzeteik kezelését. Az alkalmazás Bootstrap-et használ a felhasználói felület kialakításához, és React Router-t a navigációhoz.

## Glossary

- **Application**: A Notesed jegyzet alkalmazás teljes rendszere
- **User**: Az alkalmazást használó személy
- **Authentication_System**: A felhasználói azonosítást és hitelesítést kezelő alrendszer
- **Registration_Form**: A regisztrációs űrlap komponens
- **Login_Form**: A bejelentkezési űrlap komponens
- **Home_Page**: Az alkalmazás kezdőlapja
- **About_Page**: Az alkalmazásról szóló információs oldal
- **Notes_System**: A jegyzetek kezelését végző alrendszer
- **Navigation_System**: Az oldalak közötti navigációt kezelő alrendszer
- **Session**: A felhasználó bejelentkezési munkamenete
- **Credential**: Bejelentkezési adat (felhasználónév és jelszó)

## Requirements

### Requirement 1: Kezdőlap megjelenítése

**User Story:** Mint felhasználó, szeretném látni a kezdőlapot az alkalmazás indításakor, hogy eldönthessem, mit szeretnék csinálni.

#### Acceptance Criteria

1. WHEN az Application betöltődik, THE Home_Page SHALL megjeleníteni az "Notesed" címet
2. THE Home_Page SHALL megjeleníteni három gombot: "Bejelentkezés", "Regisztráció", és "Az alkalmazásról"
3. THE Home_Page SHALL Bootstrap stílusokat használni a megjelenítéshez
4. WHEN a User rákattint a "Bejelentkezés" gombra, THE Navigation_System SHALL átirányítani a bejelentkezési oldalra
5. WHEN a User rákattint a "Regisztráció" gombra, THE Navigation_System SHALL átirányítani a regisztrációs oldalra
6. WHEN a User rákattint az "Az alkalmazásról" gombra, THE Navigation_System SHALL átirányítani az információs oldalra

### Requirement 2: Felhasználói regisztráció

**User Story:** Mint új felhasználó, szeretnék regisztrálni az alkalmazásba, hogy használhassam a jegyzetelési funkciókat.

#### Acceptance Criteria

1. THE Registration_Form SHALL megjeleníteni négy beviteli mezőt: "Név", "Felhasználónév", "Jelszó", és "Jelszó újra"
2. THE Registration_Form SHALL megjeleníteni egy "Regisztráció" gombot
3. THE Registration_Form SHALL megjeleníteni egy "Már van fiókom" linket
4. WHEN a User kitölti az összes mezőt és rákattint a "Regisztráció" gombra, THE Authentication_System SHALL validálni a bevitt adatokat
5. IF a "Jelszó" és "Jelszó újra" mezők értéke nem egyezik, THEN THE Registration_Form SHALL megjeleníteni egy hibaüzenetet
6. IF bármelyik mező üres, THEN THE Registration_Form SHALL megjeleníteni egy hibaüzenetet
7. WHEN a validáció sikeres, THE Authentication_System SHALL létrehozni egy új felhasználói fiókot
8. WHEN a regisztráció sikeres, THE Navigation_System SHALL átirányítani a User-t a bejelentkezési oldalra
9. WHEN a User rákattint a "Már van fiókom" linkre, THE Navigation_System SHALL átirányítani a bejelentkezési oldalra

### Requirement 3: Felhasználói bejelentkezés

**User Story:** Mint regisztrált felhasználó, szeretnék bejelentkezni az alkalmazásba, hogy hozzáférjek a jegyzeteimhez.

#### Acceptance Criteria

1. THE Login_Form SHALL megjeleníteni két beviteli mezőt: "Név" és "Jelszó"
2. THE Login_Form SHALL megjeleníteni egy "Bejelentkezés" gombot
3. THE Login_Form SHALL megjeleníteni egy "Még nincs fiókod" linket
4. WHEN a User kitölti mindkét mezőt és rákattint a "Bejelentkezés" gombra, THE Authentication_System SHALL ellenőrizni a Credential-eket
5. IF bármelyik mező üres, THEN THE Login_Form SHALL megjeleníteni egy hibaüzenetet
6. IF a Credential-ek érvénytelenek, THEN THE Login_Form SHALL megjeleníteni egy hibaüzenetet
7. WHEN a bejelentkezés sikeres, THE Authentication_System SHALL létrehozni egy Session-t
8. WHEN a Session létrejött, THE Navigation_System SHALL átirányítani a User-t a jegyzetek oldalra
9. WHEN a User rákattint a "Még nincs fiókod" linkre, THE Navigation_System SHALL átirányítani a regisztrációs oldalra

### Requirement 4: Információs oldal

**User Story:** Mint látogató, szeretnék többet megtudni az alkalmazásról, hogy eldönthessem, használni szeretném-e.

#### Acceptance Criteria

1. THE About_Page SHALL megjeleníteni az alkalmazás leírását
2. THE About_Page SHALL megjeleníteni egy visszanavigációs lehetőséget a Home_Page-re
3. THE About_Page SHALL Bootstrap stílusokat használni a megjelenítéshez

### Requirement 5: Jegyzetek kezelése

**User Story:** Mint bejelentkezett felhasználó, szeretnék jegyzeteket létrehozni, megtekinteni, szerkeszteni és törölni, hogy rendszerezni tudjam a gondolataimat.

#### Acceptance Criteria

1. WHILE a User be van jelentkezve, THE Notes_System SHALL megjeleníteni a User összes jegyzetét
2. THE Notes_System SHALL biztosítani egy "Új jegyzet" gombot vagy funkciót
3. WHEN a User rákattint az "Új jegyzet" gombra, THE Notes_System SHALL megjeleníteni egy jegyzet létrehozási űrlapot
4. THE Notes_System SHALL lehetővé tenni jegyzet címének és tartalmának megadását
5. WHEN a User elmenti az új jegyzetet, THE Notes_System SHALL tárolni a jegyzetet a User fiókjához kapcsolva
6. WHEN a User rákattint egy meglévő jegyzetre, THE Notes_System SHALL megjeleníteni a jegyzet részleteit
7. THE Notes_System SHALL biztosítani szerkesztési lehetőséget minden jegyzethez
8. THE Notes_System SHALL biztosítani törlési lehetőséget minden jegyzethez
9. WHEN a User törli a jegyzetet, THE Notes_System SHALL eltávolítani a jegyzetet a listából

### Requirement 6: Session kezelés

**User Story:** Mint bejelentkezett felhasználó, szeretném, hogy a munkamenetem biztonságosan kezelve legyen, és ki tudjak jelentkezni.

#### Acceptance Criteria

1. WHILE a Session aktív, THE Authentication_System SHALL megakadályozni a hozzáférést a bejelentkezési és regisztrációs oldalakhoz
2. WHILE nincs aktív Session, THE Authentication_System SHALL megakadályozni a hozzáférést a jegyzetek oldalhoz
3. THE Application SHALL biztosítani egy "Kijelentkezés" funkciót
4. WHEN a User kijelentkezik, THE Authentication_System SHALL megszüntetni a Session-t
5. WHEN a Session megszűnt, THE Navigation_System SHALL átirányítani a User-t a Home_Page-re

### Requirement 7: Adattárolás

**User Story:** Mint felhasználó, szeretném, hogy az adataim megmaradjanak az alkalmazás újraindítása után is.

#### Acceptance Criteria

1. THE Application SHALL tárolni a felhasználói fiókokat
2. THE Application SHALL tárolni a User jegyzeteit a fiókjához kapcsolva
3. WHEN az Application újraindul, THE Application SHALL betölteni a tárolt adatokat
4. THE Application SHALL biztosítani, hogy minden User csak a saját jegyzeteit láthassa

### Requirement 8: Reszponzív felhasználói felület

**User Story:** Mint felhasználó, szeretném, hogy az alkalmazás jól működjön különböző képernyőméreteken.

#### Acceptance Criteria

1. THE Application SHALL Bootstrap reszponzív grid rendszert használni
2. THE Application SHALL megfelelően megjelenni mobil eszközökön (320px szélesség felett)
3. THE Application SHALL megfelelően megjelenni tablet eszközökön
4. THE Application SHALL megfelelően megjelenni asztali számítógépeken

### Requirement 9: Űrlap validáció

**User Story:** Mint felhasználó, szeretnék azonnali visszajelzést kapni, ha hibásan töltöm ki az űrlapokat.

#### Acceptance Criteria

1. WHEN a User elhagyja egy kötelező mezőt üresen, THE Application SHALL megjeleníteni egy hibaüzenetet a mező mellett
2. THE Application SHALL vizuálisan jelezni a hibás mezőket (például piros keret)
3. THE Application SHALL vizuálisan jelezni a helyesen kitöltött mezőket (például zöld keret)
4. WHEN minden mező helyesen van kitöltve, THE Application SHALL engedélyezni az űrlap elküldését
5. THE Application SHALL megakadályozni az űrlap elküldését, ha vannak validációs hibák

## Notes

- Az alkalmazás jelenleg React 19.2.0, React Router DOM 7.13.1, és Bootstrap 5.3.8 verziókat használ
- A projekt Vite build eszközt használ
- Az adattárolás implementációja lehet localStorage alapú a kezdeti verzióban, később bővíthető backend API-val
- A jelszavak biztonságos tárolása kritikus fontosságú (hash-elés szükséges)
