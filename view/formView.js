export class FormView {
    form = document.getElementById('form-container');
    formCard = this.form.querySelector('.form-card');
    
    show() {
        this.form.classList.remove('hidden');

        if (this._outsideClickHandler) {
            document.removeEventListener('click', this._outsideClickHandler);
        }

        this._outsideClickHandler = (event) => {
            const isClickInsideForm = this.formCard.contains(event.target);
            if (!isClickInsideForm) {
                this.hide();
            }
        };

        document.addEventListener('click', this._outsideClickHandler);
    }

    hide() {
        this.form.classList.add('hidden');
        this.clear();

        if (this._outsideClickHandler) {
            document.removeEventListener('click', this._outsideClickHandler);
            this._outsideClickHandler = null;
        }
    }

    clear() {
        this.clearId();
        this.form.querySelector('#input-nome').value = '';
        this.form.querySelector('#input-nascimento').value = '';

        const feedback = this.form.querySelector('.error-feedback');
        if (feedback) {
            feedback.remove();
        }
    }

    render(cliente, id) {
        this.editingId = id;
        this.form.querySelector('#input-nome').value = cliente.nome;
        this.form.querySelector('#input-nascimento').value = cliente.nascimento;
    }

    clearId() {
        this.editingId = null;
    }

    errorFeedback(message) {
        this.form.style.borderColor = 'red';

        const feedback = document.createElement('p');
        feedback.className = 'error-feedback';
        feedback.textContent = message;
        feedback.style.color = 'red';
        this.form.appendChild(feedback);
    }
}