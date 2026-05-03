export class ClienteView {
    render(clientes) {
        const clienteTable = document.getElementById('cliente-table');
        const tbody = clienteTable.querySelector('tbody');
        tbody.innerHTML = '';
        clientes.forEach((element, key) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${key}</td>
                <td>${element.nome}</td>
                <td>${element.nascimento}</td>
                <td>${element.qntVisitou}</td>
                `;
            tbody.appendChild(row);
        });
    }
}