# Principles

*Liskov Substitution Principle*

- essa camada interna é independente de ORMs apesar de fornecer recursos para acessa-los, isso é feito através do `Liskov Substitution Principle` onde temos a interface ``IProductRepository`` se comunicando com o service.

- a interface de conexão com o ORM chamada de ``IProductPrismaRepository`` faz a implementação da ``IProductRepository`` (conceito de imports and adapters).  


Dessa forma, se for necessário alterar a conexão, isso será feito sem profundas modificações no código.  
Basta alterar a Interface ``IProductPrismaRepository`` e manter a implementação com a ``IProductRepository``.