function range(start, end, step=1){
    if (end === undefined) {
        end = start;
        start = 1;
        /**
         * ou [start, end] = [1, start];
         */
    }

    const crescente = start < end;
    step = Math.abs(step);

    for (
        let valor = start;
        crescente ? valor <= end : valor >= end;
        valor += crescente ? step : -step
    ) {
        console.log(valor);
    }

    /**
     * const intervalo = [];
     * for (let i = start; crescente ? i <= end : i >= end; crescente ? i += step: i -= step){
     * intervalo.push(i);
     * }
     * return intervalo;
     */

};


range(14, -9, 2)