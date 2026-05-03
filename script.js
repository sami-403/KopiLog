import { ClienteView } from "./view/clienteView.js";
import { clientesCache } from "./model/logica.js";
import Cliente from "./model/cliente.js";
const clienteView = new ClienteView();
const renderButton = document.getElementById('btn-render');

clientesCache.set('abc123', new Cliente({'nome': 'John Doe', 'nascimento': '1990-01-01'}))

clienteView.render(clientesCache);

console.log(clientesCache)

renderButton.addEventListener('click', () => {
    clienteView.render(clientesCache);
})
