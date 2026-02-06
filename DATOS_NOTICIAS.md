# 📰 GUÍA RÁPIDA: ¿DÓNDE ESTÁN LOS DATOS DE LAS NOTICIAS?

## 🎯 RESPUESTA RÁPIDA

Los datos están en: **`app/data/newsData.ts`**

## 📂 Estructura de Archivos

```
web_instituto/
└── app/
    ├── data/
    │   ├── newsData.ts           ← ⭐ AQUÍ ESTÁN LOS DATOS ⭐
    │   └── README.md             ← Documentación completa
    │
    └── components/
        └── secciones/
            └── Noticias.tsx      ← Usa los datos de newsData.ts
```

## 🔍 ¿QUÉ CONTIENE newsData.ts?

### 1️⃣ newsData (Objeto con todas las noticias)

Este objeto contiene el **contenido completo** de todas las noticias:

```typescript
export const newsData = {
  'jefatura-estudios': {
    id: 'jefatura-estudios',
    title: 'Comunicado de Jefatura de Estudios',
    imageSrc: 'https://images.unsplash.com/...',
    imageAlt: 'Jefatura de Estudios',
    content: 'La Jefatura de Estudios del IES...'
  },
  'plan-igualdad': {
    id: 'plan-igualdad',
    title: 'Plan de Igualdad y Escuela Espacio de Paz',
    imageSrc: 'https://images.unsplash.com/...',
    imageAlt: 'Plan de Igualdad',
    content: 'El IES Cura Valera continúa...'
  },
  // ... más noticias
}
```

**Actualmente hay 5 noticias:**
1. ✅ `jefatura-estudios`
2. ✅ `plan-igualdad`
3. ✅ `trofeo-director`
4. ✅ `educacion-adultos`
5. ✅ `galeria-multimedia`

### 2️⃣ notFoundNews (Noticia de error)

Esta noticia se muestra cuando buscas una que NO existe:

```typescript
export const notFoundNews = {
  id: 'not-found',
  title: 'NADA QUE MOSTRAR',
  imageSrc: '/404.png',
  imageAlt: 'Contenido no encontrado',
  content: 'Lo sentimos, la noticia que buscas no está disponible...'
}
```

### 3️⃣ getNewsById (Función para obtener noticias)

```typescript
export function getNewsById(id: string) {
  return newsData[id] || notFoundNews;
}
```

**Ejemplos:**

```javascript
// ✅ Esta noticia SÍ existe
getNewsById('plan-igualdad')
// Devuelve → { id: 'plan-igualdad', title: 'Plan de Igualdad...', ... }

// ❌ Esta noticia NO existe
getNewsById('noticia-inexistente')
// Devuelve → { id: 'not-found', title: 'NADA QUE MOSTRAR', ... }
```

## 🔄 ¿CÓMO SE CONECTAN LOS DATOS?

### Paso 1: Lista de tarjetas en Noticias.tsx

```typescript
const newsItems = [
  {
    id: 'jefatura-estudios',  // ← Este ID debe existir en newsData.ts
    icon: '📋',
    title: 'Jefatura de Estudios',
    description: 'Información y comunicados...'
  },
  {
    id: 'noticia-inexistente',  // ← Este ID NO existe en newsData.ts
    icon: '❓',
    title: 'Noticia de Prueba',
    description: 'Esta noticia no existe...'
  }
]
```

### Paso 2: Usuario hace clic en una tarjeta

```typescript
const handleOpenModal = (newsId) => {
  setSelectedNews(newsId);
  setModalOpen(true);
}
```

### Paso 3: Se buscan los datos completos

```typescript
const newsDetail = selectedNews ? getNewsById(selectedNews) : null;
```

### Paso 4: Se muestran en el modal

```typescript
<Modal
  title={newsDetail.title}
  imageSrc={newsDetail.imageSrc}
  imageAlt={newsDetail.imageAlt}
  content={newsDetail.content}
/>
```

## 🎬 EJEMPLO COMPLETO: "Noticia de Prueba"

1. **En Noticias.tsx:** Se define la tarjeta con `id: 'noticia-inexistente'`

2. **Usuario hace clic** en "Noticia de Prueba"

3. **Se llama a:** `getNewsById('noticia-inexistente')`

4. **En newsData.ts:** Se busca 'noticia-inexistente' en newsData
   - ❌ No se encuentra
   - Se devuelve `notFoundNews`

5. **Se muestra el modal con:**
   - Título: "NADA QUE MOSTRAR"
   - Imagen: /404.png
   - Contenido: "Lo sentimos, la noticia que buscas no está disponible..."

## ✅ RESUMEN

| Archivo | Qué contiene | Función |
|---------|-------------|---------|
| **newsData.ts** | TODOS los datos de las noticias | Almacena el contenido completo |
| **Noticias.tsx** | Lista de tarjetas a mostrar | Define qué noticias mostrar |
| **getNewsById()** | Función de búsqueda | Encuentra la noticia o devuelve error |
| **notFoundNews** | Noticia de error 404 | Se muestra cuando no existe la noticia |

## 🚀 ¿Quieres agregar una nueva noticia?

1. Abre `app/data/newsData.ts`
2. Agrega tu noticia al objeto `newsData`
3. Abre `app/components/secciones/Noticias.tsx`
4. Agrega la tarjeta a `newsItems` con el mismo ID

**¡Y listo!** La noticia aparecerá automáticamente.

---

**📚 Para más detalles:** Ver [`app/data/README.md`](./app/data/README.md)
