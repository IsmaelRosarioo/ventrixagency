# Local hosting guide for Ventrix

## Fast test mode

Use this during development:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production-like local hosting

Use this when you want the local version to behave closer to the online version:

```bash
npm install
npm run build
npm start
```

## Share on your local network

If you want other devices on your Wi‑Fi to test it, run:

```bash
npm run dev -- --hostname 0.0.0.0
```

Then open it from another device using your computer's local IP, like:

```text
http://192.168.1.50:3000
```

## Windows startup option

You can later run this with PM2, NSSM, or Task Scheduler if you want the local copy always available on your machine.
