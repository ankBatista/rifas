<template>
  <div class="magin">
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Rifa da Eula</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Minhas cotas</a>
          </li>

          
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  NavComponent: 'NavComponent',
  components: {
   
  }
}
</script>

<style>
.magin {
  margin-bottom: 2%;
}

</style>