class ColecaoUsuarios {
    constructor() {
        this.usuarios = [];

    }

    adicionar(usuario) {
        this.usuarios.push(usuario)
    }

    obterTodos() {
        for (let i = 0; i < this.usuarios.length; i++) {
            console.log(this.usuarios[i]);
        }
    }
}

const Usuarios = new ColecaoUsuarios();

Usuarios.adicionar({ id: 1, nome: 'João', email: 'joao@example.com' });
Usuarios.adicionar({ id: 2, nome: 'Maria', email: 'maria@example.com' });
Usuarios.adicionar({ id: 3, nome: 'Pedro', email: 'pedro@example.com' });

const iterator = Usuarios.obterTodos();

