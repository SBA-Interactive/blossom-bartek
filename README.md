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

---

## Prezentacja "klik-po-kliku" dla klienta

### Strona główna `/`

#### 1. Hero (baner powitalny)
- **Co widzi klient:** Duży baner wideo z butelką perfum w tle
- **Tekst główny:** "Fresh Scents from Nature's Gift"
- **Podtytuł:** "Discover our collection of natural, eco-friendly perfumes crafted from upcycled fruit peels..."
- **Liczby (animowane):** 10+ Safe Age, 100% Natural, Eco Friendly
- **Przyciski:**
  - "Shop Now" → `/products`
  - "Learn More" → `/about`

#### 2. Features (Dlaczego Blossom?)
- **4 karty z ikonami:**
  - 🥬 100% Natural – "Made from real fruit peels..."
  - ♻️ Eco-Friendly – "We upcycle fruit peels..."
  - ✨ Fresh & Modern – "Contemporary fragrances..."
  - ❤️ Premium Quality – "Each fragrance is carefully crafted..."

#### 3. ProductShowcase (Nasza kolekcja)
- **Nagłówek:** "Our Signature Collection"
- **3 produkty** z kartami (zdjęcie, nazwa, cena, przycisk)
- **Przycisk:** "View All Products" → `/products`

#### 4. Newsletter
- **Tło:** Ciemnozielony
- **Formularz:** email input + "Subscribe"
- **Po wysłaniu:** "Thank you for subscribing!"

#### 5. About (O nas) - embedded
- Nagłówek: "From Fruit Peels to Fresh Scents"
- Statystyki: 100% Natural, 10+ Safe, 0% Chemicals, 100% Eco
- Misja + zdjęcie
- Wartości (3 karty)
- Oś czasu (2024→2025→2026)
- Opinie klientów (3 referencje)
- Sekcja cenowa

---

### Nawigacja globalna

| Element | Lokalizacja | Akcja |
|---------|-------------|-------|
| Logo | Góra | Klik → `/` |
| Menu (Desktop) | Header | Products, About, Contact |
| Menu (Mobile) | Hamburger | Rozwijane menu |
| Koszyk | Header | `/cart` |
| Wishlist | Header | `/wishlist` |

---

### Inne trasy do pokazania

| Trasa | Co pokazać |
|------|-----------|
| `/products` | Siatka produktów, filtry, sortowanie |
| `/product/:id` | Szczegóły perfum, dodaj do koszyka, warianty |
| `/cart` | Produkty w koszyku, podsumowanie, Checkout |
| `/checkout` | Formularz zamówienia, dane |
| `/configurator` | Tworzenie własnych perfum krok po kroku |
| `/compare` | Porównanie 2-4 produktów |
| `/pricing` | Pakiety i ceny |
| `/about` | Pełna strona "O nas" |
| `/contact` | Formularz kontaktowy |
| `/wishlist` | Zapisane produkty |