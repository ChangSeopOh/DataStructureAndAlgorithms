

/*
String Rotation
Write a method to determine if a string is a rotation of another string. A string is considered a rotation
of another string if a substring is "rotated" around a single character of the original string.

Ex: original: DeakoMakesSmartLights
=> SmartLightsDeakoMakes => true
=> LightsDeakoMakesSmart => true
=> "" => false
=> DeakoSmartMakesLights => false
=> MakesSmartLightsDeako => true
=> esSmartLightsDeakoMak => true

=> "Bulb" => false

isRotation(orig: string, possibleRotation: string): boolean
original: DeakoMakesSmartLights

SmartLights DeakoMakesSmartLights DeakoMakes 

Lights DeakoMakesSmartLights DeakoMakesSmart
MakesSmartLights DeakoMakesSmartLights Deako

possible = str2 + str2;
return possible.incldues(str1);

*/

//input DeakoMakesSmartLights

function isRotation(str1, str2){
if(str2.length ===0 || str1.length!==str2.length) return false;

let string = str2;
//looping until str2.length-1
    for(let i =0; i<str2.length; i++){
        if(str1===string){
            return true;
        }else{
            string.push(string.unshift());
        }
    }

return false;
//check str1 and str2

}



