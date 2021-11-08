

# Boas vindas ao repositório do projeto de App de Melhor preço - FullStack in Cloud

<img src="https://media.giphy.com/media/t7Rm0HO2QWr8VrWRVR/giphy.gif" />  
<img src="https://media.giphy.com/media/0lHC6XqX4Vokt58yJC/giphy.gif" />  
<img src="https://media.giphy.com/media/t7Rm0HO2QWr8VrWRVR/giphy.gif" />  

# Acesse a Aplicação
<a href="https://react-lsbuy.herokuapp.com/"><h3> App de Receitas</h3> </a>

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
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="git" style="max-width:100%;" width="40" height="40">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript" height="40" style="vertical-align:top; margin:4px">
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" alt="VS Code" height="40" style="vertical-align:top; margin:4px">
<img src="https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png" alt="git" style="max-width:100%;" width="40" height="40">


</p>
</div>
# Como Rodar o projeto
<ol>
  <ul>
  <li> Git Clone no Projeto</li>
  <li> Npm Install</li>
  <li> Npm start</li>
 </ul>
 </ol>

# Membros do Projeto
<ul>
  <li>DouglasCajueiro => https://github.com/douglasCajueiro </li>
  <li>Gabriel Donnantuouni => https://github.com/gabrielDonnantuoni</li>
  <li>André Sampaio => https://github.com/almsampaio</li>
  <li>Ruan Miguel => https://github.com/ruanmiguelgit</li>
</ul>


  





  
