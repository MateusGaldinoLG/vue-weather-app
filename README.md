# Vite/Vue Weather App

Esse é um microprojeto de um Weather App utilizando vite, com VueJs e SCSS. Ele é derivado de um projeto de vue3 do canal [Tyler Potts](https://www.youtube.com/watch?v=JLc-hWsPTUY&list=PLCtqzlBswQOfZq1l1gMKzCYNuQ4dJ1OAt&index=1). O projeto inicial utiliza o vue-cli, enquanto esse utiliza o vite e o SCSS.  
Planejo também construir mais coisas em cima desse projeto no futuro.  
Esse projeto também utiliza a api OpenWeather para carregar dados.  

This is a Weather App microproject using Vite, with VueJs and SCSS. It is derived from a vue3 project from the [Tyler Potts](https://www.youtube.com/watch?v=JLc-hWsPTUY&list=PLCtqzlBswQOfZq1l1gMKzCYNuQ4dJ1OAt&index=1) channel. The initial project uses the vue-cli, while this uses vite and SCSS.  
I also plan to add more functionalities in top of this project in the future.  
This project also uses the OpenWeather API to load data.

## Coisas / Remarks

Eu ainda não entendi completamente como o processo de variáveis de ambiente do Vite funciona, então decidi criar um arquivo env.js para carregar a chave da API utilizada.  
I still don't understand fully how the environment variables process from Vite works, so i decided to create an env.js file to load the API key.

## Como rodar

Para rodar, primeiro clone esse repositório em sua pasta de destino. Depois, crie uma conta na API [Open Weather](https://home.openweathermap.org/users/sign_up). Após isso, coloque a chave da API em um arquivo env.js.  

```Javascript
//env.js 
export const apiKey = '...';
```

Por fim, installe as dependências e rode o app utilizando esses comandos do NPM:

```Bash
    npm i
    npm run dev
```
