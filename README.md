# Jayateja Alugolu — Portfolio

Next.js, TypeScript and Tailwind CSS. A dark indigo interface with violet/cyan accents, overlapping chapter transitions, a small PNG portrait, and the original system.profile panel. No hero summary block.

## Start

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Production check:

```bash
npm run build
npm start
```

## Personal assets

- Put your actual portrait at `public/profile.png`. It renders as a 64px circle just before your name. The initials JA appear if the asset is absent. No personal photo is bundled.
- The resume download serves `public/Jayateja_Alugolu_Resume.pdf` and saves it with the same filename.
- Replace `https://yourdomain.com` in `lib/site-data.ts` before deployment. Canonical metadata, sitemap, robots and Person JSON-LD use that value.

## Retained sections

Engineering roles, filtered projects, career journey, UNB master’s and all coursework, recruiter Q&A, full skills matrix, contact form, hobbies, persistent social links, terminal and SEO assets. Infosys shows the promotion to Senior Software Engineer. LightX is a completed full-time contract ending May 2026. No GPA is displayed.

## Transitions and accessibility

Chapters pin and overlap as you move through the site, subtly receding behind the next chapter. Tall sections pin only after their content has been read. A fixed chapter dock provides direct navigation, including Skills and Contact. All content stays in the document for search engines and keyboard users. Reduced-motion preference switches to ordinary non-sticky sections and disables animations. No wheel/touch events are blocked. Hero profile panel remains visible on mobile.

## Contact form

Name, email and message are validated. A valid entry opens the visitor’s email application with an addressed draft containing all three fields. The visitor sends the email themselves. This site does not claim server delivery or discard the entered message. For server-side delivery, connect your own email service and replace the `mailto:` handler in `components/contact.tsx`.

## Terminal

`help`, `about`, `roles`, `skills`, `projects`, `journey`, `education`, `why-lightx`, `hobbies`, `contact`, `clear`.

The dialog supports Escape, focus trapping and focus restoration. Both the top navigation and hero panel launch it.

## Content and code

- `lib/site-data.ts`: personal content and portfolio data
- `components/hero.tsx`: name, small portrait, actions and restored system.profile
- `components/scene-deck.tsx`: chapter pinning, depth effect and navigation
- `components/skills.tsx`: categorized skill matrix
- `components/contact.tsx`: form and email draft
- `components/terminal-panel.tsx`: terminal commands
- `app/globals.css`: dark visual theme and motion
- `app/layout.tsx`: metadata and Person JSON-LD

Project source links without a provided repository currently lead to your GitHub profile. Context links lead to the relevant journey/contact section; no unverified live demos are invented. Replace these in `lib/site-data.ts` when public URLs are available.

## Deployment

Push to GitHub and import into Vercel (Next.js is detected automatically), or import into Netlify with its detected Next.js configuration. Set your final domain in the data file first. Submit `/sitemap.xml` to Google Search Console after launch. Metadata cannot guarantee a search rank.
