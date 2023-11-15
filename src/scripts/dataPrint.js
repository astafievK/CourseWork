let result = fetch("https://zerda.twenkey.ru/WorkType")
    .then((response) => response.json())
    .then((json) => console.log(json));

console.log(result[1])