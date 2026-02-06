This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📰 ¿Dónde están los datos de las noticias?

Los datos de las noticias están en: **`app/data/newsData.ts`**

```
app/
├── data/
│   ├── newsData.ts     ← AQUÍ ESTÁN TODOS LOS DATOS DE NOTICIAS
│   └── README.md       ← Documentación completa de la estructura de datos
└── components/
    └── secciones/
        └── Noticias.tsx  ← Componente que usa los datos
```

### Flujo de Datos:

1. **newsData.ts** → Define todos los datos de las noticias (contenido completo)
2. **Noticias.tsx** → Define qué noticias mostrar (solo tarjetas)
3. Cuando haces clic en una tarjeta → Se busca el contenido en newsData.ts
4. Si el ID existe → Muestra la noticia completa
5. Si el ID NO existe → Muestra mensaje de error (404)

Para más detalles, consulta: [`app/data/README.md`](./app/data/README.md)

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
