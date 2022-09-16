<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Auditoría infraestructura tecnológica
    p.mb-5 Con miras a la ejecución de una prueba de seguridad es necesario observar el video tutorial que se presenta a continuación, el cual brinda los elementos para utilizar la herramienta Owasp ZAP, de manera correcta.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/VVug58Jaoxo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.align-items-center
      .col-lg.mb-4.mb-lg-0
        p A continuación, se muestra una forma práctica de identificar vulnerabilidades, que, aunque no se sepa cómo explotarlas, es seguro que hay quien sí lo haga en perjuicio de una persona, o cliente y sus reputaciones. Por razones de seguridad con las empresas testeadas, los ejemplos que se presentarán han sido tomados de alguna página web de una entidad del Estado, de la cual se reservará el nombre y sus datos, además que la imagen gráfica será editada para no comprometer la reputación de la entidad.
        p.mb-0 Para iniciar, se debe instalar la aplicación Owasp ZAP, en un sistema Windows 10, este aplicativo tiene como propósito hacer pruebas de vulnerabilidad en aplicaciones y tiene como prerrequisito la instalación de JDK de JAVA, por tanto, para realizar estas instalaciones, debe recurrir al material complementario de este componente formativo, específicamente al denominado #[b.txt-c1 “Owasp ZAP, audita la seguridad de webs y evita vulnerabilidades”] (De Luz, 2021), allí se encuentran los enlaces de los manuales, en caso de que no se tengan estas dos aplicaciones en el computador.
      .col-lg-auto
        figure
          img(src='@/assets/curso/tema3/img1.png')

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
