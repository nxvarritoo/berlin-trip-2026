# BERLIN TRIP 2026 🎄

Aplicación móvil y PWA para el viaje a Berlín del 7 al 11 de diciembre de 2026. Incluye el itinerario completo, transportes paso a paso, mapa, reservas con archivos locales, gastos, checklist, favoritos, notas y progreso persistente.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

La compilación de producción se genera con:

```bash
npm run build
npm run preview
```

## Publicar gratis en GitHub Pages

1. Crea un repositorio en GitHub y sube el proyecto a la rama `main`.
2. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**.
3. Cada `push` a `main` ejecutará `.github/workflows/deploy.yml` y publicará `dist`.

Vite usa una ruta base relativa (`./`), por lo que funciona con cualquier nombre de repositorio. La interfaz no depende de rutas del navegador y admite recargas directas en GitHub Pages.

## PWA y funcionamiento sin conexión

Tras la primera carga, el navegador puede instalarla en la pantalla de inicio. El itinerario, transportes, progreso, gastos y checklist funcionan sin conexión. Los mapas no almacenados previamente, Google Maps, BVG y webs oficiales necesitan internet.

## Privacidad y persistencia

- Los datos pequeños se guardan en `localStorage`.
- Las imágenes/PDF de entradas se guardan en IndexedDB.
- La geolocalización solo se utiliza en el navegador.
- GitHub Pages no sincroniza datos entre dispositivos. Usa **Más → Datos → Exportar JSON** para copiar el progreso. Los archivos adjuntos de IndexedDB no forman parte del JSON.

## Fuente y cobertura

`itinerario.md` es la fuente principal. Se han incorporado 42 actividades y 35 desplazamientos (incluidas las caminatas entre visitas). Los datos sujetos a cambios (BVG, aperturas, consigna y tours) aparecen como pendientes de verificar. La contradicción del resumen sobre la comida del viernes se resolvió a favor del detalle cronológico: Charlottenburg/Kurfürstendamm, no Prenzlauer Berg.
