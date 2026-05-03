import { calcularDesconto } from "../utils/Descontos.js";
import { formatarPercentual } from "../utils/Descontos.js";

export class ClienteView {
    #montarRow(cliente, key) {
        return `
            <td>${key}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.nascimento}</td>
            <td>${cliente.qntVisitou}</td>
            <td>${calcularDesconto(cliente, true)}%</td>
            <td>
                <button type="button" class="btn-small" data-action="visita" data-key="${key}">+ Visita</button>
                <button type="button" class="btn-small" data-action="editar" data-key="${key}">Editar</button>
                <button type="button" class="btn-small" data-action="excluir" data-key="${key}">Excluir</button>
            </td>
        `;
    }

    render(clientes) {
        const clienteTable = document.getElementById('cliente-table');
        const tbody = clienteTable.querySelector('tbody');
        tbody.innerHTML = '';
        

        clientes.forEach((cliente, key) => {
            const row = document.createElement('tr');
            row.dataset.key = key;
            row.id = `cliente-${key}`;
            row.innerHTML = this.#montarRow(cliente, key);
            tbody.appendChild(row);
        });
    }

    update(cliente, key) {
        const row = document.getElementById(`cliente-${key}`);
        if (row) {
            row.innerHTML = this.#montarRow(cliente, key);
        } else {
            console.warn(`Cliente com chave ${key} não encontrado para atualização.`);
        }
    }
}