var method = Disciplina.prototype;


function Disciplina(nome, curso, id_eu) {
      this.nome = nome;
      this.curso = curso;
      this.id_eu = id_eu;
    }

module.exports = Disciplina