# Lista de Tarefas

Este é um projeto de uma Lista de Tarefas (To-Do List) desenvolvido com JavaScript puro (Vanilla JS). A aplicação permite gerenciar tarefas do dia a dia com persistência de dados no navegador.

## Funcionalidades

- **Adicionar Tarefa**: Campo de entrada para digitar e incluir novas tarefas na lista.
- **Remover Tarefa**: Cada item da lista possui um botão "Deletar" para remoção individual.
- **Persistência de Dados**: Utiliza o `localStorage` para salvar as tarefas, garantindo que elas permaneçam na lista mesmo após fechar ou atualizar a página.
- **Validação Simples**: Impede a adição de tarefas vazias.

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização dos elementos (arquivo `style.css` esperado).
- **JavaScript**: Lógica de manipulação do DOM e armazenamento local (`script.js`).

## Como Executar

1. Certifique-se de ter os arquivos `index.html`, `style.css` e `script.js` na mesma pasta.
2. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge, etc).

## Estrutura do Código

O arquivo `script.js` contém funções principais como:
- `Alimentarlista()`: Adiciona itens ao array e atualiza a interface.
- `renderizarlista()`: Gera o HTML da lista dinamicamente usando `map`.
- `deletarTarefa(index)`: Remove itens pelo índice e atualiza o armazenamento.