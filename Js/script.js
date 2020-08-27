// Instanciando os Botões
const txtArea = document.querySelector('.txtArea')
const btnNegrito = document.querySelector('.btnNegrito');
const btnItalico = document.querySelector('.btnItalico');
const btnSublinhado = document.querySelector('.btnSublinhado');
const btnEspacamento = document.querySelector('.btnEspacamento');
const btnReset = document.querySelector('.rst')

// Declarando Funções
const atualizarItalico = () => {
    if (txtArea.className != 'txtAreaItalic' ) {
        txtArea.classList += ' txtAreaItalic';
    } else {
        txtArea.classList = 'txtArea';
    }
}

const atualizarNegrito = () => {
    if (txtArea.className != 'txtAreaNegrito') {
        txtArea.classList += ' txtAreaNegrito'
    } else {
        txtArea.classList = 'txtArea';
    }
}

const atualizarSublinhado = () => {
    if (txtArea.className != 'txtAreaSublinhado') {
        txtArea.classList += ' txtAreaSublinhado'
    } else {
        txtArea.classList = 'txtArea';
    }
}

const aumentarFonte = () => {
    if (txtArea.className != 'txtAreaFonteAumentada') {
        txtArea.classList += ' txtAreaFonteAumentada'
    } else {
        txtArea.classList = 'txtArea';
    }
}

const resetarAtributos = () => {
    txtArea.classList = 'txtArea';
}

// Delegação de Eventos aos Botões
btnItalico.addEventListener('click', atualizarItalico);
btnNegrito.addEventListener('click', atualizarNegrito);
btnSublinhado.addEventListener('click', atualizarSublinhado);
btnEspacamento.addEventListener('click', aumentarFonte)
btnReset.addEventListener('click', resetarAtributos);