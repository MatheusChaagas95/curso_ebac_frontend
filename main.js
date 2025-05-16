function MeiosDePagamento(valor, descricao) {
    this.valor = valor;
    this.descricao = descricao;
    this.status = 'pendente';
    this.dataPagamento = null;

    this.getValor = function () {
        return this.valor;
    }

    this.setValor = function (valor) {
        if (typeof valor === 'number' && valor > 0) {
            this.valor = valor;
        }
    }

    this.getDescricao = function () {
        return this.descricao;
    }

    this.pagar = function () {
        this.status = 'pago';
        this.dataPagamento = new Date();
    }

    this.getStatus = function () {
        return this.status;
    }

    this.getDataPagamento = function () {
		return this.dataPagamento.toLocaleString('pt-BR', {
        	timeZone: 'America/Sao_Paulo',
        	day: '2-digit',
        	month: '2-digit',
        	year: 'numeric',
        	hour: '2-digit',
        	minute: '2-digit'
    	});
    }

	this.valorTotal = function () {
		return this.getValor();
	}
}

function CartaoCredito(valor, descricao, parcelas, bandeira) {
    this.parcelas = parcelas;
    this.bandeira = bandeira;

	this.autorizarCartao = function () {
        console.log(`Cartão de crédito ${this.bandeira} autorizado com parcelas de ${this.parcelas}x de R$${this.calcularParcelas()}.`);
        this.pagar();
    }

    this.calcularParcelas = function () {
        return this.getValor() / this.parcelas;
    }

    MeiosDePagamento.call(this, valor, descricao);
}

function CartaoDebito(valor, descricao, bandeira) {
    this.bandeira = bandeira;

	this.autorizarCartao = function () {
        console.log(`Cartão de débito ${this.bandeira} autorizado.`);
        this.pagar();
    }

    MeiosDePagamento.call(this, valor, descricao);
}

function Pix(valor, descricao, chavePix) {
    this.chavePix = chavePix;

    this.confirmarPagamento = function () {
        this.pagar();
        return `Pagamento de R$${this.getValor()} realizado via Pix para chave ${this.chavePix}`;
    }

    this.enviarPix = function () {
        console.log(`Enviando Pix para chave ${this.chavePix} no valor de R$${this.getValor()}...`);
    }

	MeiosDePagamento.call(this, valor, descricao);
}

const pagamento1 = new CartaoCredito(1200, 'Notebook', 6, 'Mastercard');
pagamento1.autorizarCartao();
console.log('Status:', pagamento1.getStatus());
console.log('Data de pagamento:', pagamento1.getDataPagamento());
console.log('Valor total:', 'R$' + pagamento1.valorTotal());

const pagamento2 = new CartaoDebito(500, 'Celular', 'Visa');
pagamento2.autorizarCartao();
console.log('Status:', pagamento2.getStatus());
console.log('Data de pagamento:', pagamento2.getDataPagamento());
console.log('Valor total:', 'R$' + pagamento2.valorTotal());

const pagamento3 = new Pix(300, 'Desktop', 'matheus_chagas@pix.com');
pagamento3.enviarPix();
console.log(pagamento3.confirmarPagamento());
console.log('Status:', pagamento3.getStatus());
console.log('Data de pagamento:', pagamento3.getDataPagamento());
console.log('Valor total:', 'R$' + pagamento3.valorTotal());