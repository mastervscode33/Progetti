// Testo in lowerCase, cosa devo eliminare, e se cosa devo eliminare è {} o [] o () o <> elimino tutto? (true si, false no)
function clearText(text, what, special) {
    let arr = text.split('');//la stringa diventa array
    if (what === "<>" || what === "{}" || what === "[]" || what === "()" && special == true) {
        // Handle special cases
        // ...
    } else {
        let length = arr.length;
        for (let i = 0; i < length; i++) {
            if (arr[i] == what) {
                let result = sort(arr, i, length);
                arr = result[0];
                length = result[1];
            }
        }
        text = arr.join('');//l'array ritorna stringa
    }
    return text;
}
function sort(arr, pos, length) {
    for (let i = pos; i < length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    length--;
    arr.pop(); // Remove the last element
    return [arr, length];
}