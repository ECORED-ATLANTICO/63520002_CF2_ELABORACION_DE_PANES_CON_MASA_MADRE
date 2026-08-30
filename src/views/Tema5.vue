<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Producción de pan de masa madre
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
      .col-lg-8
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La producción artesanal de pan con masa madre representa la integración de los conocimientos adquiridos sobre materias primas, fermentación y manejo del cultivo. En esta etapa, cada decisión del panadero influye directamente en las características finales del producto, por lo que es necesario aplicar procedimientos técnicos de manera ordenada y controlada. En este capítulo se desarrollan las principales etapas del proceso de elaboración, desde la formulación de la receta y el uso de prefermentos hasta el amasado, la fermentación, el moldeado, la decoración, el horneado y la conservación del pan. El estudio de estos procedimientos permitirá al aprendiz elaborar panes de masa madre con calidad artesanal, aplicando criterios técnicos que favorezcan la obtención de productos seguros, consistentes y con alto valor sensorial.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Flecha, 2015; Viteri & Cordero, 2024).
    
    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Prefermentos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 Un prefermento es una mezcla de harina, agua y una fuente de microorganismos (masa madre o levadura) que se deja fermentar antes de incorporarla a la masa final. Mejora la textura, el sabor y la conservación del pan.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0 (Castiblanco, 2020).
        
        .bg-color-10.tarjeta.p-4
          h5 Clases de prefermentos
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 Masa madre (<em>sourdough</em>): actúa como prefermento cuando se usa directamente en la receta.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <em>Poolish</em>: prefermento líquido (100 % hidratación) con una pequeña cantidad de levadura comercial. No aplica para pan de masa madre pura.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <em>Bigá</em>: prefermento duro (50-60 % hidratación). 
          p.mb-0 En el pan de masa madre, la propia masa madre hace las veces de prefermento.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Características de los principales prefermentos
        .tabla-a.color-secundario.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Prefermento
                th Hidratación
                th Tiempo de fermentación
                th Uso típico
            tbody
              tr.bg-color-sintesis
                td.text-bold Masa madre (líquida)
                td 100 %
                td 4-12 h
                td Panes rústicos, masa madre natural
              tr.bg-color-white
                td.text-bold <em>Poolish</em>
                td 100 %
                td 4-12 h
                td <em>Baguettes</em>, pizzas
              tr.bg-color-sintesis
                td.text-bold <em>Bigá</em>
                td 50-60 %
                td 12-16 h
                td Panes italianos, <em>ciabatta</em>
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Formulación y balanceo
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/3.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-right") La formulación y el balanceo de una receta son etapas fundamentales en la elaboración de pan con masa madre, ya que permiten establecer la proporción adecuada de cada ingrediente para obtener un producto con las características deseadas. La cantidad de harina, agua, masa madre y sal influye directamente en la hidratación de la masa, la velocidad de fermentación, el desarrollo del gluten, la textura de la miga y el sabor del pan. Por ello, las recetas suelen expresarse mediante el porcentaje panadero, sistema que facilita el cálculo, la estandarización y el ajuste de las formulaciones según el volumen de producción. 
        .bg-color-5.tarjeta.p-4.h-100
          p A continuación, se presenta una formulación básica para la elaboración de una hogaza de masa madre (Wing & Scott, 2021).
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Harina de trigo panadero: 100 %.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Agua: 65-75 % (según hidratación deseada).
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Masa madre activa (100 % hidratación): 20-30 %.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Sal: 1.8-2.2 %.
    
    .row.justify-content-center
      .col-lg-10
        p En la siguiente tabla se describe un ejemplo de fórmula utilizada para elaborar un pan de un kilo de peso:
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Ejemplo de fórmula para 1 pan de 1 kg (masa total)
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Ingrediente
                th Porcentaje panadero
                th Peso (g)
            tbody
              tr.bg-color-sintesis
                td.text-bold Harina de trigo
                td 100 %
                td 500
              tr.bg-color-white
                td.text-bold Agua
                td 70 %
                td 350
              tr.bg-color-sintesis
                td.text-bold Masa madre (100 % hidratación)
                td 25 %
                td 125
              tr.bg-color-white
                td.text-bold Sal
                td 2 %
                td 10
              tr.bg-color-sintesis
                td.text-bold Total
                td 197 %
                td 985

        .bg-color-5.tarjeta.mb-5.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/4.png").mx-auto
            .col-lg.order-lg-1
              p En cuanto al balanceo se refiere, la masa madre aporta harina y agua adicionales. Si se usa masa madre al 100 %, de los 125 g, 62.5 g son harina y 62.5 g son agua. Por tanto:
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Harina total = 500 + 62.5 = 562.5 g.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Agua total = 350 + 62.5 = 412.5 g.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Hidratación real = 412.5 / 562.5 = 73.3%.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 12.
          span Hidrataciones comunes según tipo de pan (elaboración propia)
        .tabla-a.color-secundario.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Tipo de pan
                th Hidratación (%)
                th Característica
            tbody
              tr.bg-color-sintesis
                td.text-bold Pan de molde
                td 60 - 65 %
                td Miga cerrada, suave
              tr.bg-color-white
                td.text-bold <em>Baguette</em>
                td 65 - 70 %
                td Miga alveolar, corteza crujiente
              tr.bg-color-sintesis
                td.text-bold Pan rústico (<em>ciabatta</em>)
                td 70 - 80 %
                td Miga muy abierta, irregular
              tr.bg-color-white
                td.text-bold Pan de centeno
                td 70 - 85 %
                td Miga densa, húmeda
    
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Mezcla y amasado

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/5.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1        
        .cajon.p-4.color-primario.bg-color-5.mb-3 
          p.mb-0 La mezcla y el amasado constituyen una de las etapas más importantes en la elaboración del pan con masa madre, ya que permiten integrar los ingredientes y desarrollar la estructura que dará soporte a la fermentación. Durante este proceso se hidratan las proteínas de la harina, se distribuyen uniformemente la masa madre y la sal, y se forma la red de gluten, responsable de retener el dióxido de carbono producido por las levaduras. Un amasado adecuado favorece el volumen, la elasticidad de la masa y la calidad final del pan (Flecha, 2015).
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Técnicas de amasado
    
    p.mb-5 La técnica utilizada depende del volumen de producción, del nivel de hidratación de la masa y del tipo de pan que se desea elaborar.

    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-8.col-md-10.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/6.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Amasado manual (método francés) 
            p.mb-0 Se mezclan la harina, el agua y la masa madre hasta integrar los ingredientes. Luego se realiza una autólisis de aproximadamente 30 minutos, que favorece la hidratación de la harina y el desarrollo inicial del gluten. Después se incorpora la sal y se continúa el amasado mediante pliegues y estiramientos hasta obtener una masa lisa, elástica y capaz de superar la prueba de la membrana (<em>windowpane</em>).
    
      .col-xl-6.col-lg-8.col-md-10.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema5/7.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Amasado mecánico (amasadora de espiral)
            p.mb-0 En producciones de mayor escala se utiliza la amasadora de espiral. El proceso comprende 3 a 5 minutos a baja velocidad para integrar los ingredientes y 5 a 8 minutos a velocidad media para desarrollar la red de gluten. Durante el amasado se debe controlar que la temperatura de la masa permanezca entre 24 y 26 °C, evitando el sobrecalentamiento que puede afectar la fermentación.  
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Cambios que ocurren durante el amasado
    
    p.mb-5 Durante el amasado se producen transformaciones físicas y químicas que determinan el comportamiento de la masa durante la fermentación.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-10.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6.col-lg-3
              figure
                img(src='@/assets/curso/tema5/8.svg', alt='Texto que describa la imagen')
          p.mb-0 Las proteínas gliadina y glutenina absorben agua y se unen para formar la red de gluten, estructura que proporciona elasticidad y resistencia a la masa.
      .col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-8.h-100.p-4
          .row.justify-content-center.mb-3
            .col-6.col-lg-3
              figure
                img(src='@/assets/curso/tema5/9.svg', alt='Texto que describa la imagen')
          p.mb-0 La incorporación de oxígeno favorece la formación y estabilización del gluten. Sin embargo, un amasado excesivo puede oxidar los pigmentos naturales de la harina, aclarar la miga y disminuir parte de los compuestos responsables del aroma y el sabor del pan (Viteri & Cordero, 2024).
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Controles durante el amasado

    p.mb-5 Para obtener una masa con buenas características fermentativas es recomendable verificar:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/10.png", data-aos="zoom-in")
      .col-lg-8
        .bg-full-width
          .px-4.px-md-5.py-4
            SlyderF(columnas="col-xl-6")
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop')
                p.text-center <b>Temperatura final de la masa</b>, idealmente entre 24 y 26 °C, ajustando la temperatura del agua cuando sea necesario.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop')
                p.text-center <b>Tiempo de amasado</b>, evitando tanto un amasado insuficiente como el sobreamasado, ya que ambos afectan la formación y estabilidad de la red de gluten.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop')
                p.text-center <b>Elasticidad de la masa</b>, comprobando que presente una textura lisa, flexible y capaz de superar la prueba de la membrana.

    .row.justify-content-center
      .col-lg-10
        p La siguiente tabla ilustra los tiempos de amasado según el método utilizado:
        .titulo-sexto.color-acento-contenido
          h5 Tabla 13.
          span Tiempos de amasado según método
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Método
                th Tiempo total
                th Velocidad
                th Temperatura final deseada
            tbody
              tr.bg-color-sintesis
                td.text-bold Manual (francés)
                td 15 - 20 min
                td N/A
                td 24 - 26 °C
              tr.bg-color-white
                td.text-bold Amasadora espiral (masa normal)
                td 8 - 12 min
                td baja (3 min) + media (5-9 min)
                td 24 - 26 °C
              tr.bg-color-sintesis
                td.text-bold Amasadora espiral (masa muy hidratada)
                td 12 - 15 min
                td baja
                td 22 - 24 °C
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante el amasado, el panadero no solo mezcla ingredientes, sino que construye la estructura que permitirá a la masa crecer durante la fermentación. Observar la textura, la elasticidad y la temperatura de la masa ayuda a determinar si el gluten se ha desarrollado correctamente y si el proceso puede continuar hacia la fermentación. Un amasado bien ejecutado favorece la obtención de panes con mayor volumen, una miga uniforme y una corteza de mejor calidad.
    
    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Fermentación, porcionado, moldeado y decoración

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/15.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-sintesis.p-3.mb-3
          p.mb-0 Una vez finalizado el amasado, la masa se deposita en un recipiente ligeramente aceitado y cubierto para iniciar la fermentación primaria o fermentación en bloque. Esta etapa suele durar entre 3 y 5 horas a una temperatura de 24 a 26 °C, dependiendo de la actividad de la masa madre y de las condiciones ambientales (Flecha, 2015). Durante este periodo se realizan pliegues (<em>stretch and fold</em>) cada 30 a 45 minutos durante las primeras 2 o 3 horas, con el fin de fortalecer la red de gluten, redistribuir los microorganismos y mejorar la capacidad de la masa para retener los gases producidos durante la fermentación.
        p.mb-0(data-aos="fade-right") Cuando la masa ha incrementado su volumen aproximadamente entre un 30 % y un 50 %, se traslada cuidadosamente a una superficie ligeramente enharinada para realizar el porcionado, dividiéndola en piezas del peso requerido según el tipo de pan que se desea elaborar. Posteriormente, cada porción se preforma y se deja reposar entre 20 y 30 minutos, permitiendo que el gluten se relaje y facilite el moldeado definitivo.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/16.png", data-aos="zoom-in")
      .col-lg-8
        .cajon.color-secundario.p-3.mb-3
          p.mb-0 El moldeado final consiste en dar la forma característica al pan, creando una superficie tensa que favorezca el crecimiento durante el horneado. Las formas más comunes son la hogaza redonda (<em>boule</em>) y el pan alargado (<em>batard</em>), cuya elección depende del producto que se desea obtener (Viteri & Cordero, 2024). Finalizado el moldeado, las piezas se colocan en canastas de fermentación (<em>bannetons</em>) previamente enharinadas, donde se desarrolla la fermentación secundaria o prueba final, que puede realizarse entre 2 y 4 horas a temperatura ambiente o entre 12 y 16 horas en refrigeración. La fermentación en frío favorece un mayor desarrollo del sabor, mejora la estructura de la masa y facilita el greñado (Wing & Scott, 2021).
        p.mb-0(data-aos="fade-right") Antes del horneado se realiza la decoración final, que además de aportar un acabado artesanal cumple funciones técnicas. El greñado o corte superficial controla la expansión de la masa durante el horneado y favorece la formación de la característica “oreja” del pan. También puede espolvorearse harina sobre la superficie para resaltar el diseño y añadirse semillas, como ajonjolí, amapola, linaza o girasol, para enriquecer la apariencia, la textura y el valor nutricional del producto.
    
    p.mb-5 A continuación, se ilustra el proceso de moldeado y greñado:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/17.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-full-width
          .px-4.px-md-5.py-4
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.bg-color-6.box-shadow
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema5/18.png' alt='AvatarTop')
                p.p-3.text-center <b>Boleado</b>: se crea una bola con la masa, encima de una mesa enharinada con movimientos circulares.
              .tarjeta.bg-color-6.box-shadow
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema5/19.png' alt='AvatarTop')
                p.p-3.text-center <b>Formado de <em>batard</em></b>: se va doblando los extremos de la masa hacia al centro y luego enrollándola como un cilindro.
              .tarjeta.bg-color-6.box-shadow
                .row.justify-content-center.mb-3
                  .col-12
                    img(src='@/assets/curso/tema5/20.png' alt='AvatarTop')
                p.p-3.text-center <b>Greñado (<em>scoring</em>)</b>: con una navaja (lame) se van realizando cortes a 45 ° de no más de un 1 cm de profundidad sobre la superficie de un pan ya fermentado.
    
    .bg-color-8.tarjeta.mb-5.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/21.png").mx-auto
        .col-lg.order-lg-1
          h5 Recomendaciones para el porcionado y el moldeado
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Utilizar una rasqueta para dividir la masa con cortes limpios, evitando desgarrar la estructura del gluten.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Manipular la masa con movimientos suaves para conservar el gas generado durante la fermentación.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Pesar cada porción para garantizar uniformidad en el tamaño, el tiempo de horneado y la presentación del producto.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Mantener una tensión uniforme durante el moldeado para favorecer un crecimiento equilibrado y una mejor estructura interna del pan.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fermentación, el porcionado y el moldeado son etapas estrechamente relacionadas que determinan la estructura, el volumen y la apariencia del pan. Un manejo cuidadoso de la masa, junto con una fermentación adecuada y una correcta tensión superficial, favorece la obtención de panes con buena expansión, miga uniforme y una corteza atractiva, características propias de una elaboración artesanal de calidad.
    
    separador
    
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Horneado, conservación y aplicación práctica
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/23.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 El horneado constituye la etapa final del proceso de elaboración del pan, en la cual la masa fermentada experimenta una serie de transformaciones físicas y químicas que determinan su volumen, textura, aroma, sabor y color. El control de la temperatura, el tiempo de cocción y la generación de vapor resulta fundamental para obtener un pan con buena expansión, corteza crujiente y una miga correctamente desarrollada.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Flecha, 2015).
    
    .row.justify-content-center.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-10.tarjeta.p-4.h-100
          h5 Variables de control durante el horneado
          p Para lograr resultados consistentes es necesario controlar tres variables principales:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Temperatura del horno</b>: iniciar entre 250 y 260 °C con vapor durante los primeros 15 a 20 minutos y posteriormente reducir la temperatura a 220-230 °C hasta finalizar la cocción.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Tiempo de horneado</b>: depende del tamaño de la pieza. Como referencia, un pan de 500 g requiere entre 30 y 35 minutos, mientras que una hogaza de 800 g necesita entre 40 y 45 minutos.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Vapor</b>: durante los primeros minutos mantiene la superficie húmeda y flexible, favoreciendo la máxima expansión del pan (<em>horn spring</em>). 
      .col-lg-6
        .bg-color-5.tarjeta.p-4.h-100
          h5 Etapas del horneado
          p Durante la cocción ocurren tres etapas principales:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Expansión inicial</b>: el calor acelera la producción y expansión de los gases, provocando el crecimiento final del pan (<em>horn spring</em>).
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Formación de la corteza</b>: la superficie pierde humedad y comienza el dorado mediante la reacción de Maillard, desarrollando color y aromas característicos.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Cocción final</b>: el almidón gelatiniza, la estructura interna se estabiliza y la temperatura del centro alcanza aproximadamente 96-98 °C, indicando que el pan está completamente cocido. 
    
    .bg-color-8.tarjeta.mb-5.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0.order-lg-2
          img.d-none.d-lg-flex(src="@/assets/curso/tema5/24.png").mx-auto
        .col-lg.order-lg-1
          h5 Principales transformaciones durante el horneado
          p Durante la cocción se producen cambios que determinan las características finales del producto:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Reacción de Maillard</b>: genera el color dorado y los aromas tostados característicos del pan.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Gelatinización del almidón</b>: estabiliza la estructura de la miga al absorber agua y formar un gel.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              p.mb-0 <b>Evaporación del agua</b>: ocasiona una pérdida aproximada del 10 al 15 % del peso del pan, favoreciendo la formación de una corteza firme. 
    
    .row.justify-content-center
      .col-lg-10
        p En la siguiente tabla, se describe el perfil de temperatura y los posibles eventos que suceden durante el horneado: 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 14.
          span Perfil de temperatura y eventos durante el horneado
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Tiempo (min)
                th Temperatura del horno
                th Evento
            tbody
              tr.bg-color-sintesis
                td.text-bold 0-10
                td 250 °C (con vapor)
                td Expansión máxima (<em>horn spring</em>)
              tr.bg-color-white
                td.text-bold 10-20
                td 250 °C (sin vapor)
                td Inicio de la reacción de Maillard, formación de corteza
              tr.bg-color-sintesis
                td.text-bold 20-35
                td 220-230 °C
                td Gelatinización del almidón, cocción interna
              tr.bg-color-white
                td.text-bold 35-45
                td 220 °C
                td Finalización, temperatura interna ≥96 °C

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Conservación del pan
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/25.png", data-aos="zoom-in")
      .col-lg-9
        p.mb-0(data-aos="fade-right") Una vez finalizado el horneado, el pan debe enfriarse completamente sobre una rejilla durante al menos dos horas antes de cortarlo o empacarlo. Este proceso permite la redistribución de la humedad interna y evita que la miga pierda su estructura.
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 Para conservar su calidad se recomienda almacenar el pan temperatura ambiente en paneras o bolsas de papel durante uno a tres días, congelarlo correctamente si se requiere una conservación prolongada, y evitar su refrigeración, ya que acelera el endurecimiento de la amiga por la retrogradación del almidón.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Flecha, 2015).
        .cajon.p-4.color-primario.bg-color-5.mb-3 
          p.mb-0 Cuando el producto se destina a la venta, debe exhibirse protegido del ambiente, aplicando el sistema PEPS y utilizando un etiquetado que incluya nombre del producto, ingredientes, peso, fecha de elaboración y declaración de alérgenos.

    .row.justify-content-center.mb-5
      .col-lg-8
        p Con el objetivo de que amplíe sus conocimientos en el tema abordado, lo invitamos a consultar el siguiente pódcast: 

        .bg-fondo-1
          .row.bg-color-9.tarjeta.px-5.py-4.align-items-center.justify-content-center
            .col-8.col-md-6.col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/26.png", data-aos="zoom-in")
            .col-lg-9
              h2(data-aos="fade-left").mb-4 Pódcast
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Del frasco al horno: produciendo pan artesanal de masa madre"
                tiempo
                :audio="require_src('../assets/curso/podcast/podcast2.mp3')"
              )
    
    .bg-color-7.tarjeta.p-3.mb-5
      p.mb-0 Hasta este punto se han abordado las principales etapas para la elaboración de pan con masa madre, desde la preparación del cultivo hasta el horneado y la conservación del producto terminado. Ahora es momento de poner en práctica estos conocimientos mediante una situación de aprendizaje basada en un contexto real de producción.

    p.mb-5 El siguiente taller integrador le permitirá analizar, calcular y planificar cada etapa del proceso, fortaleciendo su capacidad para tomar decisiones técnicas orientadas a la obtención de panes artesanales con criterios de calidad, eficiencia e inocuidad.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-3.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema5/27.svg")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Taller de integrador: planificación de la producción de pan de masa madre.
                  p.mb-0 Como complemento a este capítulo, lo invitamos a consultar el Anexo_Taller_Integrador, el cual tiene como objetivo que usted puede aplicar los conocimientos adquiridos en el componente formativo.  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Taller_Integrador.pdf')" target="_blank" type="application/pdf")
                    span Enlace
                    i.fas.fa-link 

        .bg-color-5.tarjeta.mb-5.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema5/28.png").mx-auto
            .col-lg.order-lg-1
              p.mb-0 El dominio de las técnicas de producción artesanal de pan con masa madre representa la integración de los conocimientos adquiridos a lo largo de este componente formativo. Comprender la función de cada etapa del proceso y aplicar criterios técnicos en la elaboración, el horneado y la conservación del producto permite obtener panes de alta calidad y desarrollar competencias que favorecen un desempeño responsable, innovador y orientado al mejoramiento continuo dentro del sector de la panificación artesanal.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
