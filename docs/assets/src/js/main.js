import SimpleSnackbar from '../../../../src/simpleSnackbar';

document.querySelector('.demo-js').addEventListener('click', () => {
    new SimpleSnackbar('This is a message!').show();
});
