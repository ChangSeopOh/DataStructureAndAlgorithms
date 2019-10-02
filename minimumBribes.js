/*
in: [ 1, 2, 5, 3, 4, 7, 8, 6 ] +2,+1,+1
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]
out: 4
in:[ 5, 1, 2, 3, 7, 8, 6, 4 ]
out: Too chaotic
in: [ 1, 2, 5, 3, 7, 8, 6, 4 ]
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]
out: 7
in: [ 2, 1, 5, 3, 4 ]
    [ 1, 2, 3, 4, 5 ] //+1,-1,+2,-1,-1
out: 3
in: [ 2, 5, 1, 3, 4 ]
out: Too chaotic


in: [ 1, 2, 5, 3, 7, 8, 6, 4 ]
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]
1 2 3 4 5 6 7 8  : 0 swap (initial)
1 2 3 5 4 6 7 8  : 1 swap (5 and 4)
1 2 3 5 6 4 7 8  : 1 swap (6 and 4)
1 2 3 5 6 7 4 8  : 1 swap (7 and 4)
1 2 3 5 6 7 8 4  : 1 swap (8 and 4)
1 2 5 3 6 7 8 4  : 1 swap (5 and 3)
1 2 5 3 7 6 8 4  : 1 swap (7 and 6)
1 2 5 3 7 8 6 4  : 1 swap (8 and 6)

*/

function minimumBribes(q) { 
    let swaps = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--){  
        if (q[i] - i > 3){
            return `Too chaotic`;
        }
        if (q[i] > i+1){
            swaps += (q[i]-(i+1));
        } else {
            if (min > q[i]){
                min = q[i];
            } else if (q[i] != min){
                swaps++;
            }
        }  
    }
    
    return swaps;
} 
console.log(minimumBribes([ 1, 2, 5, 3, 4, 7, 8, 6 ]));
console.log(minimumBribes([ 5, 1, 2, 3, 7, 8, 6, 4 ]));
console.log(minimumBribes([ 1, 2, 5, 3, 7, 8, 6, 4 ], [ 5, 1, 2, 3, 7, 8, 6, 4 ]));
console.log(minimumBribes([ 2, 1, 5, 3, 4 ]));
console.log(minimumBribes([ 2, 5, 1, 3, 4 ])); 