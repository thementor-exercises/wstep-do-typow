function car(model, silnik, biegi, skrzyniaBiegow, podgrzewaneSiedzenia, whatSoundDoesEngineMake, howManyMoreGearsWhouldYouLike) {
    this.Model = model;
    this.Silnik = silnik;
    this.Biegi = biegi;
    this.SkrzyniaBiegow = skrzyniaBiegow;
    this.PodgrzewaneSiedzenia = podgrzewaneSiedzenia;
    this.WhatSoundDoesEngineMake = whatSoundDoesEngineMake;
    this.HowManyMoreGearsWhouldYouLike = howManyMoreGearsWhouldYouLike;
}
let BMW = new car("M3", "V12", 6, "manual", true, "", 0)



function changeSound(sound) { BMW.WhatSoundDoesEngineMake = sound }
function changeModel(model) { BMW.Model = model }
function changeGearWish(gearWish) { BMW.HowManyMoreGearsWhouldYouLike = + gearWish }
changeModel("E61")
changeSound("Brrrrr")
changeGearWish(12)
console.log(BMW)
