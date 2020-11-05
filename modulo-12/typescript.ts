/*interface Pessoa {
  nome: string
  sexo?: 'm' | 'f' // ? => quer izer que a opção sexo, não é obrigatorio - - 'm' ou 'f' são as opções para sexo
  [key: string]: string | number // pode ser colocado any no lugar de string | number -- caso não tivesse essa key, só poderia ser atribuido a interface Pessoa o que está escrito ali
}

const gabriel: Pessoa = {
  nome: 'Gabriel',
  sexo: 'm',
  idade: 25, 
  teste: 10
}

function ola(pessoa: Pessoa){
  console.log('ola', pessoa.nome)
}
ola({ nome: 'teste', sexo: 'm'})

// class pode ser atribuida a outra class por exeplo: class Funcionario extends nomedaclasse ou a uma interface usando : implements nomedainterface
class Funcionario {
  nome: string
  constructor(nome: string){
    this.nome = nome
  }
}
// usando o express no ts
import * as Express from 'express'

const app = Express()

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('test')
})

app.listen(8080, () => {
  console.log('running')
}) */