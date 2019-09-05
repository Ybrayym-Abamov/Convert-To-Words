function oneThroughNineWords(digit) {
     const singledigits =  [" ", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

return singledigits[digit];
}

function elevenThroughNineteenWords(digit) { 
    const teens = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"]

    return teens[digit];
}

function  tenName(digit) {  
    const TYs = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    return TYs [digit];
}

function hundredsWords(digit) { 
    const EDs = [" ","one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];

    return EDs [digit]; 
}

for (let i = 1; i < 1001; i++) {
    const paragraph = document.createElement("p");
    document.body.appendChild(paragraph);
    if(i < 10) {
        paragraph.textContent = i + " - " + oneThroughNineWords(i);
    } else if (i < 20) {
        paragraph.textContent = i + " - " + elevenThroughNineteenWords(i-10);
    } else if (i < 100) {
        const [tensPlace, onesPlace] = String(i).split("");
        paragraph.textContent = i + " - " + tenName(tensPlace) + " " + oneThroughNineWords(onesPlace);
        if (oneThroughNineWords(onesPlace) === ""){
            paragraph.textContent = i + " - " + tenName(tensPlace) + " " + oneThroughNineWords(onesPlace);
        }
    } else if (i < 1000) {
        const [hundredsPlace, tensPlace, onesPlace] = String(i).split("");
        if (tensPlace == 1) {
        paragraph.textContent = i + " - " + hundredsWords(hundredsPlace) + " " + elevenThroughNineteenWords(Number(onesPlace))
    } else if (oneThroughNineWords(onesPlace) === "" || tenName(tensPlace) === ""){
        paragraph.textContent = i + " - " + hundredsWords(hundredsPlace) + "" + tenName(tensPlace) + "" + oneThroughNineWords (onesPlace);
    } else {
        paragraph.textContent = i + " - " + hundredsWords(hundredsPlace) + "" + tenName(tensPlace) + "  " + oneThroughNineWords(onesPlace);
    } 
  } else if (i == 1000) {
    paragraph.textContent = i + " - " + "one thousand";
} else {
    paragraph.textContent = ""; 
  } 
}






