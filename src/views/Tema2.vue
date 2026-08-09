<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos matemáticos y unidades de medida
    
    .row.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 La precisión en las cantidades es esencial para obtener resultados consistentes en panadería. Este capítulo presenta las operaciones matemáticas básicas, las unidades de medida más utilizadas y el sistema de porcentaje panadero, que permite escalar recetas de manera eficiente y profesional.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Viteri & Cordero, 2024).
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Aritmética aplicada: operaciones básicas
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1        
        .cajon.p-4.color-primario.bg-color-5.mb-3 
          p.mb-0 La panificación requiere el manejo de operaciones aritméticas básicas (suma, resta, multiplicación, división) para escalar recetas, calcular rendimientos y ajustar fórmulas. Por ejemplo, si una receta está diseñada para 1 kg de harina y se desea producir 5 kg de harina, todos los ingredientes se multiplican por 5. También se utilizan divisiones para reducir recetas.
        p.mb-0 A continuación, se presentan algunos ejemplos prácticos de operaciones aritméticas aplicadas: 

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        .bg-color-8.tarjeta.p-4.mb-3
          h5 Ejemplo práctico 2 - Reducción
          p Si solo se dispone de 300 g de harina, se divide la receta base por 1000 y se multiplica por 300: factor = 300/1000 = 0.3.
          .row.justify-content-center
            .col-lg-6
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Harina: 300 g.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Agua: 700 × 0.3 = 210 g.
            .col-lg-6
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Masa madre: 250 × 0.3 = 75 g.
                li.mb-3.d-flex
                  i.fas.fa-circle-check.bg-color-4
                  | Sal: 20 × 0.3 = 6 g.
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bg-color-10.tarjeta.p-4
          h5 Ejemplo práctico 1 - Escalado de receta base para 1 kg de harina 
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Harina: 1000 g.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Agua: 700 g (70 % de hidratación).
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Masa madre: 250 g (25 %).
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Sal: 20 g (2 %).
          p Para producir con 2.5 kg de harina, se multiplica cada ingrediente por 2.5:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Harina: 2500 g.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Agua: 1750 g.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Masa madre: 625 g.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Sal: 50 g.
    
    .bg-color-5.tarjeta.p-4
      h5 Ejemplo práctico 3 - Cálculo de rendimiento
      p Si se sabe que ,durante el horneado el pan pierde aproximadamente el 12 % de su peso por evaporación de agua, ¿cuánto debe pesar la masa antes de hornear para obtener un pan de 500 g? 
      ul.lista-ul--color.mb-0
        li.mb-3.d-flex
          i.fas.fa-circle-check.bg-color-4
          | Peso de masa = Peso final / (1 - % pérdida) = 500 g / (1 - 0.12) = 500 / 0.88 = 568.18 g ≈ 570 g de masa. 
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Unidades de medida
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-7.tarjeta.p-4
          p En panadería profesional se utiliza preferentemente el peso (gramos, kilogramos) porque es más preciso que el volumen (Castiblanco, 2020). Sin embargo, en ocasiones se emplean medidas volumétricas (tazas, cucharadas) en entornos domésticos. Es indispensable dominar las conversiones entre unidades:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | 1 kg = 1000 g.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | 1 L = 1000 ml = 1000 cm³.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | 1 taza de harina ≈ 120-140 g (depende del tipo y compactación).
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Equivalencias comunes en panadería
        .tabla-a.color-secundario.tbl
          table
            caption Nota. SENA, (2026).
            thead
              tr.bg-color-3
                th Unidad
                th Equivalencia en gramos (aproximada)
            tbody
              tr.bg-color-sintesis
                td.text-bold 1 cucharadita de sal
                td 5 g
              tr.bg-color-white
                td.text-bold 1 cucharada de sal
                td 15 g
              tr.bg-color-sintesis
                td.text-bold 1 taza de harina de trigo (sin compactar)
                td 130 g
              tr.bg-color-white
                td.text-bold 1 taza de harina integral
                td 120 g
              tr.bg-color-sintesis
                td.text-bold 1 taza de agua
                td 240 g (240 ml)
              tr.bg-color-white
                td.text-bold 1 cucharada de aceite
                td 15 ml (14 g)
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Porcentaje panadero (<em>baker's percentage</em>)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bloque-texto-b.color-primario.p-4(data-aos="fade-up").mb-3
          .bloque-texto-b__texto
            i.fas.fa-quote-left.bg-color-9
            p.mb-0 El porcentaje panadero es un sistema de formulación ampliamente utilizado en la panificación artesanal e industrial para expresar la proporción de los ingredientes de una receta. En este método, la harina siempre representa el 100 %, independientemente de la cantidad utilizada, mientras que los demás ingredientes se calculan como un porcentaje con respecto al peso de la harina.
            i.fas.fa-quote-right.bg-color-9
          .bloque-texto-d__autor 
            .h5.mb-0  (Viteri & Cordero, 2024).
        p Este sistema facilita el diseño, la modificación y el escalado de recetas, ya que permite aumentar o disminuir las cantidades de los ingredientes sin alterar las proporciones de la formulación. Asimismo, constituye un lenguaje técnico común entre los profesionales de la panificación y favorece la estandarización de los procesos productivos.
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .bg-color-5.tarjeta.p-3.text-center
          p La fórmula para calcular el porcentaje de cada ingrediente es la siguiente:
          h5 % del ingrediente = (Peso del ingrediente ÷ Peso de la harina) × 100
          p.mb-0 A continuación, presentamos un ejemplo práctico de formulación en el porcentaje panadero: 
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6.mb-3.mb-lg-0.order-lg-2
        .bg-color-8.tarjeta.p-4.mb-3
          p Si se desea elaborar la receta utilizando 500 g de harina, las cantidades de los demás ingredientes se obtienen aplicando el porcentaje correspondiente:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Agua: 500 × 0,70 = 350 g
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Masa madre: 500 × 0,25 = 125 g
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Sal: 500 × 0,02 = 10 g
        .bg-color-5.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema2/6.png").mx-auto
            .col-lg.order-lg-1
              p.mb-0 Este procedimiento permite mantener las proporciones originales de la formulación, independientemente del volumen de producción. 
      .col-lg-6.order-lg-1
        .bg-color-10.tarjeta.p-4
          h5 Ejemplo de formulación en porcentaje panadero
          p Una receta para elaborar pan con masa madre puede expresarse de la siguiente manera:
          ul.lista-ul--color.mb-0
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Harina: 100 %
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Agua: 70 %
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Masa madre (100 % de hidratación): 25 %
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-4
              | Sal: 2 %
          h5.bg-color-3.p-3 Total porcentual: 197 %
    
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Esquema del porcentaje panadero
        img.mb-2(data-aos="fade-up", src="@/assets/curso/tema2/7.svg", alt="La figura 1 describe un esquema del porcentaje panadero Sal: 5 % Masa Madre 25% Agua 70 % Harina 100% Suma total = 197 % (masa total en relación con la harina)")
        figcaption Nota. SENA, (2026).
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ventajas del porcentaje panadero
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-right") El uso del porcentaje panadero ofrece múltiples beneficios durante la formulación y producción de pan, entre ellos:
        ul.lista-ul--color.mb-0
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Permite escalar recetas para producir cantidades mayores o menores sin modificar las proporciones de los ingredientes.
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Facilita la comparación entre diferentes formulaciones y la evaluación de sus características.
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Ayuda a determinar el nivel de hidratación de la masa y a comprender su comportamiento durante la fermentación y el amasado.
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Favorece la estandarización de las recetas y la repetibilidad de los resultados.
          li.mb-3.d-flex
            i.fas.fa-circle-check.bg-color-4
            | Constituye el sistema de formulación más utilizado en la panificación artesanal e industrial a nivel internacional.
    
    .cajon.p-4.color-primario.bg-color-5.mb-3 
      p.mb-0 El dominio del porcentaje panadero constituye una herramienta fundamental para la obtención de masa madre y la producción artesanal de pan, ya que permite formular recetas con mayor precisión, realizar ajustes según las necesidades de producción y mantener la calidad del producto final de manera consistente.
    
    p.mb-5 Esta versión amplía el contenido sin hacerlo excesivamente extenso, incorpora un enfoque más pedagógico y prepara al aprendiz para comprender por qué este sistema es una competencia esencial dentro del proceso de elaboración de pan con masa madre.

    .row.justify-content-center
      .col-lg-10
        .tarjeta.bg-color-3.p-4.mb-5
          .row.justify-content-around.align-items-center
            .col-auto.position-relative
              img.pst-2.d-none.d-lg-block(src="@/assets/curso/tema2/9.svg")
            .col-auto.col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5 Taller de cálculo: escalado de recetas paso a paso
                  p.mb-0 Como complemento a este capítulo, lo invitamos a consultar el Anexo_Taller_Aplicado, el cual reúne ejercicios que explican cómo calcular el escalado de recetas paso a paso.   
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Taller_Aplicado.pdf')" target="_blank" type="application/pdf")
                    span Enlace
                    i.fas.fa-link
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
