# Clash Royale Pakli Építő – Frontend

> Clash Royale-ihlette webalkalmazás, ahol regisztrált felhasználók egyedi paklikat építhetnek a játék kártyáiból, kezelhetik fiókjukat és böngészhetik a kártyákat.

---

## Készítette

- Matlag Máté
- Túri Dominik
- [GitHub repo](https://github.com/Elitkex/ProjectFrontend)

---

### Fejlesztési környezet

- **React** + **Vite**
- **React Router DOM**
- **Bootstrap**

## Backend

A backend Node.js alapú, Express keretrendszerrel és MySQL adatbázissal működik. Feladata kommunikációs hidat létesíteni a frontend és az adatbázis között.

- [GitHub repo](https://github.com/Elitkex/ProjectBackend)

## Frontend

A frontend React alapú SPA (Single Page Application). Feladata kommunikációs hidat létesíteni a felhasználó és a backend között.

### Telepítés és futtatás

```bash
git clone https://github.com/Elitkex/ProjectFrontend
cd ProjectFrontend
npm install
npm run dev
```

Az alkalmazás alapértelmezetten a `http://localhost:5173` címen fut.

---

### Környezeti változók

Hozz létre egy `.env` fájlt a gyökérkönyvtárban:

```
VITE_API_URL=http://localhost:3000
```

---

### Mappa struktúra

```
ProjectFrontend/
├── src/
│   ├── api.js              # Backend API hívások
│   ├── main.jsx            # Router és route definíciók
│   ├── assets/             # Képek, ikonok
│   ├── components/         # Újrafelhasználható komponensek
│   │   ├── AddDeckButton.jsx
│   │   ├── BackButton.jsx
│   │   ├── CardSlot.jsx
│   │   ├── DeckGrid.jsx
│   │   ├── DeletePopup.jsx
│   │   ├── DescriptionBox.jsx
│   │   ├── HomeButtons.jsx
│   │   ├── InfoButton.jsx
│   │   ├── LoginButton.jsx
│   │   ├── LogoKep.jsx
│   │   ├── Popup.jsx
│   │   ├── ProfileAvatar.jsx
│   │   ├── ProfileCard.jsx
│   │   ├── ProfileIcon.jsx
│   │   ├── ProfileInfoRow.jsx
│   │   ├── RememberMe.jsx
│   │   ├── SignupButton.jsx
│   │   └── Textbox.jsx
│   └── pages/
│       ├── CardSelectionPage.jsx
│       ├── DeckPage.jsx
│       ├── DescriptionPage.jsx
│       ├── FirstPage.jsx
│       ├── HomePage.jsx
│       ├── LoginPage.jsx
│       ├── ProfilePage.jsx
│       ├── RegistrationPage.jsx
│       └── SettingsPage.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

### Oldalak

1. #### `/` – Főoldal

   Főoldal: Sign-up és Log-in gombok, info gomb a leíráshoz.
   
   ![](https://snipboard.io/XeDtzh.jpg)

3. #### `/signup` – Regisztráció

   Regisztrációs oldal: felhasználónév, email, jelszó és jelszó megerősítés megadása. Sikeres regisztráció után átirányít a bejelentkezési oldalra.

   ![](https://snipboard.io/8ZOzQI.jpg)

5. #### `/login` – Bejelentkezés

   Bejelentkezési oldal: email és jelszó megadása, Remember me funkció az adatok mentéséhez.

   ![](https://snipboard.io/7OKlPA.jpg)

7. #### `/home` – Főmenü

   Főmenü: Deck Builder, Edit Profile és Log-out gombok. Jobb alsó sarokban a bejelentkezett felhasználó neve látható.

   ![](https://snipboard.io/G8O9Vf.jpg)

9. #### `/deck` – Pakli építő

   Pakli építő: max 2 pakli létrehozása, paklinként 8 kártyahely. Kártyára kattintva megnyílik a kártya választó. Statisztikák: átlagos elixír, sebzés, támadási sebesség.
   
   ![](https://snipboard.io/kXaYcJ.jpg)

11. #### `/cardselection` – Kártya választó

   Kártya választó: az összes Clash Royale kártya rácsban megjelenítve képpel, névvel és elixír költséggel. A már pakliban lévő kártyák szürkítve jelennek meg.
   
   ![](https://snipboard.io/iZJFPO.jpg)

11. #### `/profile` – Profil

   Profil oldal: felhasználónév, email és ID megtekintése. Edit Profile gombbal átnavigál a beállításokra.

   ![](https://snipboard.io/l9Pp1R.jpg)

11. #### `/settings` – Beállítások

   Beállítások: felhasználónév, email és jelszó módosítása, fiók törlése megerősítő popuppal.

   ![](https://snipboard.io/Dk4QX0.jpg)

11. #### `/description` – Leírás

   Az alkalmazás leírása.

   ![](https://snipboard.io/5dwSq8.jpg)

---

### Szerepkörök

1. **Bejelentkezett felhasználó**
   - Pakli építése és kezelése
   - Kártyák böngészése
   - Profil megtekintése és szerkesztése
   - Fiók törlése

2. **Vendég**
   - Főoldal megtekintése
   - Leírás olvasása
   - Regisztráció / bejelentkezés

---

### Használt package-ek

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [bootstrap](https://www.npmjs.com/package/bootstrap)
- [vite](https://www.npmjs.com/package/vite)

---

### Reszponzivitás

Az alkalmazás mobil és asztali nézetben is használható. A méretek `min()` és `vw` alapú értékekkel vannak meghatározva.

---

### Tesztelés

A projekt manuálisan lett tesztelve böngészőben, mobil nézetben és különböző képernyőméreteken.

---

### Továbbfejlesztési lehetőség

- React Native átírás teljes mobil támogatáshoz
- Paklik mentése és megosztása más felhasználókkal
- Kártya statisztikák részletesebb megjelenítése
- Értesítések

---

### Használt eszközök

- [VS Code](https://code.visualstudio.com)
- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Bootstrap](https://getbootstrap.com)
- [Postman](https://www.postman.com)
- [GitHub](https://github.com)
- [phpMyAdmin](https://www.phpmyadmin.net)

 ### Backend

 - [Github repo](https://github.com/Elitkex/ProjectBackend)
