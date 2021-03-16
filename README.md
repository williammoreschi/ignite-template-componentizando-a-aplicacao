![image](https://user-images.githubusercontent.com/2512512/111013025-bd4c2700-837c-11eb-96bd-e35dd94de39d.png)
# Desafio 02 - Componentizando a aplicação

Principal objetivo é refatorar uma página para listagem de filmes de acordo com gênero. 

## Especificação

Criar pelo menos os componentes SideBar e Content que já estão com os arquivos criados

[x] - **src/components/Content.tsx**

Esse componente, ainda vazio, deve possuir toda a lógica e corpo responsável pelo header e conteúdo da aplicação *(seção contornada em vermelho)*:

![image](https://user-images.githubusercontent.com/2512512/111245787-f0442400-85e3-11eb-8ff2-9ab1a2bd10ce.png)

[x] - **src/components/Content.tsx**

Esse componente, também vazio, deve possuir toda a lógica e corpo responsável pela seção que contém o título do site e a parte de navegação à esquerda da página *(seção contornada em vermelho)*: 

![image](https://user-images.githubusercontent.com/2512512/111245892-1ff32c00-85e4-11eb-979a-fb26e62ff8cd.png)

### A aplicação ao final!!!
![image](https://user-images.githubusercontent.com/2512512/111246649-6b5a0a00-85e5-11eb-84f4-602ca5ffb5af.gif)


### Caso queira testar a aplicação em seu pc ou notebook.

![image](https://user-images.githubusercontent.com/2512512/111247664-2afb8b80-85e7-11eb-9225-ef58f4490243.gif)

```shell
git clone https://github.com/williammoreschi/ignite-template-componentizando-a-aplicacao.git

cd ignite-template-componentizando-a-aplicacao

# você pode usar o yarn ou npm nesse projeto vc precisa usar dois terminais

# instalar as dependências 
yarn install

# Terminal 01 executar o projeto ele vai rodar na porta 8080
yarn dev 

# Terminal 02 executar fake API ele vai rodar na porta 3333
yarn server

#--------------

npm install

npm run dev

npm run server

# Encerrar ativado no Terminal 01 ou 02 o comando é: Ctrl + c
```