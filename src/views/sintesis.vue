<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo Obtención de masa madre y producción artesanal de pan, integra conocimientos técnicos y habilidades prácticas que permiten desarrollar procesos de panificación con criterios de calidad e inocuidad. A lo largo del mismo, se abordaron los fundamentos relacionados con la selección y manejo de las materias primas, la formulación de recetas mediante el porcentaje panadero, la comprensión de la fermentación y el manejo adecuado de la masa madre como cultivo natural. 

    p Asimismo, se desarrollaron las principales etapas del proceso de producción, incluyendo el amasado, la fermentación, el porcionado, el moldeado, el horneado y la conservación del producto terminado. La articulación de estos conocimientos fortalece la capacidad del aprendiz para planificar, ejecutar y controlar la elaboración de panes de masa madre, aplicando criterios técnicos que contribuyan a obtener productos con características sensoriales diferenciadas, calidad constante y valor agregado, en concordancia con las buenas prácticas de manufactura y las necesidades del sector de la panificación artesanal .
  
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual que describe los contenidos relacionados con la obtención de masa madre y la producción artesanal de pan. Se organiza en cinco temas principales: materias primas para la panificación, fundamentos matemáticos y unidades de medida, fermentación, masa madre y producción de pan de masa madre. Incluye aspectos como propiedades y conservación de las materias primas, operaciones matemáticas y porcentajes, microorganismos y cambios durante la fermentación, elaboración y mantenimiento de la masa madre, y las etapas de producción del pan, desde la formulación y el amasado hasta la fermentación, el horneado, la conservación y la aplicación práctica. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
