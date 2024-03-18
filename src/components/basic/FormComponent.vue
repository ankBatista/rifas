<template>
    <div>
        <div v-if="loading" class="text-center mt-5">
            <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Carregando...</span>
            </div>
            <p>Carregando...</p>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <form class="row g-3 needs-validation" novalidate>
                    <div class="col-md-6">
                        <label for="validationCustom01" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="payer_first_name" v-model="payer_first_name"
                            required>
                        <div class="valid-feedback">
                            Muito bem!
                        </div>
                    </div>
                    <div class="col-md-6">
                        <label for="validationCustom02" class="form-label">Sobrenome</label>
                        <input type="text" class="form-control" id="payer_last_name" v-model="payer_last_name" required>
                        <div class="valid-feedback">
                            Muito bem!
                        </div>
                    </div>


                    <div class="col-md-6">
                        <label for="validationCustomUsername" class="form-label">Email</label>
                        <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend">@</span>

                            <input type="email" class="form-control" id="payer_email" v-model="payer_email"
                                aria-describedby="inputGroupPrepend" required>

                            <div class="invalid-feedback">
                                Insera um email Valido.
                            </div>
                        </div>
                    </div>


                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">CPF</label>
                        <input type="text" class="form-control" id="payer_identification_number"
                            v-model="payer_identification_number" required>
                        <div class="invalid-feedback">
                            É necessario adicionar um CPF
                        </div>
                    </div>

                    <div class="col-md-6">
                        <label for="validationCustom03" class="form-label">WhatsApp</label>
                        <input type="text" class="form-control" id="payer_phone_number" v-model="payer_phone_number"
                            required>
                        <div class="invalid-feedback">
                            É necessario adicionar um Telefone
                        </div>
                    </div>


                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-8">
                                <label for="customRange1" class="form-label">Quantidade</label>
                                <input type="range" min="1" max="10" class="form-range" id="quantity"
                                    v-model.number="quantity">
                                <span>{{ quantity }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text">R$</span>
                        <input type="text" class="form-control" id="valor" v-model.number="totalValue">
                    </div>


                </form>
                <div class="col-12">
                    <button @click="SalvarOrdem" class="btn btn-primary" type="submit">Gerar Numero</button>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'FormComponent',
    data() {
        return {
            payer_email: 'teste@uorak.com',
            payer_first_name: 'Primeironome',
            payer_last_name: 'Sobrenome',

            payer_identification_number: '611.500.553-16',
            payer_phone_number: '(11) 9 9999-8888',
            quantity: 1,

            valor: 0.3,
            loading: false
        };
    },
    computed: {
        totalValue() {
            return (this.valor * this.quantity).toFixed(2); // Formatar para duas casas decimais
        }
    },

    methods: {
        async SalvarOrdem() {
            try {
                this.loading = true;
                const url = 'https://mp.wbpremium.site/api/'; // URL da API
                const bodyData = {
                    title: 'Brisqueta',
                    payer_email: this.payer_email,
                    payer_first_name: this.payer_first_name,
                    payer_last_name: this.payer_last_name,
                    payer_identification_number: this.payer_identification_number,
                    payer_identification_type: 'cpf',
                    payer_phone_area_code: '55',
                    payer_phone_number: this.payer_phone_number,
                    quantity: this.quantity,
                    unit_price: 0.3, // this.valor,
                    status: 'Criado',
                };

                // Primeira solicitação para salvar a ordem
                const response = await axios.put(url + 'pay', bodyData);

                // Extrair ID recebido da resposta
                const data = response.data;

                // Recebe o link de pagamento
                console.log('Link Pagador:', data.init_point);


                // Redirecionar o usuário para o link de pagamento
                window.location.href = data.init_point;

                this.loading = false;




            } catch (error) {
                console.error(error);
                alert('Ocorreu um erro inesperado.');
                this.loading = false;
            }
        }
    }

}
</script>

<style>
/* Estilos para o spinner de loading */
.spinner-border {
    width: 3rem;
    height: 3rem;
    margin-top: 50px;
}
</style>