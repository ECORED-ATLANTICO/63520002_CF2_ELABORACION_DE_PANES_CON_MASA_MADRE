<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Materias primas para la panificación
    
    img(src="@/assets/curso/tema1/1.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2
      .col-lg-10(data-aos="fade-up")
        p.banner-text Para comprender el comportamiento de la masa madre y del pan, es necesario conocer a fondo los ingredientes que los componen. Las materias primas para la panificación determinan las propiedades físicas, químicas y sensoriales del producto final. A continuación, se estudian la harina, el agua y la sal, sus tipos, características y formas correctas de almacenamiento.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto, tipos y características
    
    p.mb-5 Las materias primas son los insumos básicos que se transforman mediante procesos físicos, químicos y biológicos para obtener el producto final. En la panificación con masa madre, las materias primas fundamentales son la harina, el agua y la sal. Cada una aporta propiedades específicas que influyen en el desarrollo de la masa, la fermentación y las características del pan.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Materias primas fundamentales en la panificación 
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-9
        .bg-color-2.tarjeta
          .p-4
            SlyderA(tipo="b").bg-color-white.p-4.tarjeta
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema1/3.svg', alt='Imagen de acompañamiento')
                .col-lg-10.mb-4.mb-md-0.order-lg-1
                  p.mb-0 <b>Harina</b>: es el polvo obtenido de la molienda de granos de cereales, principalmente trigo. La harina de trigo es la más utilizada porque contiene dos proteínas, gliadina y glutenina, que al hidratarse forman el gluten, una red elástica que atrapa los gases de la fermentación (Viteri & Cordero, 2024). Las harinas se clasifican según su fuerza (contenido proteico) y su extracción (grado de refinamiento). Para masa madre se recomienda harina integral o semi integral en las primeras etapas, ya que contienen más microorganismos y nutrientes. Para el pan final se pueden usar harinas de fuerza (11-13 % de proteína) que proporcionan buena estructura.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema1/4.svg', alt='Imagen de acompañamiento')
                .col-lg-10.mb-4.mb-md-0.order-lg-1
                  p.mb-0 <b>Agua</b>: es el segundo ingrediente en importancia. Debe ser potable, preferiblemente sin cloro (el cloro inhibe las levaduras). La temperatura del agua es una variable de control crítica, ya que afecta la velocidad de fermentación (Flecha, 2015). Se recomienda usar agua filtrada o dejar reposar el agua del grifo 24 horas para que el cloro se evapore.
              .row.justify-content-center.align-items-center.p-3.p-lg-4
                .col-md-6.col-lg-2.mb-3.mb-lg-0.order-lg-2
                  figure
                    img(src='@/assets/curso/tema1/5.svg', alt='Imagen de acompañamiento')
                .col-lg-10.mb-4.mb-md-0.order-lg-1
                  p.mb-0 <b>Sal</b>: se utiliza principalmente sal marina o sal de roca sin aditivos. La sal cumple múltiples funciones: refuerza el gluten, controla la actividad de las levaduras (ralentiza la fermentación), mejora el sabor y actúa como conservante natural (Castiblanco, 2020). En panadería se usa en proporciones de 1.8 % a 2.2 % del peso de la harina. 
              
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Tipos de harina de trigo según su fuerza (contenido proteico)
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. Adaptado de Castiblanco (2020) y Viteri & Cordero (2024).
            thead
              tr.bg-color-3
                th Tipo de harina
                th Proteína (%)
                th Uso recomendado
            tbody
              tr.bg-color-sintesis
                td.text-bold Harina floja (baja fuerza)
                td 8 - 9 %
                td Galletas, pasteles, bizcochos
              tr.bg-color-white
                td.text-bold Harina media fuerza
                td 10 - 11 %
                td Panes de molde, bollería
              tr.bg-color-sintesis
                td.text-bold Harina de fuerza (alta fuerza)
                td 11 - 13 %
                td Panes artesanales, baguettes, masas madre
              tr.bg-color-white
                td.text-bold Harina integral
                td 12 - 14 %
                td Panes rústicos, masa madre inicial
              tr.bg-color-sintesis
                td.text-bold Harina de centeno
                td 9 - 11 %
                td Panes de centeno, masa madre (aporta nutrientes)
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Características del agua para panificación
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Parámetro
                th Valor recomendado
                th Efecto en la masa
            tbody
              tr.bg-color-sintesis
                td.text-bold pH
                td 6.5 - 7.5
                td Fuera de rango afecta la fermentación
              tr.bg-color-white
                td.text-bold Cloro residual
                td 0 ppm (eliminar)
                td Inhibe levaduras y bacterias
              tr.bg-color-sintesis
                td.text-bold Dureza (CaCO₃)
                td 50 - 150 ppm
                td Muy dura ralentiza la fermentación
              tr.bg-color-white
                td.text-bold Temperatura
                td 24 - 28 °C (variable según receta)
                td Controla velocidad de fermentación
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Propiedades sensoriales y fichas técnicas
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-right") Las materias primas se caracterizan por sus propiedades sensoriales (aspecto, olor, color, textura, sabor) y por sus propiedades físico-químicas y microbiológicas. Toda panadería debe contar con fichas técnicas de los proveedores, que especifican:

        ul.lista-ul--color
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Composición nutricional y contenido de proteínas.
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Humedad máxima, cenizas, gluten húmedo.
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            p.mb-0 Carga microbiana (recuento de mesófilos, esporas de <em>Bacillus cereus</em>).
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Condiciones de almacenamiento y vida útil.
        
        .cajon.p-4.color-primario.bg-color-5
          p.mb-0 Todas las fichas técnicas, deben contener una serie de elementos básicos. A continuación, se hace una descripción de los mismos:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-full-width
          .px-4.px-md-5.py-4
            SlyderF(columnas="col-lg-12 col-xl-6")
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema1/8.svg' alt='AvatarTop')
                p.text-center <b>Identificación del producto</b>: nombre comercial, lote, fecha de elaboración y fecha de vencimiento.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema1/9.svg' alt='AvatarTop')
                p.text-center <b>Análisis proximal</b>: humedad (%), proteína (%), cenizas (%), gluten húmedo (%).
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema1/10.svg' alt='AvatarTop')
                p.text-center <b>Análisis microbiológico</b>: recuento de mesófilos, mohos y levaduras, <em>Escherichia coli, Salmonella, Bacillus cereus</em>.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema1/11.svg' alt='AvatarTop')
                p.text-center <b>Declaración de alérgenos</b>: presencia de trigo, gluten, soya u otros.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema1/12.svg' alt='AvatarTop')
                p.text-center <b>Condiciones de almacenamiento</b>: temperatura, humedad relativa, separación de paredes, uso de estibas.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema1/13.svg' alt='AvatarTop')
                p.text-center <b>Vida útil y rotación</b>: meses de duración y recomendación de rotación PEPS.
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-7.tarjeta.p-3
          p.mb-0 Asimismo, compartimos en una tabla un ejemplo de ficha técnica de un proveedor de harina: 
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Ejemplo de ficha técnica de proveedor de harina
        .tabla-a.color-secundario.tbl
          table
            caption Nota. Adaptado de la ficha técnica de Harina de Trigo Fortificada 3 Castillos Premium (Rafael del Castillo & Cía. S.A., 2024).
            thead
              tr.bg-color-3
                th Campo
                th Especificación
            tbody
              tr.bg-color-sintesis
                td.text-bold Producto
                td Harina de trigo fortificada “3 Castillos Premium”
              tr.bg-color-white
                td.text-bold Descripción
                td Obtenida de trigos de alta proteína (>12.5 %), formulada con oxidantes y enzimas para tiempos largos de fermentación
              tr.bg-color-sintesis
                td.text-bold Proteína
                td Mínimo 12.5 %
              tr.bg-color-white
                td.text-bold Humedad
                td 12.5 – 14.5 %
              tr.bg-color-sintesis
                td.text-bold Cenizas
                td &lt; 0.7 %
              tr.bg-color-white
                td.text-bold Gluten húmedo
                td 31 – 36 %
              tr.bg-color-sintesis
                td.text-bold Gluten seco
                td 10 – 14 %
              tr.bg-color-white
                td.text-bold Recuento de aerobios mesófilos
                td 200.000 UFC/g máx
              tr.bg-color-sintesis
                td.text-bold Recuento de mohos y levaduras
                td 3.000 UFC/g máx
              tr.bg-color-white
                td.text-bold Recuento de <em>Escherichia coli</em>
                td &lt; 10 UFC/g
              tr.bg-color-sintesis
                td.text-bold Detección de <em>Salmonella</em> en 25 g
                td Ausencia
              tr.bg-color-white
                td.text-bold Recuento de <em>Bacillus cereus</em>
                td 500 UFC/g máx
              tr.bg-color-sintesis
                td.text-bold Alérgenos
                td Contiene trigo y gluten. Puede contener trazas de soya
              tr.bg-color-white
                td.text-bold Vida útil
                td 4 meses (almacenado a temperatura ambiente ≤33 °C, humedad relativa ≤85 %)
              tr.bg-color-sintesis
                td.text-bold Almacenamiento
                td Sobre estibas, separado de paredes, lugar seco, libre de plagas, con rotación PEPS
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Almacenamiento y conservación
    
    p.mb-5 El almacenamiento adecuado de las materias primas es esencial para preservar su calidad y evitar contaminaciones. Las harinas deben guardarse en recipientes herméticos o en sacos sobre estibas (separadas del piso al menos 15 cm y de las paredes 50 cm), en un lugar fresco (temperatura inferior a 25 °C), seco (humedad relativa < 60 %) y ventilado (Viteri & Cordero, 2024). El agua debe almacenarse en recipientes limpios y tapados, preferiblemente de acero inoxidable o plástico grado alimenticio. La sal se conserva en envases cerrados en lugar seco para evitar que absorba humedad. Es fundamental aplicar el principio PEPS (Primero en Entrar, Primero en Salir) para rotar inventarios y evitar el vencimiento. Se recomienda inspeccionar periódicamente la presencia de plagas o signos de humedad.
  
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.tarjeta.p-4
          h5 Recomendaciones adicionales de almacenamiento:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | No almacenar harina junto a productos químicos, detergentes o sustancias con olores fuertes (la harina absorbe olores fácilmente).
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Mantener un registro de temperaturas y humedad relativa diariamente.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | En climas cálidos y húmedos, considerar el uso de deshumidificadores o aire acondicionado en la bodega de harinas.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Revisar semanalmente la presencia de insectos (gorgojos, polillas) y, si se detectan, aislar los sacos contaminados y llamar a control de plagas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Caso práctico
    
    h5 Recepción y almacenamiento de un lote de harina de trigo fortificada
    p.mb-5 Una panadería artesanal recibe un lote de harina de trigo fortificada “3 Castillos Premium” para la producción de pan con masa madre. Para garantizar la calidad e inocuidad de la materia prima, el responsable de la recepción debe realizar las siguientes actividades:

    .row.justify-content-center
      .col-lg-10
        PasosA.color-primario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              h3 Paso 1. Inspeccionar visualmente el lote.
              p Verifique que los sacos no presenten roturas, manchas de humedad ni evidencias de plagas, como gorgojos o polillas. Además, confirme que los empaques estén limpios y con el sellado intacto.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-md-8.col-lg-4.order-2.order-lg-1
              figure
                img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")
            .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
              h3 Paso 2. Verificar la documentación.
              p Revise la ficha técnica del lote y la fecha de vencimiento, la cual debe ser de al menos cuatro meses a partir de la fecha de elaboración. Compruebe que la harina cumpla con las especificaciones requeridas, como un contenido de proteína igual o superior al 12,5 % y un porcentaje de gluten húmedo entre el 31 % y el 36 %.
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              h3 Paso 3. Registrar la información.
              p Diligencie el formato de recepción de materias primas, registrando la fecha, el nombre del producto, el número de lote, la fecha de vencimiento, la cantidad recibida y las condiciones observadas durante la inspección.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
          .row.justify-content-center.align-items-center
            .col-md-8.col-lg-4.order-2.order-lg-1
              figure
                img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in")
            .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
              h3 Paso 4. Almacenar la harina.
              p Ubique los sacos sobre estibas de madera o plástico, separadas del piso por al menos 15 cm y de las paredes por un mínimo de 50 cm. Mantenga espacio suficiente entre las estibas para facilitar la limpieza y la circulación del aire, y aplique el método PEPS (Primero en Entrar, Primero en Salir) para asegurar una adecuada rotación del inventario.
          .row.justify-content-center.align-items-center
            .col-lg-8.mb-4.mb-lg-0
              h3 Paso 5. Realizar el monitoreo del almacenamiento.
              p Controle diariamente la temperatura del área de almacenamiento, procurando que no supere los 25 °C, y la humedad relativa, que no debe exceder el 60 %. Asimismo, inspeccione la presencia de plagas, humedad o formación de terrones que puedan afectar la calidad de la harina. 
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema1/19.png", data-aos="zoom-in")
      
    .row.justify-content-center.mb-5
      .col-lg-10
        .bg-color-7.tarjeta.p-3
          p.mb-0 La aplicación sistemática de estos pasos contribuye a conservar las características de la harina, prevenir su deterioro y garantizar condiciones adecuadas para la obtención de masa madre y la producción artesanal de pan.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
