## pet-solidario

1. Projeto da disciplina Engenharia de Software
2. O Pet Solidário é uma aplicação web para adoção de pets.

- ### Motivação
Esse projeto foi iniciado durante a disciplina de Engenharia de Software, ministrada pela professora Angélica Felix. A ideia surgiu a partir da observação de problemas recorrentes em nosso dia a dia.

Muitas cidades sofrem com um grande número de animais em situação de rua, o que muitas vezes causa transtornos em diversos outros âmbitos, como na saúde e no trânsito. Um outro problema que pode ser notado é o fato de que muitas pessoas acabam não tendo condições de dar todos os cuidados necessários para seus animais de estimação e muitas vezes acabam não encontrando alguém que tenha interesse em adotá-los.

O Pet Solidário foi pensado para ajudar a reduzir esses problemas, tentando encontrar um lar para animais desamparados, servindo como uma linha de comunicação entre aqueles que querem adotar e os que desejam colocar um animal para a adoção.

- ### Tecnologias
Para esse projeto foram usadas as seguintes tecnologias web:
1. Framework frontend: React
2. Framework backend: Express
3. Linguagens: JavaScript e TypeScript
4. Estilização: TailwindCSS
5. Banco de dados: MongoDB

Além de diversas outras bibliotecas que foram usadas para funcionalidades mais específicas.

### Passos para a instalação

Observações: o arquivo `server/docker-compose up -d` serve apenas como um exemplo, as configurações definidas nele podem ser (e é aconselhável que sejam) alteradas.

1. Para copiar o repositório use o comando `git clone https://github.com/luketeeeeee/pet-solidario.git` ou baixe o repositório para a sua máquina.

2. Entre na pasta criada do repositório clonado e crie a branch remota com o comando `git remote add origin https://github.com/luketeeeeee/pet-solidario.git`.

3. Após isso entre na pasta do projeto que foi clonado.

4. Entre na pasta `client` e execute o comando `npm install`, aguarde a instalação, quando concluída execute o comando `npm run dev`.

5. Vá até o navegador e acesse 'http://localhost:5173', volte ao terminal e digite CTRL + C para parar a aplicação, volte a pasta raiz.

6. Entre na pasta `server` e execute o camando `npm install`, aguarde a instalação, quando concluída execute o comando `npm run dev`.

### MongoDB via Docker/Docker-compose

1. Execute o comando `docker-compose up -d` para iniciar um container docker com uma imagem do mongodb
