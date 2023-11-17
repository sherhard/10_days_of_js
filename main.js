console.log('создать пустой набор')
const pustoy=new Set();
console.log(pustoy);

document.write('Создайте набор, содержащий от 0 до 10,')
document.write('<br>')

const tenNabor=[1,2,3,4,5,6,7,8,9,10];
const nabor=new Set(tenNabor)
console.log(nabor)
document.write(nabor)
document.write('<br>')
document.write('<br>')

const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const companiesNabor=new Set(companies)
console.log(companiesNabor)
console.log(companiesNabor.delete('Google'))
companiesNabor.clear()
console.log(companiesNabor)


const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
  ]
const map=new Map(countries);
console.log(map)
console.log(map.size)


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
let c=[...a, ...b]

let C=new Set(c)
let A=new Set(a)
let B=new Set(b)
let AB=a.filter((num)=>B.has(num))
let BA=new Set(AB)
console.log(BA)

console.log(C)