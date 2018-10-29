var method = Atribute.prototype;

function Atribute(name, type, isNull, value) {
      this.name = name;
      this.type = type;
      this.isNull = isNull;
      this.value = value;
    }

function Atribute(name, type, value) {
      this.name = name;
      this.type = type;
      this.value = value;
    }

module.exports = Atribute