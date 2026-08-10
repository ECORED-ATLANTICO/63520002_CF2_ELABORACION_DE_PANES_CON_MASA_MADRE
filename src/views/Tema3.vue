<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fermentación: reacciones y control
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La fermentación es el proceso biológico que transforma la masa en pan, aportando volumen, sabor y textura. En este capítulo se explican los microorganismos involucrados, las reacciones químicas que ocurren y los cambios sensoriales que se pueden observar, así como los factores que permiten controlar el proceso.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0   (Flecha, 2015).
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Concepto de fermentación y microorganismos involucrados
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La fermentación es un proceso biológico y metabólico mediante el cual diversos microorganismos transforman los azúcares presentes en la harina en compuestos que aportan volumen, aroma, sabor y estabilidad al pan. En la elaboración de masa madre, este proceso ocurre de manera natural gracias a la interacción entre levaduras silvestres y bacterias ácido-lácticas, las cuales utilizan los nutrientes disponibles en la masa para crecer, reproducirse y generar diferentes productos de fermentación.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0   (Castiblanco, 2020).
        .cajon.p-4.color-secundario.mb-3 
          p.mb-0 Durante este proceso se producen dióxido de carbono (CO₂), etanol, ácidos orgánicos y otros compuestos aromáticos que modifican las propiedades físicas, químicas y sensoriales de la masa. Como resultado, la masa aumenta su volumen, desarrolla una estructura más estable y adquiere las características de sabor, aroma y textura propias del pan elaborado con masa madre.
        p Los principales microorganismos que intervienen en este proceso son:
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Levaduras silvestres")
            p.ms-lg-5 Las levaduras silvestres, entre ellas <em>Saccharomyces cerevisiae, Candida milleri y Kluyveromyces marxianus</em>, transforman los azúcares fermentables en dióxido de carbono (CO₂) y etanol. El dióxido de carbono queda atrapado en la red de gluten, favoreciendo el crecimiento de la masa y la formación de una miga ligera y aireada. Además, durante la fermentación producen compuestos que contribuyen al desarrollo del aroma característico del pan.
          div(titulo="Bacterias ácido-lácticas")
            p.ms-lg-5 Las bacterias ácido-lácticas, pertenecientes principalmente a los géneros Lactobacillus, Leuconostoc y Pediococcus, producen ácido láctico y ácido acético a partir de los azúcares disponibles en la masa. Estos ácidos disminuyen el pH, favorecen la conservación del pan al limitar el crecimiento de microorganismos indeseables, fortalecen la estructura de la masa y aportan el sabor ligeramente ácido característico de los panes elaborados con masa madre.
            p.ms-lg-5 La interacción equilibrada entre levaduras y bacterias ácido-lácticas es fundamental para obtener una masa madre estable y activa. Cuando existe un adecuado balance entre ambos grupos de microorganismos, se favorece una fermentación uniforme y se obtienen panes con mejor volumen, aroma, textura y vida útil.  
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-5.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/4.png").mx-auto
            .col-lg
              p.mb-0 <b>Dato de interés</b>: Una masa madre madura puede contener aproximadamente entre 10⁸ y 10⁹ unidades formadoras de colonias (UFC) de bacterias ácido-lácticas por gramo y entre 10⁶ y 10⁷ UFC de levaduras por gramo, lo que evidencia la intensa actividad microbiológica responsable de las características distintivas de este tipo de fermentación . 
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Reacciones físico-químicas y microbiológicas
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .cajon.p-4.color-primario.bg-color-5.mb-3 
          p.mb-0 Durante la fermentación de la masa madre, las levaduras y las bacterias ácido-lácticas transforman los azúcares disponibles en diferentes compuestos. Estas reacciones generan gases, alcoholes y ácidos orgánicos que modifican el volumen, el aroma, el sabor, la textura y la conservación de la masa.
        p.mb-0 La actividad de ambos grupos de microorganismos ocurre de manera simultánea y complementaria. Mientras las levaduras contribuyen principalmente al leudado, las bacterias ácido-lácticas regulan la acidez y participan en la formación del perfil sensorial característico del pan con masa madre.
    
    .bg-fondo-slider.bg-full-width.mb-5
      .p-4.p-lg-5
        SlyderA(tipo="b").bg-color-white.p-4.tarjeta
          .row.justify-content-center.align-items-center.p-3.p-lg-4
            .col-md-6.col-lg-4.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/6.png', alt='Imagen de acompañamiento')
            .col-lg-8.mb-4.mb-md-0
              h4 Fermentación alcohólica producida por las levaduras
              p Las levaduras utilizan azúcares simples, como la glucosa, para obtener energía. Como resultado de esta transformación se producen etanol y dióxido de carbono:
              .bg-color-5.tarjeta.p-4.mb-3
                h5.text-center.mb-0 C₆H₁₂O₆ (glucosa) → 2 C₂H₅OH (etanol) + 2 CO₂ (dióxido de carbono) 
              p El dióxido de carbono se acumula en forma de pequeñas burbujas dentro de la masa y queda retenido en la red de gluten. Esta acción provoca el aumento de volumen y favorece la formación de una miga aireada. El etanol, por su parte, se evapora en gran medida durante el horneado, aunque también participa en la formación de compuestos aromáticos.
              .cajon.p-4.color-secundario.mb-3 
                p.mb-0 La capacidad de la masa para retener el gas depende de factores como el desarrollo del gluten, la hidratación, el tiempo de fermentación y la manipulación durante el amasado y el formado. Por esta razón, una elevada producción de gas no garantiza por sí sola un buen volumen si la estructura de la masa no es suficientemente estable.
          div.justify-content-center.align-items-center.p-3.p-lg-4
            h4 Fermentación láctica producida por las bacterias
            p Las bacterias ácido-lácticas también utilizan los azúcares de la harina, pero producen principalmente ácido láctico:
            .row.justify-content-center
              .col-lg-6.mb-3.mb-lg-0
                .bg-color-5.tarjeta.p-4.mb-3
                  h5.text-center.mb-0 C₆H₁₂O₆ (glucosa) → 2 CH₃CHOHCOOH (ácido láctico) 
                p El ácido láctico aporta una acidez suave y redondeada, comparable con la percibida en productos fermentados como el yogur. Además, contribuye a reducir el pH de la masa, favorece su estabilidad microbiológica y participa en el desarrollo de su textura y aroma.
                .cajon.p-4.color-secundario.mb-3 
                  p.mb-0 Dependiendo de las especies presentes y de las condiciones de fermentación, algunas bacterias pueden producir también ácido acético. De manera simplificada, una reacción asociada con la formación de este compuesto puede representarse así:
              .col-lg-6.mb-4.mb-md-0
                .bg-color-5.tarjeta.p-4.mb-3
                  h5.text-center.mb-0 C₂H₅OH + O₂ → CH₃COOH (ácido acético) + H₂O
                p El ácido acético produce una sensación más intensa, penetrante y ligeramente avinagrada. Por esta razón, la relación entre ácido láctico y ácido acético influye directamente en el perfil de sabor del pan. Una mayor proporción de ácido láctico genera una acidez más suave, mientras que una mayor presencia de ácido acético produce sabores más marcados y picantes (Gänzle, 2014).
                .cajon.p-4.color-secundario.mb-3 
                  p.mb-0 El equilibrio entre ambos ácidos no depende únicamente del tipo de microorganismo. También se relaciona con la temperatura, la hidratación, el tiempo de fermentación, la frecuencia de alimentación de la masa madre y las características de la harina utilizada.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Factores que afectan la fermentación
    
    p La fermentación es un proceso dinámico. Su velocidad y sus resultados pueden modificarse mediante el control de diferentes condiciones de elaboración.


    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="Temperatura")
        .row.justify-content-center
          .col-lg.mb-3.mb-lg-0
            h4 Temperatura
            p.mb-0 La temperatura regula la velocidad de la fermentación al influir en la actividad de levaduras y bacterias ácido-lácticas. El rango recomendado para una masa madre es de 24 a 28 °C, ya que favorece un desarrollo equilibrado de los microorganismos. Temperaturas superiores a 30 °C incrementan la producción de ácidos, mientras que valores inferiores a 18 °C ralentizan la fermentación. Controlar esta variable permite obtener panes con diferentes perfiles de aroma, sabor y textura.
          .col-md-4.col-lg-auto
            figure
              img(src='@/assets/curso/tema3/7.svg', alt='Imagen de acompañamiento')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Hidratación")
        .row.justify-content-center
          .col-lg.mb-3.mb-lg-0
            h4 Hidratación
            p.mb-0 La hidratación corresponde a la cantidad de agua utilizada con respecto al peso de la harina. Una masa madre con mayor hidratación facilita la actividad microbiana, acelera la fermentación y favorece la producción de ácido láctico. Por el contrario, una masa más firme fermenta con mayor lentitud y puede desarrollar una acidez más intensa. La hidratación influye directamente en la textura de la masa, la estructura de la miga y las características sensoriales del pan.
          .col-md-4.col-lg-auto
            figure
              img(src='@/assets/curso/tema3/8.svg', alt='Imagen de acompañamiento')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tiempo")
        .row.justify-content-center
          .col-lg.mb-3.mb-lg-0
            h4 Tiempo
            p.mb-0 El tiempo determina cuánto actúan los microorganismos sobre los azúcares de la masa. Una fermentación corta puede producir panes con poco volumen y aromas poco desarrollados. En cambio, una fermentación más prolongada favorece la formación de compuestos aromáticos y una mayor acidez. Sin embargo, un exceso de tiempo puede debilitar la red de gluten y reducir la capacidad de la masa para retener los gases generados durante la fermentación.
          .col-md-4.col-lg-auto
            figure
              img(src='@/assets/curso/tema3/9.svg', alt='Imagen de acompañamiento')
      .tarjeta.color-acento-botones--borde.p-4(titulo="pH ")
        .row.justify-content-center
          .col-lg
            h4 pH 
            p.mb-0 El pH indica el nivel de acidez de la masa y disminuye progresivamente durante la fermentación debido a la producción de ácidos orgánicos. Una masa madre madura suele presentar un pH entre 3,8 y 4,5, condición que limita el crecimiento de microorganismos indeseables y favorece la conservación del pan. Mantener un pH adecuado también contribuye al desarrollo del sabor, la estabilidad de la masa y la calidad del producto final.
          .col-md-4.col-lg-auto
            figure
              img(src='@/assets/curso/tema3/10.svg', alt='Imagen de acompañamiento')
      .tarjeta.color-acento-botones--borde.p-4(titulo="Alimentación de la masa madre ")
        .row.justify-content-center
          .col-lg
            h4 Alimentación de la masa madre 
            p.mb-0 La alimentación consiste en incorporar periódicamente harina y agua para aportar nuevos nutrientes a los microorganismos. Este proceso mantiene activa la fermentación, reduce temporalmente la acidez acumulada y fortalece la población de levaduras y bacterias. Si la masa madre permanece mucho tiempo sin refrescarse, disminuye su actividad fermentativa y puede afectar el volumen, el aroma y la calidad del pan elaborado.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/11.svg', alt='Imagen de acompañamiento')

    .row.justify-content-center
      .col-lg-10
        p A continuación, se presenta una tabla que describe el efecto de la temperatura en la producción de ácidos: 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 5.
          span Efecto de la temperatura en la producción de ácidos
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. Adaptado de Gänzle (2014).
            thead
              tr.bg-color-3
                th Temperatura
                th Producción predominante
                th Característica sensorial
            tbody
              tr.bg-color-sintesis
                td.text-bold 24-26 °C
                td Ácido láctico (más suave)
                td Sabor a yogur, suave
              tr.bg-color-white
                td.text-bold 28-30 °C
                td Ácido acético (más fuerte)
                td Sabor avinagrado, picante

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    img(src="@/assets/curso/tema3/12.png", alt="Imagen decorativa")
    
    .row.justify-content-center.align-items-center.z-2.mb-3
      .col-lg-10(data-aos="fade-up")
        p.banner-text El panadero puede regular las características del pan mediante el control de estas variables. Por ejemplo, una masa madre más hidratada, mantenida en un ambiente templado y utilizada después de un tiempo moderado de fermentación puede producir un pan de acidez suave. En cambio, una masa madre más firme y sometida a una fermentación prolongada puede generar aromas más intensos y una acidez más pronunciada.
    
    .row.justify-content-center
      .col-lg-10
        p Comprender estas relaciones permite evitar que la fermentación se interprete únicamente como un tiempo de espera. En realidad, se trata de un proceso microbiológico que debe observarse y controlarse para alcanzar el volumen, el sabor, la textura y la conservación esperados en el producto final.
    
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Cambios sensoriales durante la fermentación 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La fermentación de la masa madre no solo produce transformaciones químicas y microbiológicas, sino también cambios sensoriales que pueden observarse, percibirse y evaluarse durante todo el proceso. Estos cambios permiten al panadero reconocer el grado de actividad de la masa madre, determinar su nivel de madurez y decidir el momento más adecuado para utilizarla en la elaboración del pan.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Castiblanco, 2020).
        p.mb-0 La observación sistemática del aroma, el sabor, la textura y el volumen constituye una herramienta práctica para valorar la calidad de la fermentación, incluso sin el uso de instrumentos especializados.
    
    .row.mb-5.align-items-center.justify-content-center
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          div(titulo="Aroma")
            p.ms-lg-5 Al inicio del proceso predominan los olores característicos de la harina y el agua. A medida que avanza la fermentación, la actividad de levaduras y bacterias genera nuevos compuestos aromáticos que producen notas afrutadas, lácticas y ligeramente dulces. En una masa madre madura también pueden percibirse aromas más ácidos, similares al yogur o al vinagre, cuya intensidad dependerá del equilibrio entre los microorganismos y de las condiciones de fermentación.
          div(titulo="Sabor")
            p.ms-lg-5 Durante la fermentación se desarrollan progresivamente los ácidos orgánicos que aportan complejidad al sabor. Una masa madre joven presenta una acidez suave, mientras que una fermentación más prolongada produce sabores más intensos y persistentes. El equilibrio entre ácido láctico y ácido acético determina si el sabor resulta más delicado o más pronunciado, característica que posteriormente influirá en el perfil sensorial del pan.
          div(titulo="Textura")
            p.ms-lg-5 La masa experimenta cambios físicos como consecuencia de la hidratación de la harina y del desarrollo de la red de gluten. Conforme avanza la fermentación, la masa adquiere mayor elasticidad, cohesión y extensibilidad, al tiempo que disminuye la sensación de pegajosidad. Una textura uniforme y flexible indica, por lo general, una adecuada actividad fermentativa y una buena capacidad para retener los gases producidos.
          div(titulo="Volumen")
            p.ms-lg-5 Uno de los cambios más evidentes es el incremento del volumen de la masa debido a la producción de dióxido de carbono por parte de las levaduras. El gas queda atrapado en la red de gluten formando pequeñas burbujas visibles tanto en la superficie como en el interior de la masa. En condiciones adecuadas de alimentación y temperatura, una masa madre activa puede duplicar o incluso triplicar su volumen antes de comenzar a descender, señal de que ha alcanzado su punto máximo de fermentación.  
    
    .row.justify-content-center
      .col-lg-10
        p La siguiente tabla describe los parámetros de control de la fermentación: 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 6.
          span Parámetros de control de fermentación
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Parámetro
                th Rango óptimo
                th Señal de alerta
            tbody
              tr.bg-color-sintesis
                td.text-bold Temperatura ambiente
                td 24 - 28 °C
                td &lt; 18 °C (muy lenta); &gt; 30 °C (demasiado ácida)
              tr.bg-color-white
                td.text-bold Tiempo de duplicado
                td 4 - 8 h
                td &gt; 12 h (masa madre débil)
              tr.bg-color-sintesis
                td.text-bold Aroma
                td Agradable, ácido suave
                td Olor a acetona o podrido
              tr.bg-color-white
                td.text-bold pH
                td 3.8 - 4.5
                td &lt; 3.5 (muy ácida); &gt; 5.0 (poco ácida)
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.bg-color-5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/15.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante la elaboración de pan con masa madre, el panadero utiliza estos cambios sensoriales como indicadores para evaluar el estado de la fermentación. Una masa madre que presenta un aroma agradable, una textura elástica, abundantes burbujas y un incremento significativo de volumen suele encontrarse en condiciones óptimas para incorporarse a la formulación del pan, favoreciendo un buen desarrollo de la masa y una mayor calidad del producto final.
    
    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Factores que afectan la fermentación
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p.mb-0(data-aos="fade-right") La fermentación de la masa madre es un proceso dinámico que depende de diferentes condiciones ambientales y de manejo. Factores como la temperatura, el tiempo, el pH y la hidratación influyen directamente en la actividad de las levaduras y las bacterias ácido-lácticas, determinando la velocidad de fermentación y las características finales de la masa. Comprender cómo actúa cada uno de estos factores permite controlar el proceso de manera más precisa, prevenir alteraciones y obtener panes con el volumen, la textura, el aroma y el sabor deseados.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-full-width
          .px-4.px-md-5.py-4
            SlyderF(columnas="col-xl-6")
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema3/18.svg' alt='AvatarTop')
                p.text-center <b>Temperatura</b>: es el factor más influyente. Cada aumento de 1 °C dentro del rango de 20-30 °C acelera la fermentación aproximadamente un 10 %. Sin embargo, temperaturas superiores a 35 °C comienzan a dañar las levaduras.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop')
                p.text-center <b>Tiempo</b>: una fermentación más larga (12-24 horas en frío) produce más sabor y mejor digestibilidad. Los panes de masa madre con fermentación prolongada tienen un índice glucémico más bajo.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema3/20.svg' alt='AvatarTop')
                p.text-center <b>pH</b>: la acidez es un conservante natural. Un pH de 4.0 o inferior inhibe la mayoría de las bacterias patógenas, incluyendo <em>Salmonella y Escherichia coli</em>. Sin embargo, un pH demasiado bajo (< 3.5) puede debilitar el gluten y producir una miga densa.
              .tarjeta.bg-color-6.p-4.p-lg-5.box-shadow
                .row.justify-content-center.mb-3
                  .col-5
                    img(src='@/assets/curso/tema3/21.svg' alt='AvatarTop')
                p.text-center <b>Hidratación</b>: las masas con alta hidratación (>75 %) fermentan más rápido y producen una miga más abierta e irregular. Las masas con baja hidratación (<60 %) fermentan más lentamente y producen una miga más cerrada y uniforme. 
    
    .row.justify-content-center
      .col-lg-10
        p En la siguiente tabla, se describe la relación entre la hidratación y el tipo de pan:
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Relación entre hidratación y tipo de pan
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Hidratación (%)
                th Tipo de pan
                th Característica de la miga
            tbody
              tr.bg-color-sintesis
                td.text-bold 55 - 60
                td Pan de molde
                td Miga muy cerrada, suave
              tr.bg-color-white
                td.text-bold 60 - 65
                td Pan común
                td Miga cerrada, elástica
              tr.bg-color-sintesis
                td.text-bold 65 - 70
                td Baguette
                td Miga alveolar, corteza crujiente
              tr.bg-color-white
                td.text-bold 70 - 75
                td Pan rústico
                td Miga abierta, irregular
              tr.bg-color-sintesis
                td.text-bold 75 - 85
                td Ciabatta, focaccia
                td Miga muy abierta, grandes alveolos
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.bg-color-5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante la elaboración de pan con masa madre, el panadero ajusta estos factores de acuerdo con las condiciones de producción y el tipo de pan que desea obtener. Por ejemplo, puede modificar la temperatura para acelerar o ralentizar la fermentación, variar la hidratación para influir en la estructura de la miga o prolongar el tiempo de reposo para desarrollar aromas y mejorar la digestibilidad del producto. El control adecuado de estas variables favorece una fermentación estable, optimiza la calidad del pan y contribuye a obtener resultados consistentes en cada elaboración.
             
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
