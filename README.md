

# Boas vindas ao repositório do projeto de App de Melhor preço - FullStack in Cloud

<img src="https://media.giphy.com/media/t7Rm0HO2QWr8VrWRVR/giphy.gif" />  
<img src="https://media.giphy.com/media/0lHC6XqX4Vokt58yJC/giphy.gif" />  
<img src="https://media.giphy.com/media/t7Rm0HO2QWr8VrWRVR/giphy.gif" />  

# Acesse a Aplicação
<a href="https://react-lsbuy.herokuapp.com/"><h3> App de Melhor preço - FullStack in Cloud</h3> </a>

# Sobre a Aplicação
<li> Essa é uma aplicação Fullstack feita com React, Node.js, MongoDB</li>
<li> Essa aplicação está in Cloud ou seja é uma aplicação que está rodando na nuvem</li>
<li> Essa aplicação faz uso do Heroku para a hospedagem do Front-end e do Back-end e do MongoDB Cloud para o banco de dados</li>

# Como Funciona
<li> È possível fazer o registro e os seus dados ficaram salvos no banco de dados</li>
<li> Caso exista algum erro na hora do cadastro um erro será mostrado para o usuário </li>
<li> É possível fazer o login, o seus dados serão validados, caso os dados estejam incorretos um erro será gerado</li>
<li> Caso os dados do login estejam corretos o usuário será redirecionado para a página principal</li>
<li> É possível na página principal ver as categorias disponíveis no mercado livre</li>
<li> É possível ver os produtos referentes as estas categorias</li>
<li> É possível ver as categorias e produtos dos seguintes paises : "BRASIL", "URUGUAI","CHILE", "ARGENTINA" e "PARAGUAI"</li>
<li> É possível pesquisar produtos na barra de pesquisa</li>
<li> Ao fazer pesquisas tanto na barra de pesquisas, quanto na barra de categorias os dados pesquisados serão armazenados no banco de dados </li>

# Observações Técnicas
  
<h3> Cadastro </h3>
  <p> O cadastro guardam os dados do usuário em uma instancia in Cloud do MongoDB, porém ainda não foi implementado  uma criptografia para as senhas portanto não utilize uma
  senha real, utilize uma senha qualquer para acessar a aplicação</p>

<h3> Login </h3>
  <p> Após a realização do login um token será gerado e a seguinte informação será guardada no localStorage dentro de uma chave 'user'</p>
  <li> name</li>
  <li>email</li>
  <li>token</li>
  <li>role</li>
<p> Esses dados serão utilizados para assegurar apenas que usuários cadastrados possam acessar a aplicação e isso é necessário para que o monitoramento de atividades 
seja mais efetivo</li>

<h3>Monitoramento de Atividade do Usuário</h3>
<p> Esse aplicativo monitora a atvidade do usuário sempre que o mesmo pesquisa alguma categoria ou faz uma pesquisa na barra de pesquias os seguintes dados são guardados</p>
  <li>name</li>
  <li>email</li>
  <li>Item pesquisado</li>
  
<h3> API INTERNA </h3>
<p> Para fins de avaliação foi disponibilizado rotas livre para a averiguação do funcionamento da api e do banco de dados</p>
<li> Método GET : https://api-lsbuy.herokuapp.com/user</li>
<p> Essa url retornará todos os usuários cadastrados na aplicação<p/>
<li> Método POST : https://api-lsbuy.herokuapp.com/user</li>
<p> Com essa url é póssivel cadastrar um usuário com o body:</p>
<ol> 
<li> name</li>
<li> email</li>
<li> password</li>
</ol>
<li> Método POST : https://api-lsbuy.herokuapp.com/login </li>
<p> Com essa url é possível fazer um login na aplicação com o body:</p>
<ol>
<li> email</li>
<li> password</li>
</ol>
<li> Método GET : https://api-lsbuy.herokuapp.com/tracker</li>
<p> Com essa url é possível ver toda a atividade do usuário na aplicação</li>
<li> Método POST : https://api-lsbuy.herokuapp.com/tracker</li>
<p> Com essa url é possível cadastrar uma atividade para um usuário< com o body/p>
<ol> 
<li> name</li>
<li> email</li>
<li> searchItem</li>
</ol>



<h3> Apis externas</h3>
<p> Esse aplicativo faz uso da api do mercado livre, porém o mesmo foi estruturado para tratar de uma api externa de um ecommerce independente de qual seja uma vez 
que os dados da api são tratados e o que é retornado para os componentes e um 'shape' especifico, portanto é possível adicionar outras apis e expandir a aplicação de uma maneira 
técnicamente mais simples, não foi feito dedvido a falta de outras apis 'free' que continham os mecanismos que a api do mercado livre tinha, portando foi utilizada variações da api do mercado livre para 
dar dinamicidade para a aplicação</p>

<h3> Mobile </h3>
  <p> Essa aplicação não é Mobile Friendily tendo essa feature em desenvolvimento</p>
 
  
# Tecnologias Utilizadas
<p align="center">
 <div style="background-color:black">
<div>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="html5" style="max-width:100%;" >
<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html5" style="max-width:100%;">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="html5" style="max-width:100%;">
<img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="html5" style="max-width:100%;"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="html5" style="max-width:100%;"/>
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="html5" style="max-width:100%;"/>
</div>
<div>
 <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="html5" style="max-width:100%;" />
 </div>
 <div>
<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="html5" style="max-width:100%;" />
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" style="max-width:100%;"/>
<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="html5" style="max-width:100%;" />
<img src="https://img.shields.io/badge/Insomnia-5849be?style=for-the-badge&logo=Insomnia&logoColor=white" alt="html5" style="max-width:100%;" />
 <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="html5" style="max-width:100%;" />
 <img src="https://img.shields.io/badge/Heroku-000000?style=for-the-badge&logo=herokulogoColor=white" alt="html5" style="max-width:100%;" />
</p>
</div>
# Como Rodar o projeto Localmente
<ol>
  <ul>
  <li> Git Clone no Projeto</li>
  <li> Npm Install no Front-end</li>
   <li> Npm install No Back-end</li>
    <li> Adicione um arquivo .env com os dados PORT, MONGO_DB_URL, DB_NAME</li>
   <li> Npm start no Front-end</li>
    <li> Npm start no Back-end</li>

# Membros do Projeto
<ul>
  <li>Ruan Miguel => https://github.com/ruanmiguelgit</li>
</ul>


  





  
