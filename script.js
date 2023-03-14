class passGen {
    constructor(passwordLength) {
        this.passwordLength = passwordLength
    }

    weakPass() {
        var charsWeak = 'abcdefghijklmnopqrstuvwxyz1234567890'
        let weakPass = ""
        for (let i = 0; i <= this.passwordLength; i++) {
            var weakRandomNum = Math.floor(Math.random() * charsWeak.length)
            weakPass += charsWeak.substring(weakRandomNum, weakRandomNum + 1)
        }
        pw.innerHTML = `<h1>${weakPass}</h1>`

    }
    strongPass() {
        var charsStrong = `abcdefghijklmnopqrstuvwxyz1234567890ABCDRFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-='"\/;:.,~`
        let strongPass = ""
        for (let i = 0; i <= this.passwordLength; i++) {
            var strongRandomNum = Math.floor(Math.random() * charsStrong.length)
            strongPass += charsStrong.substring(strongRandomNum, strongRandomNum + 1)
        }
        pw.innerHTML = `<h1>${strongPass}</h1>`
    }

    funnyPass() {
        var charsFunny = ['admin', 'incorrect', 'Hello World!', 'qwerty', 'password', '12345', 'qwerty123', '1q2w3e', '12345678', '111111', '1234567890']
        var funnyRandomNum = Math.floor(Math.random() * charsFunny.length)
        let f = charsFunny[funnyRandomNum]
        pw.innerHTML = `<h1>${f}</h1>`
    }
}


let pass = new passGen(12)

opt1.onclick = () => {
    pass.weakPass()
}
opt2.onclick = () => {
    pass.strongPass()
}
opt3.onclick = () => {
    pass.funnyPass()
}
