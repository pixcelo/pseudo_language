// 最短距離を求める
function CalcDist(N, Dist) {
    console.log(N, Dist);
    for (let i = 1; i <= N; i++) {
        for(let Form = 1; From <= N; i++) {
            for(let To = 1; To <= N; i++) {
                if(Dist[From][To] > Dist[From][i] + Dist[i][To]) {
                    Dist[From][To] = Dist[From][i] + Dist[i][To];
                }
            }
        }
    }
    console.log(N, Dist);
}

function calc() {
    let Dist = [];
    
    for(let i = 1; i <= 5; i++) {
        
        // for(j = 1; j <= 5; j++) {
        //     Dist[i + 1] = [i][j];
        // }
        Dist[i] += i;
    }
}

console.log(calc(Dist));

// Dist.forEach(function( value ) {
//     console.log( value );
// });

