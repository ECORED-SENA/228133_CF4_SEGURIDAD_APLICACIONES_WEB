<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5(data-aos="fade-right") Le damos la bienvenida al componente formativo denominado #[b.txt-c1 “Pruebas de seguridad orientadas a aplicaciones #[i web] con OWASP”]. Este componente enseñará cómo realizar las pruebas a las aplicaciones #[i web] de las organizaciones teniendo en cuenta un plan de pruebas diseñado anteriormente, siguiendo el #[i top ten] (10) del OWASP, para lo cual se invita a observar el siguiente video introductorio.
    figure(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/OHbLe5EL3x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
