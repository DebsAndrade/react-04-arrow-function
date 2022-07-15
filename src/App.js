import React, { Component } from "react";
import "./styles.css";

class React04 extends Component {
  mensagem = () => (
    <p>Imagine uma nova história para sua vida e acredite nela.</p>
  );

  conta = (numero) => <p>{`O dobro do ${numero} é ${numero * 2}.`}</p>;

  render() {
    return (
      <div>
        {this.mensagem()}
        {this.conta(22)}
      </div>
    );
  }
}

export default React04;
