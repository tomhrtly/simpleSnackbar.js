class simpleSnackbar {
    constructor(message, options) {
        this.message = message;
        this.options = options;

        const container = document.createElement('div');
        container.classList.add('ss-container');

        const snackbars = document.createElement('div');
        snackbars.classList.add('ss-snackbars');
        snackbars.setAttribute('aria-live', 'polite');
        snackbars.setAttribute('aria-atomic', 'true');
        snackbars.append(container);

        document.querySelector('body').append(snackbars);
    }

    show() {
        const container = document.querySelector('.ss-container');
        const snackbar = document.createElement('div');

        snackbar.classList.add('ss-snackbar');
        snackbar.setAttribute('role', 'alert');
        snackbar.setAttribute('aria-live', 'assertive');
        snackbar.setAttribute('aria-atomic', 'true');
        snackbar.innerHTML = this.message;
        container.append(snackbar);
    }
}

export default simpleSnackbar;
