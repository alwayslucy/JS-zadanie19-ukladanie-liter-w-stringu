const UppercaseFirst = (string) => {
    let regex = /[A-Z]/g;
    let regex2 =  /[^A-Z]/g;

    let  newArr = string.match(regex).concat(string.match(regex2))
    let newString = newArr.join("");

    return newString;
}

console.log(UppercaseFirst('akaDeMia108'));