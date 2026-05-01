# Blossom Bartek - Strona Perfumerii

## Sekcje strony głównej (`/`)

### 1. Hero
- Duży baner powitalny z nagłówkiem
- Tło wideo (hero.webm)
- Komponent: `src/components/Hero`

### 2. Features
- Sekcja kluczowych cech produktów/marki
- Komponent: `src/components/Features`

### 3. ProductShowcase
- Siatka 4 polecanych produktów
- Loading state i obsługa błędów
- Komponent: `src/components/ProductShowcase`

### 4. Newsletter
- Formularz zapisu do newslettera
- Komponent: `src/components/Newsletter`

### 5. AboutPage
- Treść "O nas" na stronie głównej
- Komponent: `src/container/About`

---

## Wszystkie trasy (routes)

| Ścieżka | Komponent | Opis |
|--------|----------|------|
| `/` | `Home` | Strona główna |
| `/products` | `Products` | Katalog produktów |
| `/product/:productId` | `ProductDetail` | Szczegóły produktu |
| `/cart` | `Cart` | Koszyk |
| `/checkout` | `Checkout` | Zamówienie |
| `/wishlist` | `Wishlist` | Lista życzeń |
| `/compare` | `Compare` | Porównanie produktów |
| `/configurator` | `Configurator` | Konfigurator perfum |
| `/pricing` | `Pricing` | Cennik |
| `/about` | `About` | O nas |
| `/contact` | `Contact` | Kontakt |
| `/privacy` | `Privacy` | Polityka prywatności |
| `/terms` | `Terms` | Regulamin |
| `/cookies` | `Cookies` | Polityka cookie |

---

## Struktura projektu

```
src/
├── routes/          # Definicje tras (TanStack Route)
├── container/      # Główne komponenty stron
├── components/     # Komponenty UI
├── constants/      # Stałe konfiguracyjne
├── hooks/          # Custom hooks
├── store/          # Stan (zustand)
└── lib/            # Narzędzia
```

## Tech stack

- React + TypeScript
- TanStack Router
- Zustand (state management)
- CSS/Tailwind
- Vite

## Uruchomienie

```bash
bun install
bun run dev
```