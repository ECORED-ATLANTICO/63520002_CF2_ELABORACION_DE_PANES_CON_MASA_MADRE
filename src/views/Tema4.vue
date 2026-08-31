<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Masa madre
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La masa madre es el cultivo natural que da origen a la fermentación característica de los panes artesanales. Conocer cómo se obtiene, se alimenta y se conserva permite mantener una comunidad activa de levaduras y bacterias ácido-lácticas, indispensable para lograr fermentaciones estables y productos de calidad. En este capítulo se aborda el proceso completo de elaboración de la masa madre, desde su creación hasta su mantenimiento y conservación, además de las principales recomendaciones para su utilización en la panificación artesanal.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Wing & Scott, 2021).
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Origen, concepto y tipos
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1        
        .cajon.p-4.color-primario.bg-color-5.mb-3 
          p.mb-0 La masa madre es el método de fermentación natural más antiguo utilizado para elaborar pan. Su origen se remonta al Antiguo Egipto, hace más de 5.000 años, cuando se descubrió que una mezcla de harina y agua, al permanecer en reposo, fermentaba de forma espontánea y permitía obtener panes de mayor volumen, aroma y sabor (Castiblanco, 2020). Actualmente también se conoce como <em>sourdough</em> o <em>levain</em>.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Concepto de masa madre
      
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-right") La masa madre es un cultivo natural obtenido a partir de harina y agua que, al fermentar, desarrolla una comunidad estable de levaduras silvestres y bacterias ácido-lácticas. Estos microorganismos trabajan de forma complementaria: las levaduras producen dióxido de carbono, responsable del crecimiento de la masa, mientras que las bacterias generan ácidos orgánicos que aportan aroma, sabor, textura y mayor conservación al pan.
        .bg-color-10.tarjeta.p-3
          p.mb-0 Al tratarse de un cultivo vivo, su actividad depende de factores como la hidratación, la temperatura, la alimentación y el tiempo de fermentación. Una masa madre activa se caracteriza por presentar abundantes burbujas, aumento de volumen y un aroma agradable con notas ligeramente ácidas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Tipos de masa madre según su hidratación
    
    p.mb-5 La hidratación corresponde a la relación entre la cantidad de agua y harina utilizada en el cultivo, expresada como porcentaje. Este factor influye en la velocidad de fermentación, la consistencia de la masa madre y las características sensoriales del pan.

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-up")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/4.svg' alt='AvatarTop')
          .tarjeta.bg-color-sintesis.h-100
            .p-3
              h5 Masa madre líquida (100 % de hidratación)
              p.mb-0 Se prepara con igual cantidad de harina y agua (por ejemplo, 100 g de harina y 100 g de agua). Presenta una consistencia cremosa, fermenta con mayor rapidez y suele favorecer una mayor producción de ácido láctico, proporcionando sabores más suaves y equilibrados. Es ampliamente utilizada en panes artesanales de miga abierta y alta hidratación.
      .col-lg-6.mb-3.mb-lg-0
        .tarjeta-avatar-b.align-items-center.h-100(data-aos="fade-down")
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/5.svg' alt='AvatarTop')
          .tarjeta.bg-color-5.h-100
            .p-3
              h5 Masa madre dura o rígida (50-60 % de hidratación)
              p.mb-0 Contiene menor proporción de agua, por lo que su consistencia es firme y su fermentación más lenta. Generalmente desarrolla un perfil de sabor más intenso, asociado con una mayor presencia de ácido acético. Se emplea en panes de centeno, masas enriquecidas y procesos de fermentación prolongada (Flecha, 2015).
    
    .row.justify-content-center
      .col-lg-10
        p A continuación, se presenta una tabla que compara los tipos de masa madre de acuerdo a su hidratación: 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Comparación entre masa madre líquida y dura
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Característica
                th Masa madre líquida (100 %)
                th Masa madre dura (50-60 %)
            tbody
              tr.bg-color-sintesis
                td.text-bold Velocidad de fermentación
                td Rápida
                td Lenta
              tr.bg-color-white
                td.text-bold Acidez predominante
                td Ácido láctico (suave)
                td Ácido acético (fuerte)
              tr.bg-color-sintesis
                td.text-bold Uso típico
                td Panes de trigo, miga abierta
                td Panes de centeno, masas densas
              tr.bg-color-white
                td.text-bold Conservación en frío
                td Menos estable
                td Más estable
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    .bg-color-5.tarjeta.p-4
      .row.align-items-center
        .col-lg-auto.mb-lg-0
          img.d-none.d-lg-flex(src="@/assets/curso/tema4/6.png").mx-auto
        .col-lg
          p.mb-0 La elección del tipo de masa madre depende del pan que se desea elaborar y de las condiciones de producción. Una masa madre líquida resulta adecuada cuando se busca una fermentación más rápida y una miga abierta, mientras que una masa madre rígida favorece fermentaciones más controladas y sabores más intensos. Conocer estas diferencias permite seleccionar el cultivo más apropiado para obtener las características deseadas en el producto final.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Proceso de elaboración
    
    .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-5
      .bloque-texto-b__texto
        i.fas.fa-quote-left.bg-color-9
        p.mb-0 Para obtener masa madre desde cero se requiere entre 5 y 7 días. A continuación, se describe el procedimiento para una masa madre líquida (100% hidratación) a 25 °C.
        i.fas.fa-quote-right.bg-color-9
      .bloque-texto-d__autor 
        .h5.mb-0 (Wing & Scott, 2021).

    .row.mb-5.align-items-center.justify-content-center
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-11")
          .row(titulo="Día 1: preparación del cultivo").justify-content-center.align-items-center
            .col-lg-10.mb-3.mb-lg-0
              p.ms-lg-5 Mezcle 50 g de harina integral de trigo o centeno con 50 g de agua potable a una temperatura aproximada de 25 a 28 °C en un frasco de vidrio limpio. Revuelva hasta obtener una mezcla homogénea y cubra el recipiente sin cerrarlo completamente para permitir el intercambio de gases. Deje reposar durante 24 horas en un ambiente entre 24 y 26 °C. En esta etapa aún no se observan cambios importantes, pero comienza el desarrollo de los microorganismos naturales.
            .col-md-6.col-lg-2
              figure
                img(src="@/assets/curso/tema4/8.png")
          .row(titulo="Día 2: primer refresco").justify-content-center.align-items-center
            .col-lg-10.mb-3.mb-lg-0
              p.ms-lg-5 Después de 24 horas, deseche aproximadamente la mitad de la mezcla (50 g) y agregue nuevamente 50 g de harina y 50 g de agua. Mezcle bien y deje reposar otras 24 horas. Es normal que la actividad sea escasa o incluso inexistente. Durante este periodo empiezan a establecerse las primeras poblaciones de levaduras y bacterias ácido-lácticas.
            .col-md-6.col-lg-2
              figure
                img(src="@/assets/curso/tema4/9.png")
          .row(titulo="Día 3: inicio de la fermentación").justify-content-center.align-items-center
            .col-lg-10.mb-3.mb-lg-0
              p.ms-lg-5 Repita el proceso de alimentación: deseche la mitad del cultivo y adicione 50 g de harina y 50 g de agua. En este momento suelen aparecer pequeñas burbujas y un aroma ligeramente ácido, señales de que la fermentación comienza a estabilizarse. Si aún no se observan estos cambios, continúe con el mismo procedimiento durante los días siguientes.
            .col-md-6.col-lg-2
              figure
                img(src="@/assets/curso/tema4/10.png")
          .row(titulo="Días 4 y 5: desarrollo del cultivo").justify-content-center.align-items-center
            .col-lg-10.mb-3.mb-lg-0
              p.ms-lg-5 Continúe alimentando la masa madre cada 24 horas siguiendo el mismo procedimiento. La actividad fermentativa debe hacerse más evidente: el cultivo aumenta de volumen, aparecen numerosas burbujas y el aroma se vuelve fresco, ligeramente afrutado y ácido. Estos cambios indican que la comunidad de microorganismos se encuentra cada vez más activa y estable.
            .col-md-6.col-lg-2
              figure
                img(src="@/assets/curso/tema4/11.png")
          .row(titulo="Días 5 a 7: masa madre lista para usar").justify-content-center.align-items-center
            .col-lg-10.mb-3.mb-lg-0
              p.ms-lg-5 La masa madre estará lista cuando, después de alimentarla, duplique su volumen en aproximadamente 4 a 6 horas, presente abundantes burbujas y desprenda un aroma agradable, sin olores desagradables o a descomposición. Si todavía no alcanza este comportamiento, continúe con las alimentaciones diarias hasta que el cultivo muestre una fermentación constante y estable.
            .col-md-6.col-lg-2
              figure
                img(src="@/assets/curso/tema4/12.png")
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.bg-color-5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/13.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante la elaboración de la masa madre es recomendable registrar diariamente el volumen, la presencia de burbujas, el aroma y el tiempo que tarda el cultivo en crecer después de cada alimentación. Estas observaciones permiten evaluar su evolución y reconocer el momento en que la masa madre ha alcanzado la actividad necesaria para utilizarse con éxito en la elaboración de pan artesanal.
    
    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Alimentación y mantenimiento
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La masa madre es un cultivo vivo que requiere una alimentación periódica para conservar el equilibrio entre levaduras y bacterias ácido-lácticas. Este proceso, conocido como refresco, consiste en renovar parte del cultivo con harina y agua para aportar nuevos nutrientes, mantener la actividad fermentativa y evitar un exceso de acidez.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Castiblanco, 2020).
    
    .row.justify-content-center
      .col-lg-10
        h4 Proceso de refresco
        p El refresco de la masa madre comprende las siguientes acciones o pasos:
        PasosA.color-primario.mb-5(tipo="n")
          .row.justify-content-center
            .col-lg-8.mb-4.mb-lg-0
              h3 Paso 1.
              p Conservar una porción del cultivo (semilla) y desechar el excedente para mantener el equilibrio del cultivo.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
          .row.justify-content-center
            .col-md-8.col-lg-4.order-2.order-lg-1
              figure
                img(src="@/assets/curso/tema4/16.png", data-aos="zoom-in")
            .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
              h3 Paso 2. 
              p Agregar harina y agua fresca en la proporción establecida según la frecuencia de alimentación.
          .row.justify-content-center
            .col-lg-8.mb-4.mb-lg-0
              h3 Paso 3. 
              p Mezclar hasta obtener una masa homogénea, asegurando una distribución uniforme de los microorganismos.
            .col-md-8.col-lg-4
              figure
                img(src="@/assets/curso/tema4/17.png", data-aos="zoom-in")
          .row.justify-content-center
            .col-md-8.col-lg-4.order-2.order-lg-1
              figure
                img(src="@/assets/curso/tema4/18.png", data-aos="zoom-in")
            .col-lg-8.mb-4.mb-lg-0.order-1.order-lg-2
              h3 Paso 4. 
              p Dejar fermentar a temperatura ambiente hasta que la masa madre aumente de volumen, presente abundantes burbujas y alcance su máxima actividad. 
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Relaciones de alimentación
    
    p.mb-5 La proporción de harina y agua varía según la frecuencia con que se utilice la masa madre.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/19.png", data-aos="zoom-in")
      .col-lg-8
        .row.justify-content-center
          .col-sm-6.col-lg-6.mb-4.mb-lg-0(data-aos="fade-up")
            .tarjeta--boton.bg-color-10.h-100.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema4/20.svg', alt='Texto que describa la imagen')
              h4.mb-4 Mantenimiento diario (temperatura ambiente)
              p Relación 1:2:2 (1 parte de masa madre : 2 partes de harina : 2 partes de agua).
              h5 Ejemplo:
              p 25 g de masa madre + 50 g de harina + 50 g de agua.
          .col-sm-6.col-lg-6.mb-4.mb-lg-0(data-aos="fade-down")
            .tarjeta--boton.bg-color-8.h-100.p-4
              .row.justify-content-center.mb-3
                .col-4
                  figure
                    img(src='@/assets/curso/tema4/21.svg', alt='Texto que describa la imagen')
              h4.mb-4 Mantenimiento en refrigeración (cada 2 o 3 días)
              p Relación 1:5:5 (1 parte de masa madre : 5 partes de harina : 5 partes de agua).
              h5 Ejemplo:
              p 20 g de masa madre + 100 g de harina + 100 g de agua.
          
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/22.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p En este caso, se recomienda dejar la mezcla entre 2 y 4 horas a temperatura ambiente antes de refrigerarla, para permitir que los microorganismos inicien su actividad fermentativa.
        .bg-color-10.tarjeta.p-4
          h5 Indicadores de una masa madre saludable
          p Una masa madre en buenas condiciones presenta las siguientes características:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Aroma agradable, con notas similares al yogur o a frutas fermentadas.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Abundantes burbujas distribuidas en la superficie y el interior.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Incremento de volumen, duplicando su tamaño entre 4 y 8 horas después del refresco, según la temperatura.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Textura esponjosa, elástica y de consistencia uniforme. 

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación práctica
    
    .bloque-texto-g.color-secundario.bg-color-5.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El éxito de la masa madre depende más de la constancia en su mantenimiento que del tiempo de preparación inicial. Registrar la fecha de cada refresco, la temperatura del ambiente, el tiempo de crecimiento y los cambios observados en el aroma, el volumen y la textura permite evaluar el estado del cultivo y decidir el momento adecuado para utilizarlo en la elaboración del pan.

    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Conservación de la masa madre

    .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-5
      .bloque-texto-b__texto
        i.fas.fa-quote-left.bg-color-9
        p.mb-0 Para conservar la masa madre por varios días sin alimentación diaria, se puede refrigerar a 2-5 °C. La baja temperatura ralentiza la actividad microbiana, pero no la detiene por completo.
        i.fas.fa-quote-right.bg-color-9
      .bloque-texto-d__autor 
        .h5.mb-0 (Flecha, 2015).
    
    .row.justify-content-center.align-items-center
      .col-md-8.col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/24.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="Procedimiento de refrigeración ")
            h4 Procedimiento de refrigeración 
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | Alimentar la masa madre con relación 1:2:2.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | Dejar fermentar a temperatura ambiente durante 1-2 horas (inicio de actividad).
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | Tapar el frasco (no hermético) y llevar a la nevera.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Activación (revitalización) después de refrigeración")
            h4 Activación (revitalización) después de refrigeración
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | Sacar la masa madre de la nevera.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | Dejar reposar a temperatura ambiente 1 hora.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | Alimentar con relación 1:2:2 o 1:3:3.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | Esperar a que duplique su volumen (puede tardar 6-12 horas). Ya está lista para usar.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Variables durante la refrigeración")
            h4 Variables durante la refrigeración
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                p.mb-0 La masa madre puede desarrollar una capa de líquido oscuro (agua de fermentación, llamada <em>hooch</em>). Esto es normal; se puede revolver o decantar.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | La acidez puede aumentar ligeramente, lo que aporta más sabor.
              li.mb-3.d-flex
                i.fas.fa-circle-check.bg-color-4
                | La actividad se recupera después de 1 o 2 refrescos.

    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Uso de la masa madre en panificación 
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/25.png", data-aos="zoom-in")
      .col-lg-8
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La masa madre se utiliza como agente leudante en lugar de levadura comercial. Normalmente se emplea entre un 20 % y un 40 % del peso de la harina total. Se recomienda usar la masa madre en su punto máximo de actividad (4-6 horas después de la alimentación, cuando ha duplicado su volumen). 
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Gänzle, 2014).
        .row.justify-content-center
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-10.tarjeta.p-4.h-100
              h5 La masa madre aporta:
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Leudado natural.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Sabor y aroma complejos.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Mejor conservación (mayor vida útil).
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Mayor digestibilidad (la fermentación predigiere parcialmente los almidones). 
          .col-lg-6
            .bg-color-5.tarjeta.p-4.h-100
              h5 Consejos para usar la masa madre:
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Si la receta indica levadura comercial, reemplazar 100 g de levadura fresca por aproximadamente 200-300 g de masa madre activa (ajustando la hidratación).
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | La masa madre debe estar a temperatura ambiente antes de usarla (no fría).
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Si se usa masa madre refrigerada, reactivarla con al menos un refresco previo.  
    
    separador
    
    #t_4_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.6 Solución de problemas comunes en la masa madre
    
    .cajon.p-4.color-primario.bg-color-5.mb-3 
      p.mb-0 Durante la obtención y el mantenimiento de la masa madre pueden presentarse cambios relacionados con la actividad de los microorganismos, las condiciones ambientales o la frecuencia de alimentación. La mayoría de estas situaciones pueden corregirse mediante ajustes en la alimentación, la temperatura o el manejo del cultivo. La siguiente tabla presenta algunos de los problemas más frecuentes, sus posibles causas y las acciones recomendadas para recuperar la actividad de la masa madre.
    
    .row.justify-content-center
      .col-lg-10
        p La siguiente tabla describe las soluciones utilizadas para resolver los problemas más comunes que se presentan en la elaboración de masa madre: 
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Solución de problemas comunes en la masa madre
        .tabla-a.color-secundario.mb-5.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Problema
                th Posible causa
                th Solución
            tbody
              tr.bg-color-sintesis
                td.text-bold No hay burbujas después de 3 días
                td Temperatura muy baja, harina sin nutrientes
                td Aumentar temperatura a 25-28 °C, usar harina integral o centeno
              tr.bg-color-white
                td.text-bold Olor a acetona (químico)
                td Fermentación demasiado rápida o falta de alimento
                td Refrescar más seguido, reducir temperatura
              tr.bg-color-sintesis
                td.text-bold Olor a podrido
                td Contaminación por bacterias indeseables
                td Descartar y reiniciar con utensilios limpios
              tr.bg-color-white
                td.text-bold Capa de líquido oscuro (<em>hooch</em>)
                td Hambre (falta de alimento)
                td Revolver o decantar, alimentar con más frecuencia
              tr.bg-color-sintesis
                td.text-bold No duplica volumen después de 8 h
                td Masa madre débil, temperatura baja
                td Aumentar temperatura, refrescar con relación 1:1:1
              tr.bg-color-white
                td.text-bold Moho en la superficie
                td Contaminación ambiental
                td Descartar, limpiar bien el frasco y usar agua filtrada

        .bg-color-5.tarjeta.mb-5.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/26.png").mx-auto
            .col-lg.order-lg-1
              p.mb-0 La obtención y el mantenimiento de la masa madre constituyen la base de la panificación artesanal con fermentación natural. Comprender su origen, reconocer sus diferentes tipos, elaborar el cultivo desde cero, alimentarlo correctamente y conservarlo en condiciones adecuadas permite mantener una comunidad activa de levaduras y bacterias ácido-lácticas, responsable de la fermentación y de las características sensoriales del pan. El dominio de estos procedimientos proporciona al aprendiz los fundamentos necesarios para utilizar la masa madre de manera técnica y consistente en diferentes procesos de elaboración, favoreciendo la obtención de productos de calidad, con mayor valor nutricional y características diferenciadoras.
    
    .row.justify-content-center
      .col-lg-8
        p Con el objetivo de que amplíe sus conocimientos en el tema abordado, lo invitamos a consultar el siguiente pódcast: 

        .bg-fondo-1
          .row.bg-color-9.tarjeta.px-5.py-4.align-items-center.justify-content-center
            .col-8.col-md-6.col-lg-3.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema4/27.png", data-aos="zoom-in")
            .col-lg-9
              h2(data-aos="fade-left").mb-4 Pódcast
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="El arte de la masa madre: de la harina y el agua a un cultivo vivo"
                tiempo
                :audio="require_src('../assets/curso/podcast/podcast1.mp3')"
              )


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
