# Dogs

### Projeto de mídia social para cachorros do curso de React da Origamid

Componentes do projeto:
Componentes do usuário:
Header - que fica dentro do Head e contém as informações do usuário caso ele esteja logado.


- Para o Login:
Home - Página inicial do usuário logado.
Login.js, LoginCreate.js, LoginForm.js, LoginPasswordLost.js e LoginPasswordReset.
UserPhotoPost - Formulário para o usuário postar suas fotos.

- Dentro dos logins temos os componentes Button.js e Input.js.

- Na seção dos Hooks temos:
useFetch - responsável pelo fetch da API Dogs. A API fornece todos os dados do usuário, das fotos e dos comentários.

- useForm - contém as validações dos inputs da área de login.

- A área Helper contem os componentes:
Error - exibe os erros caso o usuário não preencha corretamente os formulários.
Loading - Animações de loading de página.
PretectedRoutes - Joga o usuário para a página de login e esvazia o localstorage caso ele saia da conta.

---- 18/06/2022 ----

Adicionado o Feed Modal. 
Ao clicar em uma das fotos da galeria que está em seu perfil, a foto é exibida em um modal com as informações.
Componentes:

- Feed Modal



<img align="right" alt="Du-React" height="50" src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
