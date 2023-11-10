export let dBusuarios = [
    {
      id: 1,
      user: "jahielruizbarriga@gmail.com",
      pass: "12345",
      name: "Jahiel"
    },
  ];

 
JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(dBusuarios));


