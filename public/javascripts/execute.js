/**
 * Created by Le Minh Pham Hoang on 11/26/2015.
 */
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var LOWER_ALPHABET = 'acbdefghijklmnopqrstuvwxyz'.split('');

function mod(a, b) {
    return ((a % b) + b) % b;
}

function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
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
    if (r0 > r1) {
        r1 = [r0, r0 = r1][0];
    }

    var  s = 0, old_s = 1
        ,t = 1, old_t = 0
        ,r = r1, old_r = r0;

    while (r != 0) {
        var quotient = Math.floor(old_r / r);
        old_r = [r, r = old_r - quotient * r][0];

    }
}


function func05() {

}

function func06() {

}

function func07() {

}