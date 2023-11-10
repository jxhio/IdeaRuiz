export const polizas = [
    {
      id: 1,
      aseguradora: "Axa",
      ramo: "Seguro de Vida",
      suma: 5000000,
      vigenciaInicio: 1/8/98,
      vigenciaFin: 1/8/99,
      frecPago: "Anual",
      prima: 20000,
    },
    {
      id: 2,
      aseguradora: "Qualitas",
      ramo: "Seguro de Auto",
      suma: "Valor Comercial",
      vigenciaInicio: "10/10/98",
      vigenciaFin: "10/10/99",
      frecPago: "Mensual",
      prima: 20000,
    },
    {
      id: 3,
      aseguradora: "Sofia",
      ramo: "Seguro de Gastos Medicos Mayores",
      suma: 10000000,
      vigenciaInicio: "26/9/98",
      vigenciaFin: "26/9/99",
      frecPago: "Semestral",
      prima: 30000,
    },
    {
      id: 4,
      aseguradora: "Axa",
      ramo: "Seguro de Vida",
      suma: 5000000,
      vigenciaInicio: "1/8/98",
      vigenciaFin: "1/8/99",
      frecPago: "Anual",
      prima: 20000,
    },
    {
      id: 5,
      aseguradora: "Qualitas",
      ramo: "Seguro de Auto",
      suma: "Valor Comercial",
      vigenciaInicio: "10/10/98",
      vigenciaFin: "10/10/99",
      frecPago: "Mensual",
      prima: 20000,
    },
    {
      id: 6,
      aseguradora: "Sofia",
      ramo: "Seguro de Gastos Medicos Mayores",
      suma: 10000000,
      vigenciaInicio: "26/9/98",
      vigenciaFin: "26/9/9/9",
      frecPago: "Semestral",
      prima: 30000,
    },
    {
      id: 7,
      aseguradora: "Axa",
      ramo: "Seguro de Vida",
      suma: 5000000,
      vigenciaInicio: "1/8/98",
      vigenciaFin: "1/8/99",
      frecPago: "Anual",
      prima: 20000,
    },
    {
      id: 8,
      aseguradora: "Qualitas",
      ramo: "Seguro de Auto",
      suma: "Valor Comercial",
      vigenciaInicio: "10/10/98",
      vigenciaFin: "10/10/99",
      frecPago: "Mensual",
      prima: 20000,
    },
    {
      id: 9,
      aseguradora: "Sofia",
      ramo: "Seguro de Gastos Medicos Mayores",
      suma: 10000000,
      vigenciaInicio: "26/9/98",
      vigenciaFin: "26/9/99",
      frecPago: "Semestral",
      prima: 30000,
    },
    

  ];
  
  
  JSON.parse(localStorage.getItem("polizas")) || localStorage.setItem("polizas", JSON.stringify(polizas));
  
  