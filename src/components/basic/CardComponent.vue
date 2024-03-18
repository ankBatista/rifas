<template>
    <div class="d-flex justify-content-center">
        <div class="card p-2">
            <img src="img/capa.jpg" class="card-img-top tamanho" alt="...">
            <div class="card-body d-flex flex-column justify-content-center">
                <h5 class="card-title">Rifa entre amigos</h5>
                <p class="card-text">Valendo uma cesta de chocolate ou R$xx,xx no PIX!</p>
                <p class="card-text">
                    <a href="#" class="stretched-link text-danger" style="position: relative;">O Sorteio será no dia
                        xx/xx/2024 às 00:00h em uma live!</a>
                </p>
                <h1>Valor da cota R$10,00</h1>
                <p>Adquira suas cotas agora mesmo <a href="">CLICANDO AQUI</a></p>
            </div>
        </div>
    </div>
    <br>
</template>

<script>
export default {
    name: 'CardComponent',

}

</script>

<style>
.tamanho {
    width: 100%;
    height: auto;
}
</style>
