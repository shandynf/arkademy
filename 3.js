const count_vowels = (words) => {
    let vowels = 'aeiouAEIOU'; // vowels list
    let count = 0;

    for (var i = 0; i < words.length; i++) {
        if (vowels.indexOf(words[i]) !== -1) { // kondisi (memeriksa keberadaan)
            count += 1;
        }
    }
    return count;
}

console.log(count_vowels('programmer'));
console.log(count_vowels('hmm...'));