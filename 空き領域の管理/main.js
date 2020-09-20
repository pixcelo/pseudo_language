function Alloc(start, end) {
    let i = 1;
    while(end > end[i]) {
        i = i + 1;
    }
    while(end[i] <= end) {
        if((start[i] == start) && (end == end[i])) {
            for(j = i + 1; j <= N; 1++) {
                start[j - 1] = start[j];
                end[j - 1] = end[j];
            }
            N = N - 1;
        }
 
    }
}