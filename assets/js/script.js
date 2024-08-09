//Modulo de reproducción
let moduloVideos = (url, id) => {
  (() => {
    document.getElementById(id).setAttribute("src", url);
  })();
};

//Clases
class Multimedia {
  constructor(url) {
    this.url = url;
  }
  getUrl() {
    return this.url;
  }
  setInicio(tiempo) {
    this.url = this.url + "&t=" + "&amp;start=" + tiempo;
    moduloVideos(this.getUrl(), this.id);
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this.id = id;
  }
  playMultimedia() {
    moduloVideos(this.getUrl(), this.id);
  }
}

//Instancias
const musica = new Reproductor(
  "https://www.youtube.com/embed/1cijvRZW5fI?si=6iwVl5ZUl6Jv9NJo",
  "musica"
);
const pelicula = new Reproductor(
  "https://www.youtube.com/embed/Ahv1v1xQaLo?si=VAwY88CY46n1j9vw",
  "peliculas"
);
const series = new Reproductor(
  "https://www.youtube.com/embed/NhKVUFVCjnA?si=yU7G02XZQktm4n0X",
  "series"
);

//Ejecución de metodos
musica.playMultimedia();
pelicula.playMultimedia();
series.playMultimedia();

series.setInicio(30);

// Grupo: Paloma, Cecilia, Jaz 