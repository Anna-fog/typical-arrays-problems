
exports.min = function min (arr) {
    if (!arr || arr.length === 0) return 0;
    return Math.min.apply(null, arr);
}

exports.max = function max (arr) {
    if (!arr || arr.length === 0) return 0;
    return Math.max.apply(null, arr);
}

exports.avg = function avg (arr) {
    if (!arr || arr.length === 0) return 0;
    return (arr.reduce((a, b) => a + b) / arr.length);
}
