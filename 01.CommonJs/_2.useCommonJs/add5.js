module.exports = function (param) {
    if(typeof param === 'number'){
        return param + 5;
    }else{
        console.warn('param is not number !');
        return undefined;
    }
}