# 💻 Aulas JavaScript – Generation Brasil

Este repositório contém os códigos desenvolvidos durante as aulas de **Introdução ao JavaScript**, na trilha de Desenvolvedor(a) Full-Stack da **Generation Brasil**.

As aulas têm foco nos seguintes conceitos fundamentais:

- Entrada e saída de dados no console
- Declaração de variáveis usando `let` e `const`
- Operadores aritméticos
- Conversão de valores
- Lógica básica de programação

---

## 📂 Estrutura da Pasta

projetojavascriptAula/
├── Calculadora.js → Conversão de Celsius para Fahrenheit
├── EntradaSaida.js → Exemplo de entrada e saída de dados
├── VariaveisConstantes.js → Declaração de variáveis e constantes
└── README.md → Descrição do projeto

---

## 🧠 Conceitos Trabalhados

### 📌 Declaração de Variáveis

````js
let nome = "Wesley";
const PI = 3.14;

📌 Entrada e Conversão de Dados
const leia = require("readline-sync");
let numero = leia.questionFloat("Digite um número: ");

📌 Operações Matemáticas
let fahrenheit = (celsius * 1.8) + 32;

📌 Exibição no Console
console.log("Resultado:", valor);

▶️ Como Executar os Arquivos

No terminal, dentro da pasta do projeto, execute:

node nome-do-arquivo.js


Exemplo:

node Calculadora.js

🔗 Tecnologias Utilizadas

JavaScript

Node.js

VS Code

✨ Autora

Thatiana Mattos
Desenvolvedora Full-Stack em Formação | Generation Brasil
GitHub: https://github.com/ThatianaMattos


---

### 🎯 Agora faça isso no VS Code:

1. Clique na pasta `projetojavascriptAula`
2. Clique **com o botão direito** → **New File**
3. Nomeie como **README.md**
4. Cole o conteúdo acima
5. Salve (`Ctrl + S`)

---

### 🚀 Depois disso, vamos enviar pro GitHub

No terminal, execute **nesta ordem**:

```bash
git add .
git commit -m "Adicionando README e arquivos das aulas"
git branch -M main
git remote add origin https://github.com/ThatianaMattos/projetojavascriptAula.git
git push -u origin main
````
