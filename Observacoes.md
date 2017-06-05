- `<header>` Define o topo de uma sessão ou página.

```
<body>
// TOPO DA PÁGINA
    <header>
        <h1>Some fictional company Website</h1>
    </header>
    <article>
    // TOPO DA SESSÃO
        <header>
            <h1>Our first new Article</h1>
        </header>
        …
</body>

```

Note que ele está sendo usado como o topo de `</article>`

- O uso de `<header>` e `<footer>` não agarante o posicionamento do mesmo, ou seja, ele tem uso semântico.

- `<nav>` usado para descrever o menu, normalmente contem o links principais, enquanto links favoritos poderiam está em um `<aside>`

- `<section>`: Tomando como base um artigo de registro, toda artigo tem sessões referente ao mesmo, a ideia mantem a mesma. 
- Note que o `<h1>` segue uma hierarguia, ou sejá, se ele está no primeiro nível, ele é o maior, se ele está dentro de uma `<article>` já começa a ficar menor, e assim por diante.

- The <aside> element defines any content that doesn’t fall within the main flow or main content of the current page—for example, a sidebar, a note, an alert, or an advertisement. 

- Note que o <aside> só tem valor semantico, para dizer que será colocado ao lado, depois que aplicarmos uma css para colocar ele em seu lugar.