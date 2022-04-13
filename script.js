let button = document.getElementById('button');

button.addEventListener('click', function(){
    let word = document.getElementById('input').value;
    let wordCount = word.length;

    let output = document.getElementById('output');
    output.innerHTML = `Count is : ${wordCount}`;
})