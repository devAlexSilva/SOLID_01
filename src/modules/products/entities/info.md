# Principles

*Single Responsability Principle*
*Liskov Substitution Principle*

- essa camada interna é independente de ORMs apesar de fornecer recursos para acessa-los, isso é feito através do `Liskov Substitution Principle` onde temos a interface ``IProductRepository`` se comunicando com o service e a interface de conexão com o ORM ``IProductPrismaRepository`` fazendo a implementação para ter acesso (conceito de imports and adapters).

Dessa forma, se for necessário alterar a conexão, isso será feito sem profundas modificações no código.
Basta alterar a Interface Prisma e manter a implementação.