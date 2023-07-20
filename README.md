## pet-solidario

1. Projeto da disciplina Engenharia de Software
2. O Pet Solidário é uma aplicação web para adoção de pets.

- ### Motivação
Esse projeto foi iniciado durante a disciplina de Engenharia de Software, ministrada pela professora Angélica Felix. A ideia surgiu a partir da observação de problemas recorrentes em nosso dia a dia.

Muitas cidades sofrem com um grande número de animais em situação de rua, o que muitas vezes causa transtornos em diversos outros âmbitos, como na saúde e no trânsito. Um outro problema que pode ser notado é o fato de que muitas pessoas acabam não tendo condições de dar todos os cuidados necessários para seus animais de estimação e muitas vezes acabam não encontrando alguém que tenha interesse em adotá-los.

O Pet Solidário foi pensado para ajudar a reduzir esses problemas, tentando encontrar um lar para animais desamparados, servindo como uma linha de comunicação entre aqueles que querem adotar e os que desejam colocar um animal para a adoção.

- ### Tecnologias
Muitas tecnologias e conceitos foram utilizados no desenvolvimento do Pet Solidário.

No frontend a principal tecnologia utilizada foi a biblioteca React, aplicada na estruturação da interface do usuário, juntamente com o TailwindCSS para a estilização e responsividade (ainda em desenvolvimento). 

Já no backend o Express foi o framework escolhido para o desenvolvimento da API da aplicação (é possível notar que a organização de pastas e arquivos dessa parte do projeto não se encontra na sua forma ideal, mas uma atualização está sendo desenvolvida para resolver esse problema)

O JWT foi o método escolhido para realizar a funcionalidade de autenticação do usuário no sistema.

Um outro ponto que vale destacar em relação a parte de infraestrutura foi a escolha do banco de dados MongoDB, por conta da familiaridade da equipe com essa tecnologia. Vale ressaltar que duas diferentes instâncias do Mongo são utilizadas nesse projeto, uma delas é usada localmente em ambiente de desenvolvimento, iniciada com o auxílio do Docker, já a outra corresponde ao ambiente de produção e é alocada através do Atlas.

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
