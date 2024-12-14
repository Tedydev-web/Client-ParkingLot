/**
 * IndexOf function for object with key,  default by :id, return -1 -> is not found!
 * @param  {Object} obj        description
 * @param  {string} key = "id" description
 * @return {number}            description
 */
Array.prototype.oIndexOf = function (obj, key = "id") {
  return this.map(function (e) {
    return e[key];
  }).indexOf(obj[key]);
};

String.prototype.cNormalize = function () {
  return this
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

Array.prototype.oContains = function (obj, oKey = null) {
  return this.map(function (e) {
    return oKey ? JSON.stringify(e[oKey]) : JSON.stringify(e);
  }).indexOf(oKey ? JSON.stringify(obj[oKey]) : JSON.stringify(obj)) > -1;
};

/**
 * Number.prototype.format(n, x, s, c)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function (n, x, s, c) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
    num = this.toFixed(Math.max(0, ~~n));

  return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

/**
 * Convert character first to uper case
 */
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

/**
 * Conver field name to real string
 */
String.prototype.toFieldName = function () {
  const texts = this.split(/[.,\-_/ "'/+:/$]|(?=[A-Z])/)
  return texts.reduce(function (accumulator, currentValue) {
    return accumulator + (currentValue && " " + currentValue.capitalize())
  }).capitalize()
}