function CountAnimals(tur,horse,pigs) 
{
    var tleg=tur*2
    var hleg=horse*4
    var pleg=pigs*4
    return tleg+hleg+pleg
}
var legs = CountAnimals(2,3,5)
console.log(legs)