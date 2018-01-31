<template>
  <footer class="footer">
     <div class="container">
      <div class="content has-text-centered">

     <div class="columns is-centered">
         <div class="column is-10">
             <h2 class="title is-2 is-spaced"> {{title}}</h2>
             <p class="subtitle"> <strong>Dirección: </strong> Estamos en {{direccion}}</p>
             <p class="subtitle is-hidden-mobile"> <strong>Horario: </strong> Lunes a Viernes: 8:00 a 13:30 y de 16:00 a 20:30 y Sábados: 9:30 a 13.00</p>
                 <span class="tag is-info is-large">Telf.: 928 795 761</span>
                 <h1 class="title is-hidden-desktop"></h1>
                 <span class="is-hidden-mobile tag is-info is-large">Fax: 928 125 274 </span>
         </div>
     </div>
     <div class="columns is-centered">
       <div class="column is-4">
        <span class="icon has-text-success is-large">
          <a href="#facebook"> <i class="fa fa-facebook fa-2x"></i> </a>
        </span>
        <span class="icon has-text-success is-large">
          <a href="#twitter"> <i class="fa fa-twitter fa-2x"></i> </a>
        </span>
        <span class="icon has-text-success is-large">
          <a href="#instagram"> <i class="fa fa-instagram fa-2x"></i> </a>
        </span>
       </div>
     </div>
  </div>
  </div>
  </footer>
</template>

<script>

export default{
  name: 'Footer',
  data () {
    return {
      title: 'VPcars',
      subtitle: 'Ubicanos en:',
      direccion: 'Avd de Canarias 89 -Frente a la Cruz Roja-, Vecindario (Gran Canaria) ',
      subtitle2: 'Nuestras Redes Sociales:'
    }
  }
}
</script>

<style lang="scss">
    .footer {
      background-image: url('./assets/footer_1.jpg') !important;
      background-size: cover !important;
    }
</style>

<style scoped>
    .title{
        color: #ad0909 !important;
        font-family: 'Kaushan Script', cursive;
    }
    p{
        color: white;
    }
    strong{
       color: #ad0909 !important;
    }
    a:hover{
      color: white !important;
    }
</style>
