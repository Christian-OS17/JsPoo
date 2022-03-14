class teacher {
    constructor ({
        name,
        position,
    })
    {
        this.name = name;
        this.position = position;
    }
}

const diegoDD = new teacher({
    name: "Diegro de granda",
    position: "teacher",
});

const juandc = new teacher({
    name: "Juan David Castro",
    position: "teacher",
});

class classes {
    constructor({
        name,
        teacher = [],
    })
    {
        this.name = name;
        this.teacher = teacher;
    }
}

const basicoHTML = new classes ({
    name: "anatomia de pagina web",
    teacher:  diegoDD,
});

class course{
    #name;
    constructor ({
        name,
        classes = [],
    }) {
        this.#name = name;
        this.classes = classes;
    }

    get name() {
        return this.#name;
    }

    set name(nuevoNombrecito) {
        if (nuevoNombrecito === "Curso Malito de Programación Básica") {
          console.error("Web... no");
        } else {
          this._name = nuevoNombrecito; 
        }
      }
      
}
const cursoProgramacionBasica = new course({
    name: "Curso Gratis de Programación Básica", 
});

const cursoDefinitivoHTML = new course({
    name: "Curso definitvo de HTML y Css", 
});
const cursoPracticoHTML = new course({
    name: "Curso Practico de HTML y Css", 
});

class learningPaths {
    constructor ({
        id,
        courses = [],
    }) {
        this.id = id;
        this.courses = courses;
    }
}

const escuelaWeb = new learningPaths({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgramacionBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
  });

  const escuelaVgs = new learningPaths({
    name: "Escuela de Vidweojuegos",
    courses: [
        cursoProgramacionBasica,
      "Curso de Unity",
      "Curso de Unreal",
    ],
  });
  
  const escuelaData = new learningPaths({
    name: "Escuela de Data Science",
    courses: [
        cursoProgramacionBasica,
      "Curso DataBusiness",
      "Curso Dataviz",
    ],
  });

class student {
    constructor ({
        name,
        email,
        userName,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approveCourses = [],
        learningPaths = [],
    }) {
        this.name = name;
        this.email = email;
        this.userName = userName;
        this.socialMedia = {
        twitter,
        instagram,
        facebook,
        }
        this.approveCourses = approveCourses;
        this.learningPaths = learningPaths;
    }
}

const chris = new student({
    name:"Christian OS",
    email:"chris.os@christian.com",
    userName: "Chris os",
    twitter:"@solanoOliver",
});