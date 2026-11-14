#set page(paper: "us-letter", margin: (x: 1.6cm, y: 1.5cm))
#set text(font: ("Open Sans", "Liberation Sans"), size: 9.5pt, lang: "es", fill: rgb("#3b3b3b"))
#set par(justify: true, leading: 0.65em)

#let serif = ("Cormorant Garamond", "Libertinus Serif")

#let seccion(titulo) = {
  v(0.6em)
  text(weight: "bold", size: 12pt, tracking: 0.03em)[#upper(titulo)]
  v(0.2em)
}

#let entrada(cargo, lugar, fecha, cuerpo) = {
  text(weight: "bold", size: 11pt)[#cargo]
  linebreak()
  text(weight: "bold", size: 8.5pt)[#upper(lugar)]
  linebreak()
  text(size: 9pt)[#fecha]
  v(0.2em)
  list(marker: [•], cuerpo)
  v(0.4em)
}

#let izquierda = [
  #text(font: serif, size: 30pt, fill: black)[Diego Emmanuel \ Rodríguez Ruvalcaba]

  #v(0.3em)
  #text(font: serif, size: 20pt, tracking: 0.06em)[#upper[Sobre mí]]
  #v(0.2em)

  Soy un joven de 22 años que cursa el 7.º semestre de la carrera de Ingeniería en Computación en el campus CUCosta de la Universidad de Guadalajara. Soy apasionado por el desarrollo Frontend y, en general, por el desarrollo de aplicaciones e interfaces para el cliente, aunque tengo conocimientos para desarrollar labores de Backend.

  Me gusta resolver problemas informáticos, desde algoritmos para análisis de datos hasta el área de infraestructura de servidores.

  #v(0.4em)
  #line(length: 100%, stroke: 0.6pt + black)

  #seccion[Experiencia laboral]

  #entrada(
    "Frontend Developer",
    "Partum Unite Studio",
    "Noviembre 2025 - Marzo 2026",
    [Desarrollé la labor de Frontend en una aplicación para gestionar boutiques, separada en diferentes aplicaciones. Me tocó desarrollar la página de administrativos, construyendo gran parte de la base de su interfaz.],
  )

  #entrada(
    "Frontend Developer",
    "Trabajo de landing page freelance",
    "2023",
    [Me llegó el encargo de una landing page para un negocio de seguros de vida, en la cual solo fue necesario desarrollar un Frontend con la información solicitada por el cliente acerca de su negocio.],
  )

  #seccion[Programación competitiva]

  #entrada(
    "Final Regional ICPC",
    "EGADE, Tecnológico de Monterrey, Monterrey",
    "2024",
    [Participación en la final regional del ICPC (International Collegiate Programming Contest), compitiendo contra equipos de todo México. Logramos quedar en el puesto 82 a nivel nacional.],
  )

  #entrada(
    "Final Regional ICPC",
    "ESCOM, Instituto Politécnico Nacional, CDMX",
    "2026",
    [Participación en la final regional del ICPC (International Collegiate Programming Contest), compitiendo contra equipos de todo México. Logramos quedar en el puesto 76 a nivel nacional.],
  )
]

#let derecha = [
  #align(center)[
    #box(width: 4.8cm, height: 4.8cm, radius: 50%, clip: true)[
      #image("foto.jpg", width: 100%, height: 100%, fit: "cover")
    ]
  ]

  #seccion[Contacto]
  #text(size: 9pt)[
    Teléfono: \
    (+52) 322-344-9974

    #v(0.3em)
    Correo electrónico: \
    diego.rodriguez9322\@alumnos.udg.mx
  ]

  #seccion[Habilidades]
  #list(
    marker: [•],
    spacing: 0.7em,
    [Gestión y liderazgo de equipos de trabajo.],
    [Iniciativa y proactividad.],
    [Análisis de problemas.],
    [Conocimientos de desarrollo web.],
    [Capacidad de resolver problemas algorítmicos de nivel medio/avanzado.],
  )

  #seccion[Educación]

  #text(weight: "bold")[Unidad de Cómputo y Telecomunicaciones para el Aprendizaje] \
  #text(size: 8.5pt)[#upper[Prestador de servicios] \ #upper[CUCosta] \ 2026 - actualidad]

  #v(0.5em)
  #text(weight: "bold")[Ingeniería en Computación] \
  #text(size: 8.5pt)[#upper[Universidad de Guadalajara] \ #upper[CUCosta] \ 2023 - actualidad]

  #v(0.5em)
  #text(weight: "bold")[Especialización de informática básica] \
  #text(size: 8.5pt)[#upper[Colegio de Bachilleres del Estado de Jalisco] \ 2021 - 2023]
]

#grid(
  columns: (1.65fr, 1fr),
  column-gutter: 1cm,
  izquierda, derecha,
)
