# Portfólio Acadêmico - ADS

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Website pessoal desenvolvido para centralizar a trajetória estudantil, projetos de pesquisa e competências técnicas na área de Análise e Desenvolvimento de Sistemas.

## Visualizar Projeto
O projeto está publicado em:  
**[murilo-guimaraes.github.io/website-portfolio/](https://murilo-guimaraes.github.io/website-portfolio/)**

> **Nota:** Interface em constante desenvolvimento. Feedbacks e sugestões são bem-vindos!

---

## Atualizações Recentes
### Versão v19.2.26
Atualização focada em aperfeiçoamento da interface e efeitos:

* Destaque de Sintaxe:** Implementação de estilização personalizada para a tag `<code>`, adicionando um fundo levemente escurecido `rgba(0,0,0,0.1)` e bordas sutis para destacar termos técnicos (`sizeof`, `int`, `RAM`) no corpo do texto.
* **Imagens, GIFs e Legendas ABNT:** Padronização das legendas de figuras (Ex: Figura 1: Descrição...), Imagens e GIFS para garantir um aspecto acadêmico e organizado.
* **Otimização de Carregamento:** Adição de Data URI para o `favicon` para evitar erros 404 desnecessários no console do navegador e agilizar o carregamento.
* **Integração Colab:** Configuração de botões de ação externa para o Google Colab, permitindo que o usuário visualize testes dinâmicos de memória e endereçamento.

---

## Funcionalidades e Tecnologias
* **Dual Mode**: Suporte a temas dinâmicos via Variáveis CSS.
* **Design Responsivo**: Layout adaptável utilizando Flexbox e Grid.
* **Desenvolvimento Native**: Lógica de interface e manipulação de DOM construída com JavaScript puro (ES6).
---

## Estrutura de Arquivos
```text
├── Pesquisas/
│   ├── Algoritmos e Programação Estruturada/
│   │   ├── Imagens/         # Evidências de código e terminal
│   │   └── algoritmos.html  # Relatório técnico de variáveis e memória
│   └── Redes de Computadores/
│       └── redes.html       # Estudos de infraestrutura
├── index.html               # Ponto de entrada principal
├── script.js                # Lógica de interatividade e carrossel
└── style.css                # Estilização global e definições de tema

