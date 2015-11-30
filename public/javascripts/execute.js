/**
 * Created by Le Minh Pham Hoang on 11/26/2015.
 */
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var LOWER_ALPHABET = 'acbdefghijklmnopqrstuvwxyz'.split('');

// Find gcd
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

// Find mod
function mod(a, b) {
    return ((a % b) + b) % b;
}

// Get random prime from 3..limit
function randomPrime(limit) {
    var primeList = [];
    for (var i=3; i < limit; i++) {
        if (i == leastFactor(i)) {
            primeList.push(i);
        }
    }
    return primeList[Math.floor(Math.random() * primeList.length)];
}

// Least factor algorithm - Primality check
function leastFactor(n){
    if (isNaN(n) || !isFinite(n)) return NaN;
    if (n==0) return 0;
    if (n%1 || n*n<2) return 1;
    if (n%2==0) return 2;
    if (n%3==0) return 3;
    if (n%5==0) return 5;
    var m = Math.sqrt(n);
    for (var i=7;i<=m;i+=30) {
        if (n%i==0)      return i;
        if (n%(i+4)==0)  return i+4;
        if (n%(i+6)==0)  return i+6;
        if (n%(i+10)==0) return i+10;
        if (n%(i+12)==0) return i+12;
        if (n%(i+16)==0) return i+16;
        if (n%(i+22)==0) return i+22;
        if (n%(i+24)==0) return i+24;
    }
    return n;
}

// Square and multiply algorithm
function squareAndMultiply(m, e, n) {
    var z = 1, string = e.toString(2).split('');

    for (var i=0; i < string.length; i++) {
        z = (z * z) % n;
        if (parseInt(string[i]) == 1) {
            z = (z * m) % n;
        }
    }
    return z;
}

// Find multiplicative inverse
function findInverse(a, n) {
    var t = 0, newt = 1,
        r = n, newr = a;
    while (newr != 0) {
        var quotient = Math.floor(r / newr);
        t = [newt, newt = t - quotient * newt][0];
        r = [newr, newr = r - quotient * newr][0];
    }
    if (r > 1) {
        return false;
    }
    if (t < 0) {
        t = t + n;
    }
    return t;
}

function func01() {
    var ENCRYPTED = document.getElementById("code1").value.split('');
    var DECRYPTED = '';

    ENCRYPTED.forEach(function(letter) {
        DECRYPTED += ALPHABET[mod(3 * (ALPHABET.indexOf(letter) - 2), 26)];
    });

    document.getElementById("result1").value = DECRYPTED;
}

function func02() {
    var NAME = document.getElementById("code2").value.replace(' ','').split('');
    var ENCRYPTED = '';

    NAME.forEach(function(letter) {
        if (letter == letter.toUpperCase()) {
            ENCRYPTED += ALPHABET[mod(ALPHABET.indexOf(letter) + 7, 26)];
        } else {
            ENCRYPTED += LOWER_ALPHABET[mod(LOWER_ALPHABET.indexOf(letter) + 7, 26)];
        }
    });

    document.getElementById("result2").value = ENCRYPTED;
}

function func03() {
    var a = parseInt(document.getElementById("param1").value);
    var b = parseInt(document.getElementById("param2").value);
    var CODE = document.getElementById("code3").value.replace(' ','').split('');
    var ENCRYPTED = '';

    CODE.forEach(function (letter) {
       if (letter == letter.toUpperCase()) {
           ENCRYPTED += ALPHABET[mod(ALPHABET.indexOf(letter) * a + b, 26)];
       } else {
            ENCRYPTED += LOWER_ALPHABET[mod(LOWER_ALPHABET.indexOf(letter) * a + b, 26)];
       }
    });

    document.getElementById("result3").value = ENCRYPTED;
}

function func04() {
    var r0 = parseInt(document.getElementById("w4_ex1_param1").value);
    var r1 = parseInt(document.getElementById("w4_ex1_param2").value);

    if (r0 < r1) {
        r1 = [r0, r0 = r1][0];
        document.getElementById("w4_ex1_param1").value = r0;
        document.getElementById("w4_ex1_param2").value = r1;
    }

    var s = 0, old_s = 1,
        t = 1, old_t = 0,
        r = r1, old_r = r0;

    while (r != 0) {
        var quotient = Math.floor(old_r / r);
        old_r = [r, r = old_r - quotient * r][0];
        old_s = [s, s = old_s - quotient * s][0];
        old_t = [t, t = old_t - quotient * t][0];

    document.getElementById("w4_ex1_s").value = old_s;
    document.getElementById("w4_ex1_t").value = old_t;
    document.getElementById("w4_ex1_gcd").value = old_r;
    }
}

function func05() {
    const p = 3, q = 11, secretKey = 7, message = 5;

    // preparation
    var modulus = p * q;
    var totient = (p - 1) * (q - 1);

    // generate secret key
    var publicKey = findInverse(secretKey, totient);

    // cipher and decipher
    var encrypted = squareAndMultiply(message, publicKey, modulus);
    var decrypted = squareAndMultiply(encrypted, secretKey, modulus);

    document.getElementById("w4_ex2_result1").value = encrypted;
    document.getElementById("w4_ex2_result2").value = decrypted;
}

function func06() {
    const p = 5, q = 11, publicKey = 3, message = 9;

    // preparation
    var modulus = p * q;
    var totient = (p - 1) * (q - 1);

    // generate secret key
    var secretKey = findInverse(publicKey, totient);

    // cipher and decipher
    var encrypted = squareAndMultiply(message, publicKey, modulus);
    var decrypted = squareAndMultiply(encrypted, secretKey, modulus);

    document.getElementById("w4_ex2_result1").value = encrypted;
    document.getElementById("w4_ex2_result2").value = decrypted;
}

function func07() {
    const p = 97, q = 101, publicKey = 1003, cipherText = 2709;

    var modulus = p * q;
    var totient = (p - 1) * (q - 1);

    // generate secret key
    var secretKey = findInverse(publicKey, totient);
    document.getElementById("w4_ex3_result").value = squareAndMultiply(cipherText, secretKey, modulus);
}