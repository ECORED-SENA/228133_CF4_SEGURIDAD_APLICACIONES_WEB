export default {
  global: {
    componenteFormativo:
      'Pruebas de seguridad orientadas a aplicaciones <em>web</em> con OWASP',
    descripcionCurso:
      'Este componente formativo pretende enseñar a cómo realizar pruebas de seguridad a las aplicaciones <em>web</em> utilizando OWASP, los niveles de seguridad, tipos de pruebas, métodos, metodologías y confidencialidad; además escanear las vulnerabilidades y el tipo de ataques orientados a estas aplicaciones y, por último, documentar los hallazgos de las pruebas realizadas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Tipología de ataques <em>web</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Clasificación de ataques',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Prueba de seguridad orientada a aplicaciones <em>web</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Documentación de hallazgos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Calder, A. (2018). <em>NIST Cybersecurity Framework: Una guía de bolsillo</em>. IT Governance Publishing Ltd.',
      link: '',
    },
    {
      referencia:
        'Cano, J. (2011). <eem>Ciberseguridad y ciberdefensa: dos tendencias emergentes en un contexto global</em>. Sistemas (Asociación Colombiana de Ingenieros de Sistemas), 119, 4-7.',
      link: '',
    },
    {
      referencia:
        'Dongee. (2018). <em>Las 7 vulnerabilidades más comunes de sitios web que no puedes pasar por alto</em>. Dongee. ',
      link:
        'https://blog.dongee.com/las-7-vulnerabilidades-m%C3%A1s-comunes-de-sitios-web-que-no-puedes-pasar-por-alto-59f29c1c3aea',
    },
    {
      referencia:
        'Firma-e. (2021). <em>¿Qué es un SGSI - Sistema de Gestión de Seguridad de la Información?</em> Firma-e. ',
      link:
        'https://www.firma-e.com/blog/que-es-un-sgsi-sistema-de-gestion-de-seguridad-de-la-informacion',
    },
    {
      referencia:
        'Gómez, M., J. (2017). <em>Gestión de la ciberseguridad según el ISO/IEC 27032:2012.</em> ',
      link:
        'https://www.linkedin.com/pulse/gesti%C3%B3n-de-la-ciberseguridad-seg%C3%BAn-el-isoiec-gianncarlo-g%C3%B3mez-morales',
    },
    {
      referencia:
        'ISO/IEC. (2020). <em>Tecnologías de la información. Técnicas de seguridad</em>. Directrices para ciberseguridad. ',
      link:
        'https://tienda.icontec.org/gp-tecnologias-de-la-informacion-tecnicas-de-seguridad-directrices-para-ciberseguridad-gtc-iso-iec27032-2020.html',
    },
    {
      referencia:
        'Portal de la Administración Electrónica - PAE (s. f.). <em>Magerit v.3: Metodología de análisis y gestión de riesgos de los sistemas de información</em>. ',
      link:
        'https://administracionelectronica.gob.es/pae_Home/pae_Documentacion/pae_Metodolog/pae_Magerit.html',
    },
    {
      referencia:
        'Presupuesto Online. (2021). <em>ISO 27001 - Certificado ISO 27001 punto por punto</em>. ',
      link: 'https://normaiso27001.es',
    },
    {
      referencia:
        'Seguridad 7”A”. (s. f.). <em>Metodología NIST SP 800-30. National Institute of Standards and Technology</em>. ',
      link: 'http://seguridades7a.blogspot.com/p/nist-sp-800-30.html',
    },
    {
      referencia:
        'Soriano, M. (2014). <em>Seguridad en redes y seguridad de la información.</em>',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'cualquier evento que puede afectar los activos de información y se relaciona, principalmente, con recursos humanos, eventos naturales o fallas técnicas.',
    },
    {
      termino: 'Aplicación',
      significado:
        'programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: '<em>Browser</em>',
      significado:
        'es el término inglés que se utiliza para identificar a un navegador <em>web</em> o navegador de internet, consiste en un <em>software</em>, programa o incluso aplicación, que ofrece al usuario el acceso a la red.',
    },
    {
      termino: 'Delegar',
      significado:
        'dar (a una persona u organización) un poder, una función o una responsabilidad a alguien para que los ejerza en su lugar o para obrar en representación suya.',
    },
    {
      termino: 'Implementación',
      significado:
        'poner en funcionamiento o aplicar métodos, medidas, etc., para realizar algo.',
    },
    {
      termino: 'Interfaz',
      significado:
        'en informática, es la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro, en este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una interfaz.',
    },
    {
      termino: 'OWASP',
      significado: '<em>Open web Application Security</em>.',
    },
    {
      termino: 'Riesgo',
      significado:
        'posibilidad de que una amenaza se produzca, dando lugar a un ataque sobre un recurso o servicio tecnológico; esto no es otra cosa que la probabilidad de que ocurra el ataque por parte de la amenaza.',
    },
    {
      termino: 'Servidor',
      significado:
        'conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
  ],
  complementario: [
    {
      tema: 'Tipología de ataques <em>web</em>',
      referencia:
        'Belcic, I. (2020). <em>¿Qué es la inyección de SQL y cómo funciona?</em> Avast.',
      tipo: 'Página web',
      link: 'https://www.avast.com/es-es/c-sql-injection',
    },
    {
      tema: 'Tipología de ataques <em>web</em>',
      referencia:
        'Quanti Media Group [QuantiSolutions]. (2019). <em>Las 10 Vulnerabilidades más peligrosas usadas por aplicaciones web (OWASP 10) - 4K</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/kNo9fZC1Isw',
    },
    {
      tema: 'Tipología de ataques <em>web</em>',
      referencia:
        'Roelcode. (2021). <em>Cómo Descargar e Instalar Java JDK 16 en Windows 10 - 2021</em>.',
      tipo: 'Video',
      link: 'https://youtu.be/hCBEavs08as',
    },
    {
      tema: 'Tipología de ataques <em>web</em>',
      referencia:
        'WeLiveSecurity. (2015). <em>¿En qué consiste la vulnerabilidad Cross Site Request Forgery (CSRF)?</em> We Live Security.',
      tipo: 'Página web',
      link:
        'https://www.welivesecurity.com/la-es/2015/04/21/vulnerabilidad-cross-site-request-forgery-csrf/',
    },
    {
      tema: 'Tipología de ataques <em>web</em>',
      referencia:
        'Kumar, C. (2015). <em>Cookie segura con HttpOnly y bandera segura en Apache</em>. Geekflare.',
      tipo: 'Página web',
      link: 'https://geekflare.com/es/httponly-secure-cookie-apache/',
    },
    {
      tema: 'Clasificación de ataques',
      referencia:
        'GioCode [giova50000]. (2020). <em>Los tipos de malware</em> | GioCode',
      tipo: 'Video',
      link: 'https://www.youtube.com/embed/A6FAqk2QDjM',
    },
    {
      tema: 'Prueba de seguridad orientada a aplicaciones web',
      referencia:
        'De Luz, S. (2021). <em>OWASP ZAP, audita la seguridad de webs y evita vulnerabilidades</em>. RedesZone.',
      tipo: 'Página web',
      link:
        'https://www.redeszone.net/tutoriales/seguridad/owasp-zap-auditar-seguridad-web/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular ',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'David Eduardo Lozada Cerón',
        cargo: 'Experto temático',
        centro:
          'Centro de Tele informática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Paula Andrea Taborda Ortiz',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y Los Servicios CIES - Regional Norte de Santander',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Sofia Suarez Suarez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Miguel Guerrero Gutiérrez',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pedro Nel Calao Zabala',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Eugenia Mejía López',
        cargo: 'Validación contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Amortegui Garcia',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
