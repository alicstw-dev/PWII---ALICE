1- Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript, responda o que se pede:

a- O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre em linguagens com tipagem estática?
R: É a verificação dos tipos de dados durante a fase de compilação, antes da execução, e quando a pessoa precisa informar explicitamente o tipo de cada dado; Para verificar, o JS disponilibiliza o typeof: que retorna o tipo, e instanceof: retorna verdadeiro se um objeto é uma instância de determinado tipo. 

b- Quais são os principais benefícios da tipagem estática em termos de performance e segurança?
R: Deetecção de erros em tempo de compilação, maior segurança de tipos, um bom desempenho e é fácil de entender.

c- Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de execução? Quais são os principais desafios de performance enfrentados por linguagens de tipagem dinâmica?
R: Na dinâmica o programa observa qual é o tipo de cada dado que está sendo declarado no código, e com isso ele define a tipagem; Ela pode sobrecarregar o desempenho que vai afetar a eficiência do código, aumenta o uso de memória, dificulta a refatoração.

d- Quais são as diferenças entre linguagens com tipagem forte e fraca?
A principal diferença é que as de tipo fraca fazem uma conversão implícita de determiado valor, não precisando obrigatóriamente definir seu tipo, o quwe torna mais flexível, em contrapartida, a forte tem uma margem de erro menor.

e- Como linguagens híbridas conseguem combinar características de tipagem estática e dinâmica? Qual o papel da inferência de tipos em linguagens de tipagem estática?
R: Linguagens híbridas permitem usar tanto tipagem estática quanto dinâmica, equilibrando segurança e flexibilidade. A inferência de tipos identifica automaticamente o tipo das variáveis, mantendo a verificação de tipos sem exigir declarações explícitas.

f- Como a linguagem JavaScript lida com a tipagem de dados?
R: O JS usa tipagem dinâmica e fraca, o que dá flexibilidade, mas pode gerar erros de tipo.

Fontes de Pesquisa:

AmorServ. Disadvantages of Dynamic Typing. Disponível em: https://amorserv.com/insights/disadvantages-of-dynamic-typing

ALURA. O que são as tipagens estática e dinâmica em programação. Disponível em: https://www.alura.com.br/artigos/o-que-sao-as-tipagens-estatica-e-dinamica-em-programacao