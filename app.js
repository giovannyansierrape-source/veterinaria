/* ===========================
   ETAPA 3 · Clase Mascota
   Molde para crear objetos mascota
   =========================== */
class Mascota {
  constructor(nombre, especie, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
  }
}

/* ===========================
   ETAPA 3 · Clase Veterinaria
   Administra el arreglo de mascotas
   =========================== */
class Veterinaria {
  constructor() {
    this.mascotas = [];
  }

  registrar(mascota) {
    this.mascotas.push(mascota);
  }

  listar() {
    return this.mascotas;
  }
}

/* ===========================
   ETAPA 4 · Clase Aplicacion
   Conecta el HTML con las clases
   =========================== */
class Aplicacion {
  constructor() {
    this.veterinaria = new Veterinaria();
    document.getElementById("registrar")
      .addEventListener("click", () => this.registrarMascota());
  }

  registrarMascota() {
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const edad = Number(document.getElementById("edad").value);

    if (!nombre.trim() || edad <= 0) return alert("Datos inválidos");

    this.veterinaria.registrar(new Mascota(nombre, especie, edad));
    this.mostrarMascotas();
  }

  mostrarMascotas() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    this.veterinaria.listar().forEach(mascota => {
      const item = document.createElement("li");
      item.className = "list-group-item";
      item.textContent = `${mascota.nombre} - ${mascota.especie} - ${mascota.edad} años`;
      lista.appendChild(item);
    });
  }
}

/* Crear la aplicación al final */
new Aplicacion();
