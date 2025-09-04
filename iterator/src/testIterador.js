const ColecaoUsuarios = require('./ColecaoUsuarios');
const ColecaoProdutos = require('./ColecaoProdutos');

const usuarios = new ColecaoUsuarios();

usuarios.adicionar({ id: 1, nome: 'João', email: 'joao@example.com' });
usuarios.adicionar({ id: 2, nome: 'Maria', email: 'maria@example.com' });
usuarios.adicionar({ id: 3, nome: 'Pedro', email: 'pedro@example.com' });


console.log('\n\nIterando sobre a coleção de usuários:');
const iterador = usuarios.criarIterador();
while (iterador.hasNext()) {
    console.log(iterador.next());
}

console.log('\n\nIterando sobre a coleção de usuários de trás para frente:');
while (iterador.hasPrevious()) {
    console.log(iterador.previous());
}

console.log('\n\nIterando sobre a coleção de produtos:');
const produtos = new ColecaoProdutos();

produtos.adicionar({ id: 1, nome: 'Produto 1', preco: 100 });
produtos.adicionar({ id: 2, nome: 'Produto 2', preco: 200 });
produtos.adicionar({ id: 3, nome: 'Produto 3', preco: 300 });

const iteradorProdutos = produtos.criarIterador();
while (iteradorProdutos.hasNext()) {
    console.log(iteradorProdutos.next());
}