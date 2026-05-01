# Blossom Bartek - Website Presentation

## HOW TO PRESENT THE WEBSITE TO A CLIENT

### STEP 1: Go to homepage (/)

**What client sees:**
- Large video background with perfume bottle
- Headline: "Fresh Scents from Nature's Gift"
- Subtitle: "Discover our collection..."
- 3 animated numbers: 10+ Safe Age, 100% Natural, Eco Friendly
- 2 buttons: "Shop Now" and "Learn More"

---

### STEP 2: Click "Shop Now"

→ Goes to `/products`

**What client sees:**
- Headline: "Explore Our Fragrances"
- Search bar
- Filter button
- Sorting (Newest, Price, Name)
- Product grid (6 products)

---

### STEP 3: Scroll down on /products

**What client sees:**
- Product cards with images, names, prices
- Buttons: Add to wishlist, Compare, Details, Buy

---

### STEP 4: Click any product (e.g., "Citrus Bloom")

→ Goes to `/product/citrus-bloom`

**What client sees:**
- Product image
- Name and price
- Fragrance notes (top, heart, base)
- Description
- Sizes (30ml, 50ml, 100ml)
- Buttons: Add to Cart, Add to Wishlist

---

### STEP 5: Click "Add to Cart"

**What client sees:**
- Notification "Added to cart"
- Cart icon number increases

---

### STEP 6: Click cart icon in header

→ Goes to `/cart`

**What client sees:**
- List of products in cart
- Summary (subtotal, shipping, Total)
- "Checkout" button
- Free shipping progress (€50 = free)

---

### STEP 7: Click "Checkout"

→ Goes to `/checkout`

**What client sees:**
- Order form
- Customer data (name, email, phone)
- Delivery address
- Payment method
- Order summary
- "Place Order" button

---

### STEP 8: Return to homepage (click Logo)

→ Goes to `/`

---

### STEP 9: Scroll down on homepage

**What client sees:**
- Section "Why Choose Blossom?"
- 4 cards: 100% Natural, Eco-Friendly, Fresh & Modern, Premium Quality

---

### STEP 10: Scroll further

**What client sees:**
- Section "Our Signature Collection"
- 3 product cards
- "View All Products" button

---

### STEP 11: Scroll further

**What client sees:**
- Section "Stay in the Loop" (Newsletter)
- Email form + Subscribe

---

### STEP 12: Enter email and click "Subscribe"

**What client sees:**
- Message "Thank you for subscribing!"

---

### STEP 13: Scroll more

**What client sees:**
- Section "From Fruit Peels to Fresh Scents" (About)
- Statistics: 100% Natural, 10+ Safe, 0% Chemicals
- Mission
- 3 values
- Timeline (2024→2025→2026)
- Customer reviews

---

### STEP 14: Click "Learn More" (in Hero)

→ Goes to `/about`

**What client sees:**
- Full "About us" page

---

### STEP 15: Click "Contact" in menu

→ Goes to `/contact`

**What client sees:**
- Contact form
- Contact details

---

### STEP 16: Click "Pricing" in menu

→ Goes to `/pricing`

**What client sees:**
- Subscription packages
- Prices

---

### STEP 17: Click "Configure Your Own!" on /products

→ Goes to `/configurator`

**What client sees:**
- Perfume configurator step by step
- Choose notes, bottle, size

---

## WHAT TO SAY DURING PRESENTATION

### Hero:
> "This is our brand Blossom - natural perfumes made from fruit peels. No chemicals, for kids aged 10+."

### Products:
> "This is our collection of 6 unique scents. Each different, each natural."

### Product Detail:
> "You can choose the size and add to cart with one click."

### Cart:
> "The cart shows what you chose. Over €50 = free shipping."

### Checkout:
> "Simple order - data, address, payment and done."

### About:
> "Our mission - zero chemicals, 100% natural, eco packaging."

### Configurator:
> "You can create your own scent - choose notes, bottle, size."

---

## OTHER ROUTES

| Route | What to show |
|-------|------------|
| `/compare` | Product comparison (up to 4) |
| `/wishlist` | Saved products |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/cookies` | Cookie policy |

---

### Running

```bash
bun install
bun run dev
```
