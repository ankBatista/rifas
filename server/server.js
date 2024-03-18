const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/pagar-pix', async (req, res) => {
    try {
        const pagamento = await realizarPagamentoPIX(req.body);
        res.json(pagamento);
    } catch (error) {
        console.error(error);
        res.status(500).send('Erro ao processar o pagamento via PIX');
    }
});

// Rota para receber notificações do MercadoPago
app.post('/mercadopago-webhook', (req, res) => {
    console.log('Recebendo notificação do MercadoPago:', req.body);
    // Aqui você pode processar a notificação e atualizar o estado do pagamento, por exemplo
    res.status(200).send('OK');
});

// Função para realizar um pagamento via PIX com o MercadoPago
async function realizarPagamentoPIX(dadosPagamento) {
    try {
        const response = await axios.post('https://api.mercadopago.com/v1/payments', {
            transaction_amount: dadosPagamento.transaction_amount,
            description: dadosPagamento.description,
            payment_method_id: 'pix',
            payer: {
                email: dadosPagamento.email
            },
            notification_url: 'https://nature.wbpremium.com/mercadopago-webhook' // URL do webhook para receber notificações
        }, {
            headers: {
                Authorization: 'Bearer APP_USR-2361910189048781-102409-6df3dc74bf96ce7d19bfde146ad8e712-51062712',
                Acept: 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
