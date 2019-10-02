/*
FizzBuzz

Write a method that prints 0-n unless the number to print is a:
a) multiple of 3, then print fizz
b) multiple of 5, then print buzz
c) multiple of 3 and 5, then print fizzbuzz

ex1: fizzbuzz(7) =>

fizzbuzz
1
2
fizz
4
buzz
6
7

*/

//input number
//output fizzbuzz =0
function fizzbuzz(num){
let string = 'fizzbuzz\n';

    for(let i =1; i<= num ; i++){
        if(i%3 ===0 &&i%5===0){
                string = string+ 'fizzbuzz'+'\n';
        }else if(i%3 ===0){
                string = string+ 'fizz'+'\n';
        }else if(i%5 ===0){
                string = string+ 'buzz'+'\n';
        }else{ // not 3 or 5
                string =string+i+'\n';
        }
    }

return string;

}