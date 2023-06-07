import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";
import { Icone } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <Icone src={alimentacao} alt="restaurante" />,
    Utilidades: <Icone src={utilidades} alt="utilidades" />,
    Saude: <Icone src={saude} alt="Saude" />,
    Transporte: <Icone src={transporte} alt="transporte" />,
    default: <Icone src={outros} alt="Outro" />,
  };

  return Images[type] || Images.default;
};
