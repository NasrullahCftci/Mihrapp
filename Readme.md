# Mihrapp
        
Project Title: Mihrapp Website – Promotional Site
Domain: mihrapp.com.tr
Language: Turkish only
Brand Tone & Identity: Modern, minimal and inspiring.
Color Palette & Style: Dominantly black (#000000) background with gold (#D4AF37) accents; crisp white or very light grey text for readability; overall look should be elegant, premium, clean.
Purpose: Single-page or minimal multi-page site used only for promotion, introduce the brand and the app, provide information, capture interest, and collect partnership leads. The “App Store” and “Google Play” icons should be visible, but as the app is not yet downloadable, show them with a “Coming Soon” label.

Pages / Sections:
* Hero Section: 
  * Headline: “Where Spirituality Meets Technology” (or Turkish equivalent)
  * Sub-headline: “With Mihrapp, track your worship, set spiritual goals and embrace your journey with modern support.”
  * Visual: Black-based background, subtle gold detailing, maybe an illustration or mockup of the mobile screen, or a stylised motif of a mihrab / mosque arch in gold.
  * CTA Buttons: 
    * “Explore the Collection” 
    * “Coming Soon – Download App” (with App Store & Play Store icons in gold lines)
* About / Our Story Section: 
  * Explain Mihrapp’s mission, vision and values: how you merge sacred tradition with modern design, how your app and brand help everyday users build spiritual routines.
  * Emphasize brand style: “Black & Gold” aesthetic; “modern minimal meets timeless heritage”.
  * Tone: professional yet warm and inspiring; address the user as “you” (in Turkish) but maintain refinement.
* Features / What We Offer Section: 
  * Prominent statements about the app’s core features (e.g.: worship tracking, goal setting, badge/reward system, daily inspirations). 
  * Use icons or small visuals.
  * Visuals: show mobile-screen mockups and brand imagery.
* Partnership / Collaboration Page or Section: 
  * Title: “Partner With Us” or “Business & Distribution Partnership”
  * Text: Why a partner would want to work with Mihrapp: unique brand in spiritual tech, premium visuals, modern audience, strong aesthetic.
  * Form or call to action: “Contact us for business inquiries” with email: bilgi@mihrapp.com.tr, phone: +90 554 131 24 51.
* Contact / Get In Touch Section: 
  * Email: bilgi@mihrapp.com.tr
  * Phone: +90 554 131 24 51
  * Simple form or just info with a “Send us a message” button.
* Footer: 
  * Brief text: “Stay updated with our news” and an email-sign-up field.
  * Social media icons (e.g. Instagram, LinkedIn)
  * Copyright line: “ 2025 Mihrapp”.

Design & UX guidelines
* Layout: single-page scrolling for initial version, with anchored sections
* Mobile first: ensure design is fully responsive and optimized for mobile devices.
* Typography: Use a bold modern sans serif for headings, a clean readable sans serif for paragraphs.
* Interactions: Subtle animations that enhance but do not distract.
* Color usage: Major background black, gold for accent elements like buttons, headers, icons; white/light grey for body text.
* Use of images: Ensure high-quality visuals, consistent filter/tone so that gold accents are visible.

Copywriting / Content tone
* Language: Turkish.
* Tone: Modern, calm, inspiring — not overly formal, but professional.
* Use second person “you” to engage
* Emphasize value proposition: “Dijital çağda ruhunuzu besleyin.”
* Include “Coming Soon” message for app download buttons.

Reference sites: https://ezanvaktipro.com/ and https://halalguide.io/ 

Create a modern promotional website in Turkish for the brand ‘Mihrapp’, domain mihrapp.com.tr, using black and gold as primary colors, with the structure and content guidelines above. The site is to introduce the app and brand, not e-commerce, and should look sleek, minimal and inspiring. Provide headings, copy, visuals placeholders, buttons, and the specified sections. Use the two reference websites for layout inspiration but ensure original content tailored to Mihrapp.

Made with Floot.

# Instructions

For security reasons, the `env.json` file is not pre-populated — you will need to generate or retrieve the values yourself.  

For **JWT secrets**, generate a value with:  

```
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then paste the generated value into the appropriate field.  

For the **Floot Database**, download your database content as a pg_dump from the cog icon in the database view (right pane -> data -> floot data base -> cog icon on the left of the name), upload it to your own PostgreSQL database, and then fill in the connection string value.  

**Note:** Floot OAuth will not work in self-hosted environments.  

For other external services, retrieve your API keys and fill in the corresponding values.  

Once everything is configured, you can build and start the service with:  

```
npm install -g pnpm
pnpm install
pnpm vite build
pnpm tsx server.ts
```
