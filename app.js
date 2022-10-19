const input = document.querySelector("#txt-input");
const translate = document.querySelector("#btn-translate");
const opt = document.querySelector("#opt");

function constructURL(text) {
    return "https://api.funtranslations.com/translate/ferb-latin.json?text=" + text
}

function testURL(text) {
    return "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=" + text
}
translate.addEventListener("click", () => {
    let output = input.value
    // fetch(testURL(output))
    fetch(constructURL(output))
        .then(response => response.json())
        .then(json => {
            console.log(constructURL(output));
            output = json.contents.translated
            opt.value = output
            console.log(output);
        })
})