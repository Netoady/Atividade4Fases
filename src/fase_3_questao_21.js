/* Fase 3 - Questao 21 */

const usuario = { nome: 'Ana', idade: 28, cidade: 'SP' };
const { nome, ...resto } = usuario;
console.log(nome, resto);
