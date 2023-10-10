document.getElementById('checkButton').addEventListener("click",palindromeChecker);

function palindromeChecker(){

    const inputText = document.getElementById('inputString')
    const result = document.getElementById('result')

    if(isPalindrome(inputText.value)){
        result.textContent = `${inputText.value} is a Palindrome`;
    }
    else{
        result.textContent = `${inputText.value} is not a Palindrome`;
    }
}

function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);
    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr)

    return cleanStr === reversedStr;
}