/* Fase 3 - Questao 25 */
function teste({ x = 10, y = 20 } = {}) {
  console.log(x + y);
}
teste({ x: 5 });
