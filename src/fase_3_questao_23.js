/* Fase 3 - Questao 23 */

const pessoa = { nome: 'Lucas', endereco: { cidade: 'RJ', cep: '12345' } };
const {
  endereco: { cidade },
} = pessoa;
console.log(cidade);
