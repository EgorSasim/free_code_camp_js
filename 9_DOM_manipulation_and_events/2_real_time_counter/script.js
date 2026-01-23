const textArea$ = document.querySelector('#text-input');
const charCnt$ = document.querySelector('#char-count');

const maxCnt = 50;

let cnt = textArea$.value.length;
// set "cnt" to zero if U wanna pass check on website
// on my opinion using zero is not good because
// text area may already contain some value
// (for example after page reload if U don't disable cache)

function setCharCntValue(cnt) {
    charCnt$.textContent = `Character Count: ${cnt}/${maxCnt}`;
}

setCharCntValue(cnt);

console.log('cnt: ', cnt)

textArea$.addEventListener('input', (e) => {
    const newLen = e.target.value.length;
    if (newLen >= maxCnt) {
        e.preventDefault();
        textArea$.value = e.target.value.slice(0, maxCnt);
        charCnt$.style.color = 'red';
        setCharCntValue(maxCnt);
        return;
    }

    setCharCntValue(newLen)

    console.log('val: ', e.target.value)
});
