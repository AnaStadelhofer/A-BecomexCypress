# Caso de teste

Neste documento, estará descrito todos os casos de testes que foram desenvolvidos durante o projeto, também tem eles descritos no formato de BDD (Ghrekin) descritos como se fossem feitos no cucumber, escolhi ele pois já tenha familiaridade.

----
## Contato

Funcionalidade: Cadastrar contato

| Código         | Descrição                                                    |
|----------------|:------------------------------------------------------------:|
| CT-001         | Verificar a validação de obrigatoriedade com todos campos    |
| CT-002         | Verificar a alteração do valor padrão do campo segmento      |
| CT-003         | Verificar se o Captcha está sendo validado                   |

### Formato do Cucumber

**Feature**: Cadastro de contato

**Scenarios**: Campos obrigatórios em branco
**Given** que o usuário está na tela de contato
**When** enviado o formulário sem preencher os campos
**Then** deve retornar uma mensagem de erro abaixo de cada campo em branco

**Scenarios**: Alterar valor padrão de segmento
**Given** que o usuário está na tela de contato
**When** alterado o valor do campo segmento
**Then** o campo deve manter o novo valor preenchido


**Scenarios**: Captcha sendo validado
**Given** que o usuário está na tela de contato
**When** preenchido todos os campos, exceto o captcha, antes de enviar
**Then** deve retornar uma mensagem de erro abaixo do captcha

----
## Blogs

Funcionalidade: Navegação do blog

| Código         | Descrição                                          |
|----------------|:--------------------------------------------------:|
| CT-004         | Verificar quando acessado a página pelo menu       |
| CT-005         | Verificar se a pesquisa de blog retorna resultados |
| CT-006         | Verificar a páginação do blog                      |

### Formato do Cucumber

**Feature**: Navegação do blog

**Scenarios**: Navegar até a página pelo menu
**Given** que o usuário esteja em uma tela diferente do blog
**When** acessado pelo menu o blog
**Then** o usuário deve ser redirecionado a página

**Scenarios**: Pesquisar blog
**Given** que o usuário esteja na tela do blog
**When** preenchido um valor de pesquisa e apertado enter
**Then** deve retornar os resultados da pesquisa


**Scenarios**: Navegar pelas páginas do blog
**Given** que o usuário esteja na tela do blog
**When** avançado uma página da navegação dos blogs postados
**Then** deve alterara a página atual

----
## Sugestão de melhoria

### Campos de telefone e e-mail não possuem máscara [Melhoria]
Quando o usuário preenche os campos de contato, é notado que o e-mail e telefone não possuem máscara e nem validação, permitindo que seja inserido caracteres inválidos pelo usuário.

**Cenário**

1. Acessar a página de contatos
2. Preencher todos os campos obrigatórios com valores aleatórios, exemplo:
- Nome: 'Ana'
- E-mail: 'batata'
- Telefone: 123
- Empresa: Empresa Y
3. Preencher o captcha e enviar

**Resultado esperado**
Que seja validado que os campos e-mail e telefone estão fora do padrão esperado:
E-mail conter @ e um dominio;
Telefone conter um telefone válido.

**Resultado obtido**
Formulário é enviado com sucesso mesmo com dados inconsistentes.

