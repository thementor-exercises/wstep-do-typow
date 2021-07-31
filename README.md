# wstep-do-typow

Często słyszy się, że w JS wszystkie typy danych są obiektami. Jest to częściowo
prawda. Obiekt najczęściej jest konkretnym typem danych i jest tak również w JS. Do sprawdzenia typu słuzy keyword "typeof". Np.

- typeof {} // object
- typeof new Object() // object
- typeof new Data() // object
- typeof new String("") // object
- typeof String("") // string!
- typeof String // function
- typeof "Tekst" // string

ale

- "Tekst".concat(" to tekst") // "Tekst to tekst"

Tutaj zbliżamy się do wyjaśnienia czemu wszystko w JS jest obiektem. Zwykły string "" posiada api. Dzieje się tak, bo każdy prymitywny typ danych:

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

jest object-like, co oznacza, że typeof nie zwróci typu "object", ale typ prymitywny "string", "number" itd. Jednak każdy typ prymitywny posiada api którego można używać, bo JS pod spodem wrapuje prymitywa tzw. object-like i dołącza do niego właściwość "prototype" (później wyjaśniam). W skrócie można powiedzieć, że prymityw jest pod spodem rozpoznany i użyta na nim jest funkcja odpowiednio String, Number, Boolean itd. wówczas mamy dostęp do api (i ów prototype jest "podpięty").

Jeżeli chodzi o obiekty zainstancjonowane słówkiem (keywordem) "new" są to pełnoprawne obiekty (nie prymitywy):
- new String("Teskt")
- new Number(1)
- new Data()
- new Object({ klucz: "wartość" })
- new Boolean(true)

## pełnoprawne czyli SKONSTRUOWANE za pomocą konstruktora funkcji konstruującej

Przystańmy na chwilę tutaj i przeanalizujmy co się tutaj dzieje. Mamy słówko "new",
mamy globalne funkcje konstuujące String, Number itd. oraz mamy wywołanie z argumentem.

Funkcja konstruująca oznacza funkcję która posiada PROTOTYP. Właściwość "prototype"
jest zagadnieniem na później. Na tą chwilę do zapamiętania jest to, że prototype to
"właściwość", bądź "property" object, funkcji, bo funkcja jak wszystko jest również obiektem, a raczej object-like która dostarcza api.

Obiektem, bądź object-like nie jest null i undefined. To jedyne wyjątki.

## Funkcja konstruująca

Niektóre Funkcje konstruujące są dostarczone "out of the box" jak wspomniany String, Number itd, ale można również taką stworzyć. Funkcja konstruująca jest czymś w rodzaju konstruktora klasy w językach typu JAVA, c++ czy c#. Jednak w JS działa to zupełnie inaczej.

var Person = function(name) {
  this.name = name;
};

Person.prototype = {
  whatIsYourName: function() {
    return this.name;
  },
  whatIsThis: function() {

  }
};

var dawid = new Person("Dawid");
dawid.whatIsYourName(); // "Dawid"

Alternatywa w JAVI'e

class Person {
  constructor(private String name) {

  }

  public whatIsYourName() {
    return name;
  }
}

Person dawid = new Person("Dawid");
dawid.whatIsYourName(); // "Dawid"

Dlatego mówi się, że JS jest językiem prototypowym, bo, żeby zawrzeć właściwości czy metody funkcji konstruującej należy zawrzeć je w obiekcie prototype. Teraz jednak jak wspomniałem w JS jest to inne niż w językach obiektowych, bo Person możemy normalnie wywołać jak funkcję, bez słówka "new". Oznacza to, że nie instancjonujemy obiektu, a zwyczajnie wywołujemy tylko funkcje. Co więcej jeżeli wywołamy Person:

Person("Arek"); // undefined

teraz zobaczmy co jest pod property name:

name // "Arek"

Żeby to zrozumieć trzeba sobie uświadomić co robi "new" i czym jest "this" w JS. Słówko "new" tworzy nową tzw. lokalną przestrzeń nazw, bądź local scope. "this" natomiast jest referencją do obiektu, tutaj akruat działa to bardzo podobnie do języków obiektowych. Referencją oznacza, że w zależności gdzie użyjemy słówka "this", dołączony (zbindowany) jest do niego kontekst. Zobaczmy:

var Person = function(name) {
  this.name = name;
};

Person.prototype = {
  whatIsThis: function() {
    console.log(this);
  }
};

var dawid = new Person("Dawid");
dawid.whatIsThis(); // Person {name: "Dawid"}

dostaliśmy tzw. kontekst / scope / przestrzeń nazw - Person. Co w sytuacji, gdy zobaczymy co jest w "this" nie wewnątrz zainstancjonowanego obiektu?

console.log(this) // Window { ... }

Otóż dzieje się tak, gdyż globalnym kontekstem jest Window. Dlatego wcześniej wywołując funkcję konstruującą bez słówka "new" czyli nie instancjonując nowego obiektu przypisujemy do this.name imię "Arek", a w tym wypadku this jest referencją do Window i dlatego dodajemy nowe property "name" do globalnego obiektu Window.

Zadanie:

Stwórz funkcję konstruującą "Car", która przyjmuje argument model, który jest stringiem.

Niech Car zawiera właściwości:
- silnik: "V6"
- biegi: 6
- skrzyniaBiegow: new Symbol("Manual")
- podgrzewaneSiedzenia: true

i metody:
- whatSoundDoesEngineMake - i niech zwraca "Brrr..."
- howManyMoreGearsWhouldYouLike - i niech przyjmuje number i zwraca ten number plus ilość biegów
- changeModel - i niech przyjmuje string i nadpisuje model samochodu

Rozwiązanie niech znajdzie się w pliku scripts.js
Wszystko jest gotowe do działania, npm install instaluje serwer, a odpalić go można
za pomocą npm start.
