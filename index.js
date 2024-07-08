// 1
const A = ["Mango", "Poly", "Kiwi", "Ajax"];
let s1 = A[0];
for(let i = 1; i < A.length; i++){
    s1 = s1 + "," + A[i];
}
console.log(s1);
let s2 = A.join(",");
console.log(s2);


// 2
let cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];
console.log(cards);

// 3
const cardToRemove = "card-3";
cards.splice(cards.indexOf(cardToRemove), 1);
console.log(cards);

// 4
const cardToInsert = "card-6";
cards.splice(cards.length, 0, cardToInsert);
console.log(cards);

// 5
const cardToUpdate = "card-4";
cards.splice(cards.indexOf(cardToUpdate), 1, "updated card-4");
console.log(cards);