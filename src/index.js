module.exports = function reverse (n) {
    n = Math.abs(n);
    str = n.toString();
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result = `${str[i]}${result}`;
    }
    return +result.trim();

}
