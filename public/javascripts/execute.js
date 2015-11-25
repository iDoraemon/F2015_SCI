/**
 * Created by Le Minh Pham Hoang on 11/26/2015.
 */
var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var LOWER_ALPHABET = 'acbdefghijklmnopqrstuvwxyz'.split('');

function mod(a, b) {
    return ((a % b) + b) % b;
}

function decrypt_01() {
    var ENCRYPTED = document.getElementById("code1").value.split('');
    console.log(ENCRYPTED);
    var DECRYPTED = '';
    ENCRYPTED.forEach(function(letter) {
        DECRYPTED += ALPHABET[mod(3 * (ALPHABET.indexOf(letter) - 2), 26)];
    });
    document.getElementById("result1").value = DECRYPTED;
}