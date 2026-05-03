import { ClienteView } from "./view/clienteView.js";
import { FormView } from "./view/formView.js";
import { clientesCache } from "./model/logica.js";
import Cliente from "./model/cliente.js";

const tbody = document.querySelector('#cliente-table tbody');
const formButton = document.getElementById('add-cliente-btn');

const clienteView = new ClienteView();
const formView = new FormView();

// Adicionando clientes de exemplo para teste (substituir por chamadas do controller, quando implementado)
const clienteA = new Cliente({'nome': 'John Doe', 'nascimento': '03/05'});
const clienteB = new Cliente({'nome': 'Jane Smith', 'nascimento': '15/08'});

clientesCache.set('abc123', clienteA);
clientesCache.set('def456', clienteB);

clienteView.render(clientesCache);

tbody.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const action = button.dataset.action;
    const key = button.dataset.key;
    const cliente = clientesCache.get(key);
    console.log(action, key);

    if(!cliente) {
        console.warn(`Cliente com chave ${key} não encontrado.`);
        return;
    }

    // Verifica se a ação é de registrar visita
    if (action === 'visita') {
        // Substituir por chamada do controller, quando implementado
        cliente.registrarVisita(); 
        clienteView.update(cliente, key);
        return;
    }

    if (action === 'editar') {
        event.stopPropagation();
        formView.show();
        formView.render(clientesCache.get(key));
        return;
    }
});


formButton.addEventListener('click', (event) => {
    // Lógica para mostrar o formulário de cadastro (substituir por chamada do controller, quando implementado)
    event.stopPropagation();
    formView.show();
});