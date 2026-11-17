# Cookie Jar

Keep your wins and the kind words people have said to you, your cookies, in a jar. Open it when you need to. Private, in your browser, no sign-in.

**Open the jar:** https://aldonakap.github.io/cookie-jar/

## What it does

- **Put a cookie in.** A compliment, a result, a thank-you, something you are proud of. You can add who said it, when, and what kind of cookie it is. All three are optional.
- **Take a cookie.** The jar hands you one at random.
- **See everything.** All your cookies on one page, newest first, with filters by kind.
- **Save a copy of your jar.** One small backup file that you keep yourself.
- **Put saved cookies back in.** Load a backup file after losing your jar, on a new device, or when someone sends you their cookies. Cookies are added to the jar. Nothing is replaced.

## Privacy

Cookie Jar has no server, no accounts and no tracking.

- Everything you add is stored by your own browser, on your own device.
- Nothing you write is sent anywhere. The page does not contact any other service, and its fonts are served from this site.
- The app is one readable file, `index.html`. Anyone can check these claims.

Two things follow from this design:

- **The jar lives in one browser on one device.** If you clear your browser data, the jar is emptied. Save a backup file from time to time.
- **To move your jar** to another device, save a backup there and load it here.

A jar often holds other people's words. Keep it for yourself unless they would be happy to see it shared.

## Put it on your phone

No app store is needed. Open the jar's address in your phone's browser, then:

- **iPhone:** in Safari, tap the Share button, then "Add to Home Screen".
- **Android:** in Chrome, tap the menu, then "Add to Home screen" or "Install app".

The jar then opens from its own icon, full screen, and works without an internet connection. A jar on your phone is separate from a jar on your computer. Use a backup file to move cookies between them.

## Use it without the website

Download this repository (Code, then Download ZIP), unzip it, and double-click `index.html`. It works offline.

## Planned

- Gifting a filled jar to someone else, by link or by file.
- A printable version, for a real jar with paper slips.

## How it is built

Plain HTML, CSS and JavaScript. The app is `index.html`. Three small extras make it installable on a phone: `manifest.webmanifest` (name and icon), `icons`, and `sw.js` (keeps a copy of the app's files on the device so it opens offline; it never touches your cookies). There is nothing to build. Your cookies are kept in the browser's local storage under the key `cookie-jar-v1`. A backup is a JSON file.

To run it on your own address, copy all the files to any web host that uses https.

## Licence

The code is under the MIT licence (see `LICENSE`).

The typefaces are Bricolage Grotesque and Newsreader, both under the SIL Open Font License 1.1. Their licences are in the `fonts` folder.
