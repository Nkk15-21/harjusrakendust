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