

function palindrome(str){
    let rev = "";
    if(str[0] !== str[str.length - 1])
    {
        return false
    }

    for(let i=str.length - 1;i>=0;i--)
    {
        rev = rev + str[i];
    }

    console.log(rev);
    
    if( rev === str)
    {
        return true
    }else{
        return false
    }
    
}

const result1 = palindrome("racecar")

console.log("result1",result1);
