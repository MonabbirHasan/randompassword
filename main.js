var btn = document.getElementById("btn")
var result = document.getElementById("result")
var h1 = document.querySelector("h1")

var arr_lower = ['a', 'b', 'c', 'd', 'e', '(', ')', '_', '-', '+',
                 'l', 'm', 'n', 'o', '(', ')', '_', '-', '+', '=',
                 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', '(', ')',
                 'F', 'G', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', '(', ')',
                 '~', '`', '!', '@', '#', '$', '%', '^', '&', '*',
                 '(', ')', '_', '-', '+', '=', ';', ':', '|', ',',
                 '<', '.', '\/', '?', '/'].reverse()
var arr_number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var randomNumber = arr_lower.concat(arr_number)

btn.addEventListener("click", function () {

    for (var i = 0; i < 10; i++) {
        var pass = arr_lower[Math.floor(Math.random() * arr_lower.length)]
        result.value += `${pass}`
    }
})
