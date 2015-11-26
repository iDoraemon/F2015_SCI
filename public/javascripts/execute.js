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

function decrypt_01() {
    ENCRYPTED = document.getElementById("code1").value.split('');
    DECRYPTED = '';
    ENCRYPTED.forEach(function(letter) {
        DECRYPTED += ALPHABET[mod(3 * (ALPHABET.indexOf(letter) - 2), 26)];
    });
    document.getElementById("result1").value = DECRYPTED;
}

function decrypt_02() {
    NAME = document.getElementById("code2").value.replace(' ','').split('');
    ENCRYPTED = '';
    NAME.forEach(function(letter) {
        if (letter == letter.toUpperCase()) {
            ENCRYPTED += ALPHABET[mod(ALPHABET.indexOf(letter) + 7, 26)];
        } else {
            ENCRYPTED += LOWER_ALPHABET[mod(LOWER_ALPHABET.indexOf(letter) + 7, 26)];
        }
    });
    document.getElementById("result2").value = ENCRYPTED;
}

function decrypt_03() {
    a = parseInt(document.getElementById("param1").value);
    b = parseInt(document.getElementById("param2").value);
    CODE = document.getElementById("code3").value.replace(' ','').split('');
    ENCRYPTED = '';
    CODE.forEach(function (letter) {
       if (letter == letter.toUpperCase()) {
           ENCRYPTED += ALPHABET[mod(ALPHABET.indexOf(letter) * a + b, 26)];
       } else {
            ENCRYPTED += LOWER_ALPHABET[mod(LOWER_ALPHABET.indexOf(letter) * a + b, 26)];
       }
    });
    document.getElementById("result3").value = ENCRYPTED;
}