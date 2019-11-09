import SimpleSnackbar from '../../../../src/simpleSnackbar';

let count = 0;

const snackbars = [
    {
        message: 'This is a default message!',
        type: 'default',
    },
    {
        message: 'Form submitted.',
        type: 'success',
    },
    {
        message: 'Isn\'t this tiny plugin awesome?',
        type: 'info',
    },
    {
        message: 'You will need to update your browser soon.',
        type: 'warning',
    },
    {
        message: 'Please fix the validation errors.',
        type: 'danger',
    },
];

document.querySelector('.demo-js').addEventListener('click', () => {
    const snackbar = new SimpleSnackbar(snackbars[count].message, {
        type: snackbars[count].type,
    });

    snackbar.show();
    count += 1;

    if (count === 5) {
        count = 0;
    }
});
