function isArmstrong(num) {
    let digits = num.toString().split('');
    let power = digits.length;
    let sum = 0;

    for (let digit of digits) {
        sum += Math.pow(Number(digit), power);
    }

    return sum === num;
}

console.log("Armstrong ədədləri (1-dən 1000-ə qədər):");
for (let i = 1; i <= 1000; i++) {
    if (isArmstrong(i)) {
        console.log(i);
    }
}



let table = '<table border="1">';
for (let i = 1; i <= 10; i++) {
    table += '<tr>';
    for (let j = 1; j <= 10; j++) {
        table += '<td>' + (i * j) + '</td>';
    }
    table += '</tr>';
}
table += '</table>';
document.body.innerHTML = table;

const ages = [25, 32, 28, 35, 30];

console.log("30-dan kiçik yaş tapıldı:");
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 30) {
        continue; // 30 və daha böyük yaşları keç
    }
    console.log(ages[i]);
    break; // İlk 30-dan kiçik yaşı tapdıqdan sonra döngünü dayandır
}

console.log("\n30-dan böyük yaş tapıldı:");
for (let i = 0; i < ages.length; i++) {
    if (ages[i] <= 30) {
        continue; // 30 və daha kiçik yaşları keç
    }
    console.log(ages[i]);
    break; // İlk 30-dan böyük yaşı tapdıqdan sonra döngünü dayandır
}