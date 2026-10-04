# SUBVENTIA — SaaS de subvenciones España

## Stack
Next.js 14 (App Router) + Tailwind CSS + lucide-react. Estilo Shadcn UI.

## Desarrollo local
```bash
npm install
npm run dev
```
Abrir http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Deploy en <5 min (Vercel)
1. `git init && git add . && git commit -m "init subventia" && git push` a GitHub.
2. En Vercel: New Project → Import repo → Framework: Next.js.
3. Build command: `npm run build` · Output: `.next` (por defecto).
4. Deploy → URL pública en ~2 min.

## Deploy en Render
1. New → Web Service → conecta el repo.
2. Build: `npm install && npm run build` · Start: `npm start`.
3. Env: `NODE_VERSION=20`.
