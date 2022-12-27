function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function () {
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCPF.prototype.valida = function() {
  if(typeof this.cpfLimpo === 'undefined') return false;  

  return true;
};

const cpf = new ValidaCPF('704.484.450-52');
console.log(cpf.valida());
// console.log(cpf.cpfLimpo);