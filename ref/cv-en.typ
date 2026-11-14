#set page(paper: "us-letter", margin: (x: 1.6cm, y: 1.5cm))
#set text(font: ("Open Sans", "Liberation Sans"), size: 9.5pt, lang: "en", fill: rgb("#3b3b3b"))
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
  #text(font: serif, size: 20pt, tracking: 0.06em)[#upper[About Me]]
  #v(0.2em)

  I am a 22-year-old student in the 7th semester of the Computer Engineering program at the CUCosta campus of the Universidad de Guadalajara. I am passionate about Frontend development and, in general, about building applications and client-facing interfaces, although I also have experience with Backend work.

  I enjoy solving computing problems, from data-analysis algorithms to server infrastructure.

  #v(0.4em)
  #line(length: 100%, stroke: 0.6pt + black)

  #seccion[Work Experience]

  #entrada(
    "Frontend Developer",
    "Partum Unite Studio",
    "November 2025 - March 2026",
    [Worked as a Frontend developer on an application for managing boutiques, split across several applications. I was responsible for developing the admin panel, building a large part of the foundation of its interface.],
  )

  #entrada(
    "Frontend Developer",
    "Freelance landing page project",
    "2023",
    [Took on a landing page project for a life insurance business, where the only requirement was to build a Frontend with the information the client requested about their business.],
  )

  #seccion[Competitive Programming]

  #entrada(
    "ICPC Regional Final",
    "EGADE, Tecnológico de Monterrey, Monterrey",
    "2024",
    [Participated in the ICPC (International Collegiate Programming Contest) regional final, competing against teams from all over Mexico. Ranked 82nd nationally.],
  )

  #entrada(
    "ICPC Regional Final",
    "ESCOM, Instituto Politécnico Nacional, CDMX",
    "2026",
    [Participated in the ICPC (International Collegiate Programming Contest) regional final, competing against teams from all over Mexico. Ranked 76th nationally.],
  )
]

#let derecha = [
  #align(center)[
    #box(width: 4.8cm, height: 4.8cm, radius: 50%, clip: true)[
      #image("foto.jpg", width: 100%, height: 100%, fit: "cover")
    ]
  ]

  #seccion[Contact]
  #text(size: 9pt)[
    Phone: \
    (+52) 322-344-9974

    #v(0.3em)
    Email: \
    diego.rodriguez9322\@alumnos.udg.mx
  ]

  #seccion[Skills]
  #list(
    marker: [•],
    spacing: 0.7em,
    [Team management and leadership.],
    [Initiative and proactivity.],
    [Problem analysis.],
    [Web development knowledge.],
    [Ability to solve medium/advanced algorithmic problems.],
  )

  #seccion[Education]

  #text(weight: "bold")[Computing and Telecommunications Learning Unit] \
  #text(size: 8.5pt)[#upper[Service Provider] \ #upper[CUCosta] \ 2026 - present]

  #v(0.5em)
  #text(weight: "bold")[Computer Engineering] \
  #text(size: 8.5pt)[#upper[Universidad de Guadalajara] \ #upper[CUCosta] \ 2023 - present]

  #v(0.5em)
  #text(weight: "bold")[Basic Computing Specialization] \
  #text(size: 8.5pt)[#upper[Colegio de Bachilleres del Estado de Jalisco] \ 2021 - 2023]
]

#grid(
  columns: (1.65fr, 1fr),
  column-gutter: 1cm,
  izquierda, derecha,
)
