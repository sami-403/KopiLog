export class FormView {
    form = document.getElementById('cliente-form');
    
    show() {
        this.form.style.display = 'block';

        this._outsideCLickHandler = document.addEventListener('click', (event) => {
            const isClickInsideForm = this.form.contains(event.target);
            if (!isClickInsideForm) {
                this.hide();
            }
        });
    }

    hide() {
        this.form.style.display = 'none';
        this.clear();

        document.removeEventListener('click', this._outsideCLickHandler);
    }

    clear() {
        this.form.querySelector('#nome').value = '';
        this.form.querySelector('#nascimento').value = '';

        const feedback = this.form.querySelector('.error-feedback');
        if (feedback) {
            feedback.remove();
        }
    }

    render(cliente) {
        this.form.querySelector('#nome').value = cliente.nome;
        this.form.querySelector('#nascimento').value = cliente.nascimento;
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