// assign interface/type to the function definition properly
function findTopNames(students) {
    var top = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].score > 8) {
            top.push(students[i].name);
        }
    }
    return top;
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
// 660610756 ณัฐดนัย ติ๊บดอนจันทร์
