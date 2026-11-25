// ფილმი, დარბაზი და ფასი არ იცვლება
const movieTitle = 'პატარა პრინცი';
const hall = 'დიდი დარბაზი';
const ticketPrice = 12;

// ბილეთების რაოდენობა და ჯამი იცვლება
let seats = 2;
let total = seats * ticketPrice;

console.log('ფილმი:', movieTitle);
console.log('დარბაზი:', hall);
console.log('ბილეთი:', seats, 'ცალი, ჯამი:', total, '₾');

// მეგობარიც მოდის
seats = 3;
total = seats * ticketPrice;
console.log('ბილეთი:', seats, 'ცალი, ჯამი:', total, '₾');
