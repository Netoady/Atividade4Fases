/* Fase 3 - Questão 32 */

const obj = {
  id: 1,
  dados: {
    nome: 'Ana',
    preferencias: {
      tema: 'escuro',
      fonte: 'Sans',
    },
  },
};
const {
  dados: {
    preferencias: { tema },
    ...resto
  },
} = obj;
console.log(tema, resto);
