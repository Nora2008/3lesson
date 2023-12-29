const peop = {}

for (let i = 1; i < 6; i++) {
let im = prompt('Введите имя')
let bom  = prompt('Введите возраст')
peop[i]={
    im,
    bom
}
}
for (const key in peop) {
    console.log(`Пользователь - ${key} `);
    for (const key2 in peop[key]) {
        console.log(key2 == 'im'? `Ваше имя ${peop[key][key2]}` : `Ваш возраст ${peop[key][key2]}`);
    }
}



const product = receipt()


let dos =9000
let zak = 'Вы заказали '


for (const key in product) {
   zak =zak + `${key}`
   for (const key2 in product[key]) {
    zak = key2 == 'info' ? zak + `${product[key][key2]},`: zak
    dos = key2 == 'price' ? dos + product[key][key2]: dos
   }
}
console.log(`${zak}  Общая сумма ${dos} сум с учетом доставки (9000)сум `);
