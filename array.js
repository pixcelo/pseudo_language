// 主プログラム:Main
let S = [];
let K = 3;
let M = 5;
let R = Init(5, N, K);

while (R = 0) {
    R = Next(5, N);
}

// 副プログラム:Init
function Init() {
    while ( L <= K && K <= M ) {
        for (let L = 1; L <= N; 1++) {
            if ( L <= K ) {
                s[L] = 1;
            }
            s[L] = 0;
        }
        return 0;
    }
    return -1;
}

// 副プログラム:Next
function Next() {
    let C = 0;
    let L = 1;
    let R = -1;
    
    while ((L < N ) && (R = -1)) {
        while (s[L] = 1) {
            while(S[L + 1]) {
                s[L] = 0;
                s[L + 1] = 1;
                Init(S, L-1, C);
                R = 0;
            }
            C = C + 1;
        }
        L = L + 1;
    }
    
    return R;
}
