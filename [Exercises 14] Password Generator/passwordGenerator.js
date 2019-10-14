function changeVocals (str) {
    //code di sini
    let arrTemp = str.split('')
    let vocal = [['a','b'],['i','j'],['u','v'],['e','f'],['o','p']]
    for(let i = 0; i < str.length; i++)
    {
        for(let j = 0; j < vocal.length; j ++)
        {
            if(arrTemp[i] == vocal[j][0].toUpperCase())
            {
                arrTemp[i] = vocal[j][1].toUpperCase()
            }
            else if(arrTemp[i] == vocal[j][0])
            {
                arrTemp[i] = vocal[j][1]
            }
        }
    }
    str = arrTemp.join('')
    return str
  }
  
  function reverseWord (str) {
    //code di sini
    return str.split('').reverse().join('')
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let arrTemp = str.split('')
    for(let i = 0; i < arrTemp.length; i++)
    {
        if(arrTemp[i] == arrTemp[i].toUpperCase()){arrTemp[i] = arrTemp[i].toLowerCase()}
        else if(arrTemp[i] == arrTemp[i].toLowerCase()){arrTemp[i] = arrTemp[i].toUpperCase()}
    }
    str = arrTemp.join('')
    return str
  }
  
  function removeSpaces (str) {
    //code di sini
    let temp = str.replace(/\s/g,'')
    return temp
  }
  
  function passwordGenerator (name) {
    //code di sini
    var result = removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
    return result
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'