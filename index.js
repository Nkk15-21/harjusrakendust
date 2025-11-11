
let x = 10
//          0   1   2       3
let arr = ['a', 1, true, undefined]
let arr2 = [
    ['a','b'],
    [1, [true, false]],
]
console.log(arr2[1][1][0]);
console.log('------------');
let json = {
    name: 'vladimir',
    type:{
            color: "red",
            width: 10,
            count: {
                type: 1
            },
        sum: function(x,y){
            return x+y;
        },
        calc2: () => '10'
    }
}

let json2 = [
    {
        name: "vladimir1",
        // [    "vladimir",'vladimirovich',"putin"],
        type:{
                color: "red",
                width: 10,
                count: {
                    type: 1
                },
            sum: function(x,y){
                return x+y;
            },
            calc2: () => '10'
        }
    },
    {
        name: "vladimir2",
        // [    "vladimir",'vladimirovich',"putin"],
        type:{
                color: "red",
                width: 10,
                count: {
                    type: 1
                },
            sum: function(x,y){
                return x+y;
            },
            calc2: () => '10'
        }
    },
    
]

json2.forEach(item => {
    console.log(item.name);
})

console.log(JSON.stringify(json2));

let tJson = '[{"name":"vladimir1","type":{"color":"red","width":10,"count":{"type":1}}},{"name":"vladimir2","type":{"color":"red","width":10,"count":{"type":1}}}]'
console.log(JSON.parse(tJson));

console.log('------------');
console.log(typeof json);
console.log('------------');
console.log(json.name)
console.log('------------');
console.log(json.name);
console.log('------------');
console.log(json.type.color)
console.log('------------');
console.log(json.type.sum(5,15))
console.log('------------');
console.log(json.type.calc2())
console.log('------------');
json.name = "vladimir2";
console.log(json.name)
console.log('------------');
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}
let newArr = Object.entries(json)
console.log(newArr[1])
console.log('------------');
let arrValues = Object.values(json)
console.log("value:", arrValues[1].color)
console.log('------------');
let subQuery = Object.values(arrValues[1])
console.log(subQuery[1])
console.log('------------');
let arrKeys = Object.keys(json);
console.log(arrKeys[1])

console.log('------------');

Object.entries(json).forEach((item) => {
    console.log(item[0]);
    
})
console.log('------------');

//1. Harjutus
console.log('1. Harjutus')

// Исходный массив
let linnad = ["Tallinn", "Tartu", "Pärnu", "Narva"];
console.log("Исходный массив:", linnad);

// 1. Добавить "Kuressaare" в конец
linnad.push("Kuressaare");
console.log("После push():", linnad);

// 2. Удалить последний элемент и сохранить его
let eemaldatudLinn = linnad.pop();
console.log("После pop():", linnad);
console.log("Удаленный город:", eemaldatudLinn);

// 3. Создать новый массив из первых двух элементов
// slice(0, 2) берет элементы с индекса 0 до (но не включая) 2
let esimesedKaks = linnad.slice(0, 2);

// 4. Проверка (вывод всех результатов в консоль)
console.log("--- Итоговый результат ---");
console.log("Массив linnad (измененный):", linnad);
console.log("Массив esimesedKaks (новый):", esimesedKaks);
console.log("Переменная eemaldatudLinn:", eemaldatudLinn);

console.log('------------');

//2. Harjutus
console.log("2. Harjutus")

// Исходный массив
const värvid = ["punane", "roheline", "sinine", "kollane", "roheline"];
console.log('Массив:', värvid);

// 1. Проверка наличия "must" (черный)
const kasMustOn = värvid.includes("must");
console.log('Есть ли "must"? (kasMustOn):', kasMustOn);

// 2. Поиск первого индекса "roheline" (зеленый)
const roheliseAsukoht = värvid.indexOf("roheline");
console.log('Индекс первого "roheline" (roheliseAsukoht):', roheliseAsukoht);

// 3. Поиск индекса "valge" (белый)
const valgeAsukoht = värvid.indexOf("valge");
console.log('Индекс "valge" (valgeAsukoht):', valgeAsukoht);

// 4. Поиск последнего индекса "roheline" (зеленый)
const viimaneRoheline = värvid.lastIndexOf("roheline");
console.log('Индекс последнего "roheline" (viimaneRoheline):', viimaneRoheline);

console.log('------------');

//3. Harjutus
console.log("3. Harjutus")

// Исходный массив
const ostukorv = ["piim", "leib", "juust", "munad"];
const toodeteKoodidStr = "A10-B25-C30-D45";

// 1. Соединить массив запятой и пробелом
const ostunimekiri = ostukorv.join(", ");

// 2. Разделить строку по дефису
const koodideMassiiv = toodeteKoodidStr.split("-");

// 3. Соединить массив только запятой (CSV)
const csvFormat = ostukorv.join(",");

// Вывод результатов для проверки
console.log("Список покупок (строка):", ostunimekiri);
console.log("Массив кодов (массив):", koodideMassiiv);
console.log("CSV формат (строка):", csvFormat);

console.log('------------');

//4. Harjutus
console.log("4. Harjutus")

// Исходный массив
const temperatuurid = [5, 12, 18, 2, 7, 10];

// 1. Kas Mõni (some): Проверить, есть ли хотя бы одна температура < 0
// Метод some() возвращает true, если функция-колбэк вернет true хотя бы для одного элемента.
const kasKülmetab = temperatuurid.some(temp => temp < 0);

// 2. Kas Kõik (every): Проверить, все ли температуры < 20
// Метод every() возвращает true, если функция-колбэк вернет true для всех элементов.
const kasJääbAlla20 = temperatuurid.every(temp => temp < 20);

// 3. Keerulisem Tingimus: Проверить, все ли температуры > 0
const kasOnPäevaneTemperatuur = temperatuurid.every(temp => temp > 0);

// Вывод результатов для проверки
console.log('Массив температур:', temperatuurid);
console.log('Замерзает ли (kasKülmetab):', kasKülmetab);
console.log('Все ли меньше 20 (kasJääbAlla20):', kasJääbAlla20);
console.log('Все ли больше 0 (kasOnPäevaneTemperatuur):', kasOnPäevaneTemperatuur);

console.log('------------');

//5. Harjutus
console.log("5. Harjutus")


// Исходные массивы
const juurviljad = ["porgand", "kartul"];
const puuviljad = ["õun", "pirn", "banaan"];
const marjad = ["maasikas", "mustikas"];

// 1. Объединение с помощью concat()
// Объединяет juurviljad и puuviljad
const kõikTooted_concat = juurviljad.concat(puuviljad);

// 2. Объединение с помощью Spread-оператора (...)
// Объединяет все три массива
const kõikTooted_spread = [...juurviljad, ...puuviljad, ...marjad];

// 3. Создание сложного массива "Sega-Sega"
const segaSega = [
    "Sega-Sega",
    ...juurviljad, // Развертываем элементы ["porgand", "kartul"]
    100,           // Добавляем числовой элемент
    ...puuviljad   // Развертываем элементы ["õun", "pirn", "banaan"]
];

// Вывод результатов для проверки
console.log('1. concat() результат:', kõikTooted_concat);
console.log('2. spread (...) результат:', kõikTooted_spread);
console.log('3. Sega-Sega результат:', segaSega);

// Контроль: Проверка, что исходные массивы не изменились (должны быть такими же, как в начале)
console.log('\n--- Проверка исходных массивов ---');
console.log('juurviljad:', juurviljad);
console.log('puuviljad:', puuviljad);
console.log('marjad:', marjad);