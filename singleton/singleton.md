# Singleton

## Padrão criacional -> Objetos


### Vantagens
- Garante que uma classe tenha apenas **uma instância** em todo o programa
- Fornece um **ponto único** de acesso a esta instância sem possibilidade de sobrescrição acidental como nas variáveis globais
- A instância só é criada quando necessário **lazy-loading**

### Desvantagens
- Viola o princípio de responsabilidade única: além de gerir a si, é preciso gerenciar o processo de instanciação
- Em ambientes de multithread há um trabalho adicional para se garantir que haja apenas uma instância do objeto e não uma instância por thread
- Pode dificultar muito os testes unitários se optarmos por um construtor privado para a nossa classe