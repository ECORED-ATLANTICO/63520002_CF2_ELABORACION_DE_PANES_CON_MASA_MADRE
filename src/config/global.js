export default {
  global: {
    Name: 'Obtención de masa madre y producción artesanal de pan',
    Description:
      'Este componente formativo desarrolla los saberes para obtener y mantener masa madre mediante fermentación controlada, así como para producir pan artesanal de masa madre aplicando técnicas de formulación, amasado, fermentación, moldeado, horneado y conservación, garantizando calidad sensorial e inocuidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Materias primas para la panificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto, tipos y características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Propiedades sensoriales y fichas técnicas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Almacenamiento y conservación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos matemáticos y unidades de medida',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aritmética aplicada: operaciones básicas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Unidades de medida',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Porcentaje panadero (<em>baker’s percentage</em>)',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Fermentación: reacciones y control',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de fermentación y microorganismos involucrados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Reacciones físico-químicas y microbiológicas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Cambios sensoriales durante la fermentación',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Factores que afectan la fermentación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Masa madre',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Origen, concepto y tipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Proceso de elaboración',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Alimentación y mantenimiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Conservación de la masa madre',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Uso de la masa madre en panificación',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Solución de problemas comunes',
            hash: 't_4_6',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Producción de pan de masa madre',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Prefermentos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Formulación y balanceo',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Mezcla y amasado',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Fermentación, porcionado, moldeado y decoración',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Horneado, conservación y aplicación práctica',
            hash: 't_5_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/63520002_CF02_DU.zip',
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
  glosario: [
    {
      termino: 'Amasado',
      significado:
        'Proceso mediante el cual se mezclan los ingredientes, se hidratan las proteínas de la harina y se desarrolla la red de gluten necesaria para retener los gases de la fermentación.',
    },
    {
      termino: 'Autólisis',
      significado:
        'Reposo de la mezcla de harina y agua antes de incorporar la masa madre y la sal, que favorece la hidratación de la harina y el desarrollo inicial del gluten con menor intensidad de amasado.',
    },
    {
      termino: 'Bacterias lácticas',
      significado:
        'Microorganismos beneficiosos presentes en la masa madre que producen principalmente ácidos láctico y acético, contribuyendo al sabor, la acidez y la conservación del pan.',
    },
    {
      termino: '<em>Baker’s percentage</em>',
      significado:
        'Sistema de formulación, también denominado porcentaje panadero, en el que la harina representa el 100 % y los demás ingredientes se expresan como un porcentaje de su peso.',
    },
    {
      termino: '<em>Banneton</em>',
      significado:
        'Canasta de mimbre, pulpa de madera o plástico utilizada para sostener y conservar la forma de la masa durante la fermentación secundaria.',
    },
    {
      termino: 'Expansión en el horno (<em>horn spring</em>)',
      significado:
        'Crecimiento rápido que experimenta la masa durante los primeros minutos del horneado debido a la expansión de los gases y a la producción de vapor en su interior.',
    },
    {
      termino: 'Fermentación en frío',
      significado:
        'Proceso fermentativo realizado en refrigeración durante un periodo prolongado, que ralentiza la actividad microbiana y favorece el desarrollo del sabor, el aroma y la estructura de la masa.',
    },
    {
      termino: 'Fermentación primaria',
      significado:
        'Primera etapa de fermentación de la masa después del amasado y antes del porcionado y el moldeado. También se conoce como fermentación en bloque o a granel.',
    },
    {
      termino: 'Fermentación secundaria',
      significado:
        'Etapa final de fermentación que ocurre después del moldeado y antes del horneado. También se denomina prueba final y puede realizarse a temperatura ambiente o en refrigeración.',
    },
    {
      termino: 'Gelatinización del almidón',
      significado:
        'Transformación que ocurre durante el horneado cuando los gránulos de almidón absorben agua, se hinchan y contribuyen a fijar la estructura de la miga.',
    },
    {
      termino: 'Gluten',
      significado:
        'Red proteica formada principalmente por la gliadina y la glutenina al hidratarse y amasarse la harina de trigo. Proporciona elasticidad a la masa y permite retener el dióxido de carbono.',
    },
    {
      termino: 'Greñado (<em>scoring</em>)',
      significado:
        'Corte realizado en la superficie de la masa antes del horneado para dirigir su expansión, evitar rupturas irregulares y producir un acabado decorativo.',
    },
    {
      termino: 'Hidratación de la masa madre',
      significado:
        'Relación entre el peso del agua y el peso de la harina contenidos en la masa madre, expresada en porcentaje. Una hidratación del 100 % indica cantidades iguales de agua y harina.',
    },
    {
      termino: '<em>Hooch</em>',
      significado:
        'Líquido oscuro o grisáceo que puede aparecer sobre una masa madre que lleva tiempo sin alimentarse. Es un subproducto de la fermentación y puede mezclarse nuevamente o retirarse antes del refresco.',
    },
    {
      termino: 'Levaduras silvestres',
      significado:
        'Microorganismos presentes naturalmente en la harina y el ambiente que fermentan los azúcares, produciendo dióxido de carbono y compuestos aromáticos.',
    },
    {
      termino: 'Masa madre (<em>sourdough</em>)',
      significado:
        'Cultivo natural y simbiótico de levaduras silvestres y bacterias lácticas, elaborado principalmente con harina y agua, utilizado como agente fermentador en la panificación.',
    },
    {
      termino: 'Moldeado',
      significado:
        'Procedimiento mediante el cual se da la forma definitiva a la masa y se genera tensión en su superficie para favorecer la retención de gases y una expansión uniforme.',
    },
    {
      termino: 'pH',
      significado:
        'Medida que indica el grado de acidez o alcalinidad de una sustancia. En la masa madre permite evaluar el avance de la fermentación y las condiciones de estabilidad del cultivo.',
    },
    {
      termino: 'Porcionado',
      significado:
        'División de la masa fermentada en piezas de peso definido, de acuerdo con el tamaño y la presentación del pan que se desea elaborar.',
    },
    {
      termino: 'Prefermento',
      significado:
        'Mezcla de harina, agua y un agente fermentador preparada antes de la masa final para mejorar el sabor, el aroma, la textura y la conservación del pan.',
    },
    {
      termino: 'Prueba de la membrana',
      significado:
        'Técnica para comprobar el desarrollo del gluten, que consiste en estirar una pequeña porción de masa hasta formar una película fina y translúcida sin que se rompa.',
    },
    {
      termino: 'Reacción de Maillard',
      significado:
        'Reacción química entre azúcares reductores y aminoácidos que ocurre principalmente durante el horneado y genera el color dorado y los aromas tostados de la corteza.',
    },
    {
      termino: 'Refresco',
      significado:
        'Proceso de alimentación de la masa madre mediante la conservación de una porción del cultivo y la incorporación de harina y agua nuevas.',
    },
    {
      termino: 'Retrogradación del almidón',
      significado:
        'Reorganización de las moléculas de almidón después del horneado, que provoca pérdida de humedad y endurecimiento progresivo de la miga durante el almacenamiento.',
    },
    {
      termino: 'Vapor',
      significado:
        'Agua en estado gaseoso utilizada durante los primeros minutos del horneado para mantener flexible la superficie de la masa, favorecer su expansión y contribuir a una corteza brillante y crujiente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castiblanco, E. (2020). <em>Recopilación de técnicas en panadería (Tomo I)</em>. Fundación Universitaria San Mateo.',
      link: 'https://www.academia.edu/43908174/Recopilaci%C3%B3n_de_t%C3%A9cnicas_en_panader%C3%ADa_Tomo_I',
    },
    {
      referencia:
        'Flecha, M. (2015). <em>Procesos y técnicas de panificación</em>. Xunta de Galicia.',
      link: 'https://www.academia.edu/30170096/PROCESOS_Y_TECNICAS_DE_PANIFICACION_Manuel_Flecha',
    },
    {
      referencia:
        'Gänzle, M. (2014). <em>Pan artesanal: tecnología y elaboración</em>. Editorial Acribia.',
      link: '',
    },
    {
      referencia:
        'Minifie, B. (2017). <em>Tecnología de la panadería: procesos y controles</em>. Editorial Limusa.',
      link: '',
    },
    {
      referencia:
        'Viteri, M. P., & Cordero, D. (2024). <em>El arte de la panificación</em>. Editorial San Isidro.',
      link: 'https://zenodo.org/records/14873198/files/5-PANIFICACI%C3%93N%20pdf%20interiores%20y%20portada%202025.pdf?download=1',
    },
    {
      referencia:
        'Wing, D., & Scott, A. (2021). <em>The Sourdough School: el arte y la ciencia del pan de masa madre</em>. Editorial Planeta Gastro.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre ',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Yina Paola Castro Zarate',
          cargo: 'Experto Temático Gastronomía',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Diaz Pinto',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
