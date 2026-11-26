# Seedhi — learn step by step

> An accessible platform for underprivileged school kids to learn and develop their skills in their chosen subject.

*Seedhi* (सीढ़ी) is Hindi for "ladder". A learner picks a subject, then climbs it one short step at a time: read (or listen to) a lesson, practise with three questions, earn stars.

## Run it

It is a static site with no build step and no dependencies.

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>. To put it online, upload the folder to any static host (GitHub Pages, Netlify, a school server). Offline mode needs `http://localhost` or HTTPS.

## Who it is for, and what that changed

| Barrier the learner faces | What Seedhi does about it |
| --- | --- |
| Cheap or shared Android phone | Whole app is about 80 KB with no frameworks, fonts or images. Big touch targets, single-column layout. |
| Patchy or paid-per-MB internet | After the first visit every lesson works offline (service worker). Can be installed to the home screen. |
| English is not the first language | Full English and Hindi, switchable from any screen. English lessons are explained in Hindi. |
| Weak reading skills | Every lesson card has a **Listen** button (browser text-to-speech). Short sentences, everyday examples (roti, chai, shop discounts). |
| No email, no money, shared device | No account, no sign-up, no ads, no tracking. Progress is saved only on the device. |
| Low vision or motor difficulty | Text size control, high-contrast mode, full keyboard support, screen-reader labels, visible focus. |
| Low confidence | Wrong answers get an explanation, not a penalty. Retry is always allowed and only the best score counts. |

## Features

- **Chosen subject** — the learner picks a main subject (Maths, English, Science or Computers) and the home screen is built around it. Other subjects stay open to explore.
- **Steps** — 12 lessons, each with 3 short cards and a 3-question practice.
- **Feedback** — instant right/wrong with a one-line reason; marked with ✓/✗ and border style, not colour alone.
- **Motivation** — stars per step, day streak, six badges.
- **Settings** — language, text size, high contrast, name, erase progress.

## Accessibility checklist

- Semantic HTML: landmarks, one `h1` per screen, real buttons, links and form controls
- Skip link; focus moves to the new heading on every screen change
- Quiz feedback is announced through an `aria-live` region
- Touch targets are at least 44 px; text scales with the user's setting
- Colour is never the only signal; default palette meets WCAG AA contrast
- `lang` attribute follows the chosen language so screen readers pronounce it correctly
- Animations are limited to the progress bar and respect `prefers-reduced-motion`

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Page shell |
| `content.js` | **All text**: interface strings, subjects, lessons, questions, badges |
| `app.js` | Screens, navigation, quiz logic, saved progress, read-aloud |
| `styles.css` | Layout, colours, high-contrast and text-size themes |
| `sw.js` | Offline cache |
| `manifest.webmanifest`, `icon.svg` | Install to home screen |

### Add a lesson

Open `content.js`, copy any lesson object and edit it. Each text is a pair `['English', 'हिन्दी']`. `a` is the position of the right answer, counting from 0.

### Add a language

Add a new block to `STR` in `content.js`, extend each text pair with a third entry, and update the `tx()` helper and language buttons in `app.js`.

## Limitations and next steps

- Content is a small sample written for this project; it has not been reviewed by teachers or mapped to a syllabus.
- Hindi text should be checked by a native-speaking educator before real use.
- Read-aloud depends on the voices installed on the phone; some devices have no Hindi voice.
- Progress lives on one device. A teacher dashboard or sync would need a backend.
- Not yet tested with real learners or with assistive technology beyond keyboard and automated checks.
