import { calcularDesconto } from "../utils/Descontos.js";
import { formatarPercentual } from "../utils/Descontos.js";

export class ClienteView {
    render(clientes) {
        const clienteTable = document.getElementById('cliente-table');
        const tbody = clienteTable.querySelector('tbody');
        tbody.innerHTML = '';
        

        clientes.forEach((cliente, key) => {
            const row = document.createElement('tr');
            row.dataset.key = key;
            row.id = `cliente-${key}`;
            row.innerHTML = `
                <td>${key}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.nascimento}</td>
                <td>${cliente.qntVisitou}</td>
                <td>${calcularDesconto(cliente, true)}%</td>
                `;
            tbody.appendChild(row);
        });
    }

    update(cliente, key) {
        const row = document.getElementById(`cliente-${key}`);
        if (row) {
            row.innerHTML = `
                <td>${key}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.nascimento}</td>
                <td>${cliente.qntVisitou}</td>
                <td>${calcularDesconto(cliente, true)}%</td>
                `;
        } else {
            console.warn(`Cliente com chave ${key} não encontrado para atualização.`);
        }
    }
}