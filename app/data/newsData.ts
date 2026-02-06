export interface NewsDetail {
  id: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  content: string;
}

export const newsData: Record<string, NewsDetail> = {
  'jefatura-estudios': {
    id: 'jefatura-estudios',
    title: 'Comunicado de Jefatura de Estudios',
    imageSrc: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop',
    imageAlt: 'Jefatura de Estudios',
    content: `La Jefatura de Estudios del IES Cura Valera informa sobre las nuevas medidas organizativas para el segundo trimestre del curso académico.

Se han establecido nuevos horarios de atención a familias los martes y jueves de 10:00 a 12:00 horas. Para cualquier consulta relacionada con el seguimiento académico, pueden solicitar cita previa a través del correo electrónico o llamando a secretaría.

Recordamos que es importante mantener una comunicación fluida entre el centro y las familias para el mejor desarrollo académico de nuestro alumnado.`
  },
  'plan-igualdad': {
    id: 'plan-igualdad',
    title: 'Plan de Igualdad y Escuela Espacio de Paz',
    imageSrc: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop',
    imageAlt: 'Plan de Igualdad',
    content: `El IES Cura Valera continúa con su compromiso en la promoción de la igualdad de género y la convivencia pacífica a través de diversas actividades programadas.

Durante este trimestre se llevarán a cabo talleres de sensibilización sobre igualdad, charlas sobre prevención de la violencia de género y actividades de mediación escolar.

El Plan de Igualdad busca crear un entorno educativo inclusivo donde todo el alumnado tenga las mismas oportunidades, independientemente de su género, origen o condición.`
  },
  'trofeo-director': {
    id: 'trofeo-director',
    title: 'XXIV Trofeo Director - Competición Deportiva',
    imageSrc: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=400&fit=crop',
    imageAlt: 'Trofeo Director',
    content: `Ya está en marcha la XXIV edición del tradicional Trofeo Director, la competición deportiva más esperada del año en nuestro instituto.

Este año participarán más de 200 estudiantes en diversas modalidades: fútbol sala, baloncesto, voleibol y ajedrez. Las competiciones se desarrollarán durante los recreos y algunas tardes, fomentando el compañerismo y los hábitos deportivos saludables.

La gran final tendrá lugar a finales de marzo con entrega de trofeos y diplomas a todos los participantes. ¡Mucha suerte a todos los equipos!`
  },
  'educacion-adultos': {
    id: 'educacion-adultos',
    title: 'Educación de Adultos - Matrícula Abierta',
    imageSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
    imageAlt: 'Educación de Adultos',
    content: `El programa de Educación de Adultos del IES Cura Valera abre el plazo de matrícula para el segundo cuatrimestre.

Ofrecemos la posibilidad de obtener el título de Graduado en ESO y preparación para el acceso a Ciclos Formativos de Grado Medio y Superior. Las clases se imparten en horario de tarde, compatible con la vida laboral.

También disponemos de cursos de español para extranjeros y programas de preparación para las pruebas de acceso a la universidad para mayores de 25 y 45 años. Para más información, pueden contactar con secretaría.`
  },
  'galeria-multimedia': {
    id: 'galeria-multimedia',
    title: 'Galería Multimedia - Últimos Eventos',
    imageSrc: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
    imageAlt: 'Galería Multimedia',
    content: `Hemos actualizado nuestra galería multimedia con las mejores fotografías y vídeos de los últimos eventos celebrados en el instituto.

Podéis ver las imágenes de la jornada de puertas abiertas, la representación teatral del grupo de artes escénicas, la excursión al parque natural de Cabo de Gata y las actividades de la semana cultural.

Todos los materiales audiovisuales están disponibles en nuestra plataforma digital. Agradeceríamos que compartieran estos momentos con la comunidad educativa.`
  },
};

export const notFoundNews: NewsDetail = {
  id: 'not-found',
  title: 'NADA QUE MOSTRAR',
  imageSrc: '/404.png',
  imageAlt: 'Contenido no encontrado',
  content: 'Lo sentimos, la noticia que buscas no está disponible en este momento. Por favor, vuelve al inicio o explora otras secciones del sitio.'
};

export function getNewsById(id: string): NewsDetail {
  return newsData[id] || notFoundNews;
}
