import { ClienteView } from "./view/clienteView.js";
import { FormView } from "./view/formView.js";
import ClienteModel from "./model/ClienteModel.js";
import Cliente from "./model/Cliente.js";
import { ClienteController } from "./controller/clienteController.js";

const tbody = document.querySelector('#cliente-table tbody');
const formButton = document.getElementById('add-cliente-btn');
const clienteView = new ClienteView();
const formView = new FormView();
const clienteController = new ClienteController(ClienteModel, clienteView, formView);


const clienteA = {nome: 'John Doe', nascimento: '1995-05-03'};
const clienteB = {nome: 'Jane Smith', nascimento: '1990-08-15'};

clienteController.adicionarCliente(clienteA);
clienteController.adicionarCliente(clienteB);

clienteView.render(clienteController.model.pegarClientes());

tbody.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const action = button.dataset.action;
    const key = button.dataset.key;
    const cliente = clienteController.model.buscarCliente(key);
    console.log(action, key);

    if(!cliente) {
        console.warn(`Cliente com chave ${key} não encontrado.`);
        return;
    }

    // Verifica se a ação é de registrar visita
    if (action === 'visita') {
        clienteController.registrarVisita(key);
        return;
    }

    if (action === 'editar') {
        event.stopPropagation();
        formView.show();
        formView.render(cliente, key);
        return;
    }

    if (action === 'excluir') {
        clienteController.removerCliente(key);
        return;
    }
});


formButton.addEventListener('click', (event) => {
    event.stopPropagation();
    formView.clear();
    formView.show();
});

// Listener para o submit do formulário
const form = document.getElementById('cliente-form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = document.getElementById('input-nome').value.trim();
    const nascimento = document.getElementById('input-nascimento').value;

    if (!nome || !nascimento) {
        formView.errorFeedback('Por favor, preencha todos os campos');
        return;
    }

    if (formView.editingId) {
        clienteController.atualizarCliente(formView.editingId, { nome, nascimento });
    } else {
        clienteController.adicionarCliente({ nome, nascimento });
    }
    formView.hide();
});