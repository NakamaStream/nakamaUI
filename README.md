<h1 align="center">
NakamaUi
</h1>

<p align="center">
  <a href="#"><img src="https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white"/></a>
  <a href="#"><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"/></a>
  <a href="#"><img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"/></a>
</p>

<p align="center">
  <a href="nakamastream.domcloud.dev" target="_blank">
    <img src="https://github.com/NakamaStream/Resources/blob/main/NakamStream-logo-HD-removebg.png?raw=true" alt="Logo" width="200"/>
  </a>
</p>

## ¿Qué es NakamaUI?

es una biblioteca de componentes CSS destinada a la creación de contenedores y tarjetas visualmente atractivas. Es especialmente adecuada para plataformas dedicadas al anime y al cine, ofreciendo una amplia variedad de plantillas y componentes que permiten una implementación sencilla y eficiente. Su diseño se centra en la estética y la funcionalidad, facilitando a los desarrolladores la construcción de interfaces sofisticadas y personalizables.

## Instalación

```bash
npm i nakamaui
```

## CDN

```bash
https://unpkg.com/nakamaui@1.0.3/Ui/nakamaUi.mian.css - Estilo principal
```

```bash
https://unpkg.com/nakamaui@1.0.3/Ui/styles/nakamaNeonUi.css - Estilo Neon
```

```bash
https://unpkg.com/nakamaui@1.0.3/Ui/styles/nakamaWin95Ui.css - Estilo Win95Ui
```

## importar a html

```bash
<link rel="stylesheet" href="/node_modules/nakamaui/Ui/nakamaUi.mian.css">
```

# Componentes

## Estructura HTML de una tarjeta ``(nakama-card)``

Cada Componente depende de la platilla que usas pero estos son los
componentes de la plantilla 'Original'

```html
<div class="nakama-card">
  <img src="anime-image.jpg" alt="Anime Image">
  <span class="nakama-tag">Nuevo</span>
  <div class="nakama-title">Título del Anime</div>
  <div class="nakama-description">Descripción breve del anime.</div>
  <div class="nakama-chapters">Capítulos: 12</div>
</div>
```

## Descripción de cada componente HTML

``img``: Contiene la imagen principal del anime que llenará toda la tarjeta.

- ``.nakama-tag``: Etiqueta que aparecerá al pasar el mouse y mostrará información dinámica, como "Nuevo" o "Popular".

- ``.nakama-title``: Muestra el título del anime, que aparecerá al pasar el mouse sobre la tarjeta.

- ``.nakama-description``: Breve descripción del anime, visible al pasar el mouse.

- ``.nakama-chapters``: Información de la cantidad de capítulos.

# Importar Plantillas

## Plantillas en total:

```html
<link rel="stylesheet" href="/node_modules/nakamaui/Ui/nakamaUi.mian.css">
<link rel="stylesheet" href="/node_modules/nakamaui/Ui/styles/nakamaNeonUi.css">
<link rel="stylesheet" href="/node_modules/nakamaui/Ui/styles/nakamaWin95Ui.css">
```
