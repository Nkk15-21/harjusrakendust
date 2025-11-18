
console.log('\n------Harjutused: Massivid, Array------');

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



console.log("\n----Harjutused: JSON objekt ja JSON andmestruktuur, Rekursioon----")

//1. Harjutus
console.log("1. Harjutus")

const kasutajaProfiil = {

    // 1. Имя пользователя (Kasutaja nimi)
    "Kasutaja nimi": "Jane Doe",

    // 2. Возраст (Vanus)
    vanus: 28,

    // 3. В сети (On-line)
    "On-line": true,

    // 4. Метод приветствия (Tervitusmeetod)
    tervitusmeetod: function() {
        return "Tere!";
    }

};

// Проверка (опционально)
console.log(kasutajaProfiil);
console.log("Имя:", kasutajaProfiil["Kasutaja nimi"]);
console.log("Возраст:", kasutajaProfiil.vanus);
console.log("Приветствие:", kasutajaProfiil.tervitusmeetod());

// 2. Harjutus
console.log("2. Harjutus")
function valmistaJSONiks(obj) {
    // Инициализируем новый объект, куда будем сохранять преобразованные данные (п. 5)
    const uusObjekt = {};

    // (Проходим по всем ключам входного объекта)
    for (const key in obj) {
        // Проверка, чтобы избежать унаследованных свойств
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (typeof value === 'function') {
                // Вызываем функцию и сохраняем ее результат в новом объекте.
                try {
                    uusObjekt[key] = value();
                } catch (e) {
                    // Обработка ошибок, если функция вызывает исключение
                    console.error(`Ошибка при вызове функции '${key}':`, e);
                    uusObjekt[key] = undefined;
                }
            } else {
                // Копируем значение как есть.
                uusObjekt[key] = value;
            }
        }
    }
    return uusObjekt;
}


const projektiSeisund = {
    projektiNimi: "Fusion Core",
    versioon: 3.1,
    valmimiseAeg: () => "Q3 2026",      // Будет вызвана
    onEelarveÜle: () => false,          // Будет вызвана
    arvutaKulu: () => 150000,           // Будет вызвана
    metaAndmed: { osalejad: 5 }         // Объект - просто скопируется
};

const jsonValmisObjekt = valmistaJSONiks(projektiSeisund);

console.log('--- Исходный объект ---');
console.log(projektiSeisund);

console.log('\n--- Преобразованный объект (JSON-ready) ---');
console.log(jsonValmisObjekt);

console.log('\n--- JSON-строка ---');
console.log(JSON.stringify(jsonValmisObjekt, null, 2));


//3. Harjutus
console.log("3. Harjutus")

function sügavPuhastus(element) {
    const elementType = typeof element;

    if (elementType === 'function') {
        return element(); // Вызываем функцию
    }

    if (element === null || elementType !== 'object') {
        return element;
    }

    if (Array.isArray(element)) {
        return element.map(item => sügavPuhastus(item));
    }

    if (elementType === 'object' && element !== null) {
        const uusObjekt = {};

        for (const key in element) {
            // Проверка, чтобы избежать унаследованных свойств
            if (element.hasOwnProperty(key)) {
                // Рекурсивный вызов для значения
                uusObjekt[key] = sügavPuhastus(element[key]);
            }
        }
        return uusObjekt;
    }

    // Возвращаем элемент без изменений, если он не попал ни под один случай (например, Date, RegExp)
    return element;
}

const kasuatajaAndmed = {
    kasutajaNimi: "dinanath50",
    // Функция 1 на верхнем уровне
    saaRoll: () => "Administraator",
    seaded: {
        teema: "tume",
        eelistused: [ // Массив
            {
                id: 1,
                // Функция 2 внутри объекта в массиве
                väärtus: () => true
            },
            {
                id: 2,
                väärtus: "teavitused_sees" // Примитив
            }
        ]
    },
    // Функция 3, возвращающая массив объектов
    saaSisselogimiseAjalugu: () => ([
        { aeg: "10:00" },
        { aeg: "14:00" }
    ])
};

const puhastatudAndmed = sügavPuhastus(kasuatajaAndmed);

console.log('--- Исходные данные (содержат функции) ---');
console.log(kasuatajaAndmed);

console.log('\n--- Очищенные данные (JSON-ready) ---');
console.log(puhastatudAndmed); // Функции заменены их результатами

console.log('\n--- JSON-строка (для подтверждения сериализации) ---');
console.log(JSON.stringify(puhastatudAndmed, null, 2));

