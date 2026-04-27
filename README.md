# Clash Royale Pakli Építő – Frontend

Clash Royale-ihlette webalkalmazás frontendje, ahol a felhasználók paklikat építhetnek, kezelhetik fiókjukat és böngészhetik a kártyákat.

## Technológiák

- **React** + **Vite**
- **React Router DOM** – oldalak közötti navigáció
- **Bootstrap** – reszponzív layout

## Funkciók

- Regisztráció és bejelentkezés (Remember me funkcióval)
- Pakli építő – max 2 pakli, paklinként 8 kártya
- Kártya választó – összes Clash Royale kártya képpel, elixír költséggel
- Pakli statisztikák – átlagos elixír, sebzés, támadási sebesség
- Profil oldal – felhasználónév, email, ID megtekintése
- Beállítások – felhasználónév, email, jelszó módosítása, fiók törlése
- Reszponzív design – mobil és asztali nézeten is működik

## Oldalak

| Útvonal | Leírás |
|---|---|
| `/` | Főoldal – Sign-up / Log-in gombok |
| `/signup` | Regisztrációs oldal |
| `/login` | Bejelentkezési oldal |
| `/home` | Főmenü |
| `/deck` | Pakli építő |
| `/cardselection` | Kártya választó |
| `/profile` | Profil megtekintése |
| `/settings` | Fiók beállítások |
| `/description` | Az alkalmazás leírása |

## Telepítés

```bash
git clone https://github.com/Elitkex/ProjectFrontend
cd ProjectFrontend
npm install
npm run dev
```

Az alkalmazás alapértelmezetten a `http://localhost:5173` címen fut.

## Környezeti változók

Hozz létre egy `.env` fájlt a gyökérkönyvtárban:

```
VITE_API_URL=http://localhost:3000
```

## Projekt struktúra

```
src/
├── api.js              # Backend API hívások
├── main.jsx            # Router és route definíciók
├── assets/             # Képek, ikonok
├── components/         # Újrafelhasználható komponensek
│   ├── AddDeckButton.jsx
│   ├── BackButton.jsx
│   ├── CardSlot.jsx
│   ├── DeckGrid.jsx
│   ├── DeletePopup.jsx
│   ├── DescriptionBox.jsx
│   ├── HomeButtons.jsx
│   ├── InfoButton.jsx
│   ├── LoginButton.jsx
│   ├── LogoKep.jsx
│   ├── Popup.jsx
│   ├── ProfileAvatar.jsx
│   ├── ProfileCard.jsx
│   ├── ProfileIcon.jsx
│   ├── ProfileInfoRow.jsx
│   ├── RememberMe.jsx
│   ├── SignupButton.jsx
│   └── Textbox.jsx
└── pages/              # Oldalak
    ├── CardSelectionPage.jsx
    ├── DeckPage.jsx
    ├── DescriptionPage.jsx
    ├── FirstPage.jsx
    ├── HomePage.jsx
    ├── LoginPage.jsx
    ├── ProfilePage.jsx
    ├── RegistrationPage.jsx
    └── SettingsPage.jsx
```

## Kapcsolódó repó

Backend: [https://github.com/Elitkex/ProjectBackend](https://github.com/Elitkex/ProjectBackend)
