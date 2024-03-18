<template>
    <div>
        <br>
        <table class="table">
            <br>
            <h3>Participantes:</h3>
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Nº Cotas</th>

                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Welton</td>
                    <td>01</td>

                </tr>
                <tr>
                    <td>Welton</td>
                    <td>01</td>
                </tr>
                <tr>
                    <td>Welton</td>
                    <td>01</td>
                </tr>
            </tbody>
        </table>
        <FormComponent />

    </div>


</template>

<script>
import FormComponent from '@/components/basic/FormComponent.vue';

export default {
    name: 'TableComponent',

    components: {
        FormComponent,
    }

}
</script>

<style></style>
