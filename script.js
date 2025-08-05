function manipulateArray() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

manipulateArray()
    .then((array) => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        setTimeout(() => {
            document.getElementById('output').innerText = evenNumbers.join(',');
        }, 1000);
        
        return evenNumbers.map(num => num * 2);
    })
    .then((multipliedArray) => {
        setTimeout(() => {
            document.getElementById('output').innerText = multipliedArray.join(',');
        }, 2000);
    });