/*1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex". 

2. Kreirajte objekt iz Dog funkcije.

3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat.*/

function Dog(name = 'Rex') {
    this.name = name;
}

//Dog.prototype.bark =

const rex = new Dog();
const hugo = new Dog('Hugo');

console.log(rex.name);
console.log(hugo.name);
