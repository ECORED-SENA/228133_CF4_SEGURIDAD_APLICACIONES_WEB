<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Documentación de hallazgos
    p.mb-5(data-aos="fade-right") La documentación de hallazgos es el resultado del ejercicio realizado durante la ejecución del proceso de auditoría, que las entidades de fiscalización generan sobre la gestión de todos los procesos de los auditados (personas, instituciones, empresas, etc.) y que servirá para evaluar si se cumple o no con lo que se está auditando. En el siguiente tutorial se brinda información sobre cómo realizar un reporte.
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Bzz5x6ymxQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center.mb-5
      .col-lg-auto.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img1.svg')
      .col-lg(data-aos="fade-left")
        p La documentación y saber mostrar los resultados de las pruebas a los clientes u organizaciones es muy importante, además, aprender a interpretarlos ayudará a darle una visión al trabajo posterior de las pruebas, ofreciendo unas recomendaciones para corregir esas vulnerabilidades.
        p.mb-0 Por lo anterior, en el siguiente video se mostrará cómo se genera el reporte de los hallazgos y cómo se debe interpretar. Esta herramienta permite exportar un reporte en PDF y uno en HTML y se va a mostrar cada uno de ellos explicando #[i grosso modo] cómo deben interpretarse.
    figure.mb-5(data-aos="fade-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3wH6Xxkk13Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-5(data-aos="fade-right") Luego de tener el listado del reporte, se describen los siguientes pasos cada una de las secciones de este para tener una mejor comprensión de este.
        LineaTiempoD.color-acento-botones(data-aos="fade-left")
          .row(numero="1" titulo="Tomar la información general del reporte")
            .col-12
              p.mb-4 En esta primera sección se muestran algunos datos generales del reporte, como el dominio donde está la aplicación a la que se le realizaron las pruebas, la descripción del nivel de los riesgos y los niveles de confianza.
              .row.justify-content-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img1.png')
          .row(numero="2" titulo="Revisar los resúmenes")
            .col-12
              p.mb-4 En esta segunda sección se muestra el conteo de las alertas en una matriz de riesgos x confianzas, con su debido porcentaje de una contra la otra.
              .row.justify-content-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img2.png')
          .row(numero="3" titulo="Revisar la matriz")
            .col-12
              p.mb-4 Luego, haciendo parte de la segunda sección, se revisa la matriz en la que se cruzan los riesgos contra el dominio de prueba.
              .row.justify-content-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img3.png')
          .row(numero="4" titulo="Observar los tipos de riesgos arrojados")
            .col-12
              p.mb-4 Y por último, en esta segunda sección, se muestran los tipos de riesgos que se detectaron en las pruebas al sitio.
              .row.justify-content-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img4.png')
          .row(numero="5" titulo="Identificar las alertas")
            .col-12
              p.mb-4 En esta tercera sección se muestran todas las alertas detectadas en la prueba por el nivel de riesgo.
              .row.justify-content-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img5.png')
          .row(numero="6" titulo="Reconocer el apéndice")
            .col-12
              p.mb-4 Igualmente en esta tercera sección el apéndice lo que muestra es cada una de las alertas y algunas referencias para más información de cada una.
              .row.justify-content-center
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img6.png')
          .row(numero="7" titulo="Diferenciar los tipos de apéndice y elegir el de tipo gerencial")
            .col-12
              p.mb-4 También vale resaltar que existen muchos más reportes, los cuales puedes configurar, como el siguiente que es más gerencial.
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema4/img7.png')
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema4/img8.png')
    p(data-aos="fade-right") Es preciso recordar que estas pruebas deben realizarse con previa autorización de los dueños de las aplicaciones y que este tipo de informes son netamente confidenciales.

</template>

<script>
export default {
  name: 'Tema3',
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
