class Texto {
    constructor(conteudo) {
        this.conteudo = conteudo;
    }

    renderizar() {
        return this.conteudo;
    }
}

class TextoNegrito extends Texto {
    renderizar() {
        return `<b>${super.renderizar()}</b>`;
    }
}

class TextoItalico extends Texto {
    renderizar() {
        return `<i>${super.renderizar()}</i>`;
    }
}

class TextoSublinhado extends Texto {
    renderizar() {
        return `<u>${super.renderizar()}</u>`;
    }
}

class TextoSublinhadoNegrito extends Texto {
    renderizar() {
        return `<u><b>${super.renderizar()}</b></u>`;
    }
}

const texto = new Texto('Olá, mundo!');
const textoNegrito = new TextoNegrito('Olá, mundo!');
const textoItalico = new TextoItalico('Olá, mundo!');
const textoItalicoNegrito = new TextoItalico(textoNegrito.renderizar());
const textoSublinhado = new TextoSublinhado('Olá, mundo!');
const textoSublinhadoNegrito = new TextoSublinhadoNegrito('Olá, mundo!');

console.log(textoSublinhadoNegrito.renderizar());