# Portfólio Acadêmico - ADS

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

Website pessoal desenvolvido para centralizar minha trajetória estudantil, projetos e pesquisas, além de competências técnicas na área de Análise e Desenvolvimento de Sistemas.

## Visualizar Projeto
O projeto está publicado em:  
**[murilo-guimaraes.github.io/website-portfolio/](https://murilo-guimaraes.github.io/website-portfolio/)**

> **Nota:** Interface em constante desenvolvimento. Feedbacks e sugestões são sempre muito bem-vindos!

---

## O que há de novo?
### Versão v14.3.26
Foco em otimização de busca e refinamento de interface.

Esta atualização tem o objetivo de tornar a navegação mais simples e organizada com ferramentas que facilitam a busca por projetos e garantem que o site continue fácil de usar mesmo quando houver muito mais conteúdo no futuro.

* **Painel de Opções Avançadas**: Implementação de uma gaveta técnica com design Glassmorphism para centralizar as ferramentas de controle da interface.
* **Lógica de Ordenação Multicritério**: Sistema que permite alternar a ordem dos projetos por Data e Nome (Crescente/Decrescente) com feedback visual dinâmico via ícones de estado.
* **Agrupamento por Prioridade de Status**: Algoritmo que reorganiza o DOM dinamicamente para priorizar projetos Finalizados, seguidos de projetos Em Andamento e Planejados.
* **Função de Reset Global**: Inclusão de um botão de limpeza (Lixeira) que restaura a ordem cronológica original e limpa todos os filtros ativos em um único clique.
* **Padronização Tipográfica**: Migração de toda a interface para a família Inter, visando otimizar a legibilidade em diferentes escalas e dispositivos.
* **Otimização de Navegação**: Realocação estratégica do Colaboratory no menu superior para melhorar o fluxo de trabalho.
---

## Funcionalidades e Tecnologias
* **Dual Mode**: Suporte a temas dinâmicos via Variáveis CSS.
* **Design Responsivo**: Layout adaptável utilizando Flexbox e Grid.
* **Desenvolvimento Native**: Lógica de interface e manipulação de DOM construída com JavaScript puro (ES6).
---

## Estrutura de Arquivos
```text
├── Colaboratory/           # Documentação executada pelo Colaboratory 
├── Pesquisas/              # Produção Científica e Acadêmica
│   ├── Imagens/            # Anexos
│   ├── PDFs/               # Documentos para download
│   └── ...                 # Relatórios técnicos (Redes, Algoritmos, etc)
├── Projetos/               # Documentação de aplicações desenvolvidas
├── index.html              # Core da aplicação
├── script.js               # Inteligência de interatividade e temas
├── style.css               # Design system, animações e efeitos de luz
└── stylepesquisa.css       # Base de estilo das pesquisas e relatórios



