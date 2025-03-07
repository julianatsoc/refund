# 💰 Gerenciador de Despesas

Este é um projeto de gerenciamento de despesas desenvolvido em JavaScript. A interface foi baseada no design disponibilizado no Figma pela Rocketseat. Além das funcionalidades propostas, implementei o **localStorage** para persistir os dados das despesas, permitindo que elas sejam mantidas mesmo após o fechamento ou recarregamento da página.

![Gerenciador de tarefas](https://repository-images.githubusercontent.com/933393997/78446c01-f615-4d4b-8394-abcfd1a58ae1)


## 🚀 Funcionalidades

- **➕ Adição de Despesas**
  Permite cadastrar uma nova despesa com os seguintes dados:

  - 🏷️ Nome da despesa
  - 📂 Categoria (selecionada via dropdown)
  - 💲 Valor (formatado em Real - R$)

- **💎 Formatação de Valores**
  Conforme o usuário digita, o valor é automaticamente formatado para o padrão monetário brasileiro (ex.: **R$ 32,00**).

- **📊 Cálculo de Totais**
  O sistema calcula e exibe:

  - 📌 A quantidade total de despesas cadastradas.
  - 📈 O valor total acumulado das despesas.

- **🗑️ Remoção de Despesas**
  Possibilidade de remover despesas individualmente, com atualização automática dos totais e contagem.

- **💾 Persistência de Dados com localStorage**
  Todas as despesas cadastradas são salvas no `localStorage`, garantindo que os dados permaneçam mesmo após o recarregamento da página.

## 🛠️ Tecnologias Utilizadas

- **📜 JavaScript**: Lógica de negócio e manipulação do DOM.
- **💾 localStorage**: Persistência dos dados no navegador.

## 🌍 Acesse o Projeto

🔗 Você pode acessar a versão hospedada do projeto na Vercel:
[👉 https://refund-murex.vercel.app/](https://refund-murex.vercel.app/)

## 🎨 Créditos

- **🖌️ Figma**: Layout e design disponibilizados pela [Rocketseat](https://www.figma.com/community/file/1360316109107378379/sistema-de-reembolso).

## 💡 Considerações Finais

Este projeto foi desenvolvido com o objetivo de praticar a manipulação do DOM, a formatação de valores e o uso do `localStorage` para persistência dos dados.
