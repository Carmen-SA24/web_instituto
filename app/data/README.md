# Documentación de Datos de Noticias

## 📍 Ubicación de los Datos

Los datos de las noticias están en el archivo: **`app/data/newsData.ts`**

## 📊 Estructura de Datos

### 1. newsData (Objeto principal con todas las noticias)

Este es el objeto que contiene TODOS los datos de las noticias del instituto:

```typescript
export const newsData: Record<string, NewsDetail> = {
  'jefatura-estudios': { ... },
  'plan-igualdad': { ... },
  'trofeo-director': { ... },
  'educacion-adultos': { ... },
  'galeria-multimedia': { ... },
}
```

Cada noticia tiene:
- **id**: Identificador único
- **title**: Título de la noticia
- **imageSrc**: URL de la imagen
- **imageAlt**: Texto alternativo de la imagen
- **content**: Contenido completo de la noticia

### 2. notFoundNews (Noticia de error)

Esta es la noticia que se muestra cuando se busca una noticia que NO existe:

```typescript
export const notFoundNews: NewsDetail = {
  id: 'not-found',
  title: 'NADA QUE MOSTRAR',
  imageSrc: '/404.png',
  imageAlt: 'Contenido no encontrado',
  content: 'Lo sentimos, la noticia que buscas no está disponible...'
}
```

### 3. getNewsById(id) (Función para obtener noticias)

Esta función busca una noticia por su ID:

```typescript
export function getNewsById(id: string): NewsDetail {
  return newsData[id] || notFoundNews;
}
```

**Cómo funciona:**
- Si el ID existe en `newsData` → devuelve la noticia completa
- Si el ID NO existe → devuelve `notFoundNews` (mensaje de error)

## 🔄 Flujo de Datos

1. **Noticias.tsx** (componente) define una lista de tarjetas con IDs:
   ```typescript
   const newsItems = [
     { id: 'jefatura-estudios', ... },
     { id: 'plan-igualdad', ... },
     { id: 'noticia-inexistente', ... },  // ← Este NO existe en newsData
   ]
   ```

2. Cuando el usuario hace clic en una tarjeta, se llama a `getNewsById(id)`

3. `getNewsById` busca el ID en `newsData.ts`:
   - ✅ **ID existe** → Muestra la noticia completa
   - ❌ **ID NO existe** → Muestra `notFoundNews` (error 404)

## 🎯 Ejemplo: Noticia de Prueba

La tarjeta **"Noticia de Prueba"** tiene `id: 'noticia-inexistente'`

Este ID **NO existe** en `newsData`, por lo tanto:
- Cuando haces clic en ella
- `getNewsById('noticia-inexistente')` busca en newsData
- No lo encuentra
- Devuelve `notFoundNews`
- Se muestra el mensaje: **"NADA QUE MOSTRAR"**

## 📝 Cómo Agregar una Nueva Noticia

Para agregar una nueva noticia:

1. Abre `app/data/newsData.ts`
2. Agrega una nueva entrada en el objeto `newsData`:

```typescript
export const newsData: Record<string, NewsDetail> = {
  // ... noticias existentes ...
  
  'nueva-noticia': {
    id: 'nueva-noticia',
    title: 'Mi Nueva Noticia',
    imageSrc: 'https://ejemplo.com/imagen.jpg',
    imageAlt: 'Descripción de la imagen',
    content: 'Contenido completo de la nueva noticia...'
  },
}
```

3. Luego en `app/components/secciones/Noticias.tsx`, agrega la tarjeta:

```typescript
const newsItems = [
  // ... items existentes ...
  
  {
    id: 'nueva-noticia',  // ← Mismo ID que en newsData.ts
    icon: '📰',
    title: 'Mi Nueva Noticia',
    description: 'Descripción breve para la tarjeta',
  },
]
```

¡Y listo! La nueva noticia aparecerá en la página de noticias.
