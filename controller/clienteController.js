import { dataInputFormatada } from "../utils/Data.js";

export class ClienteController {
    constructor(model, view, formView) {
        this.model = model;
        this.view = view;
        this.formView = formView;
    }

    adicionarCliente(data) {
        const { id, cliente } = this.model.criarCliente(data);
        this.view.render(this.model.pegarClientes());
        return { id, cliente };
    }

    registrarVisita(id) {
        const cliente = this.model.buscarCliente(id);
        if (cliente) {
            cliente.registrarVisita();
            this.view.update(cliente, id);
        }
    }

    removerCliente(id) {
        if (this.model.removerCliente(id)) {
            this.view.render(this.model.pegarClientes());
        }
    }
}