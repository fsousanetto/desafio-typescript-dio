
enum Proffesion {
    Administradora,
    Designer,
    Desenvolvedor
}

type People = {
    nome: string,
    idade: number,
    profissao: Proffesion
}

let pessoa1: People = {
    nome: 'Sophia',
    idade: 29,
    profissao: Proffesion.Administradora
};

let pessoa2: People = {
    nome: 'Diego',
    idade: 19,
    profissao: Proffesion.Desenvolvedor
};

let pessoa3: People = {
    nome: 'Thais',
    idade: 32,
    profissao: Proffesion.Designer
};

let pessoa4: People = {
    nome: "Josué",
    idade: 19,
    profissao: Proffesion.Designer
}