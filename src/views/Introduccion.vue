<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p El pan de masa madre representa una de las tradiciones panaderas más antiguas y valiosas de la humanidad. A diferencia del pan producido con levadura comercial, el pan de masa madre se caracteriza por su sabor complejo, su corteza crujiente, su miga alveolar y una vida útil más prolongada (Gänzle, 2014). Este componente formativo se centra en dos procesos fundamentales: la obtención y mantenimiento de una masa madre viva y activa mediante fermentación controlada y la producción artesanal de pan a partir de ella. 
        .bg-color-1.tarjeta.p-4
          .row.align-items-center
            .col-lg-auto.mb-lg-0.order-lg-2
              img.d-none.d-lg-flex(src="@/assets/curso/intro/2.png").mx-auto
            .col-lg.order-lg-1
              p.mb-0 La masa madre es el corazón del pan artesanal: su correcta elaboración y alimentación garantizan una fermentación equilibrada que aporta aroma, textura y valor nutricional (Wing & Scott, 2021). Además, el conocimiento de las variables de control (temperatura, tiempo, hidratación) permite al panadero obtener resultados consistentes y de alta calidad. La producción de pan implica el manejo de fórmulas, técnicas de amasado, moldeado y horneado que, integradas con las Buenas Prácticas de Manufactura, aseguran un producto inocuo.
    
    .cajon.p-4.color-secundario
      p.mb-0 El contenido de este componente se organiza en cinco grandes capítulos. El primero explora las materias primas (harinas, agua, sal) y sus características, incluyendo sus propiedades sensoriales y formas de almacenamiento. El segundo proporciona las herramientas matemáticas necesarias para formular recetas y convertir unidades, con énfasis en el porcentaje panadero. El tercero profundiza en la fermentación, sus microorganismos y reacciones, así como los cambios sensoriales que experimenta la masa. El cuarto capítulo explica paso a paso cómo crear, alimentar y conservar la masa madre, incluyendo la refrigeración y la solución de problemas comunes. Finalmente, el quinto capítulo guía al aprendiz en la producción completa de pan de masa madre, desde la formulación y balanceo de recetas, pasando por las técnicas de mezcla y amasado, la fermentación, el porcionado, el moldeado, la decoración, el horneado y la conservación del producto terminado. Al finalizar, el aprendiz estará en capacidad de producir panes de masa madre de calidad artesanal con criterios técnicos y sensoriales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
