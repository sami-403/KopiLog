import { ClienteView } from "./view/clienteView.js";
import { clientesCache } from "./model/logica.js";
import Cliente from "./model/cliente.js";

const tbody = document.querySelector('#cliente-table tbody');

const clienteView = new ClienteView();

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

    // Verifica se a ação é de registrar visita
    if (action === 'visita') {
        // Substituir por chamada do controller, quando implementado
        const cliente = clientesCache.get(key);
        if (cliente) {
            cliente.registrarVisita(); 
            clienteView.update(cliente, key);
        }
    }
});


