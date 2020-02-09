//HTML-elementer 
const inpNavn3 = document.querySelector("#inpNavn3");
const inpType3 = document.querySelector("#inpType3");
const inpPris3 = document.querySelector("#inpPris3");
const inpRabatt3 = document.querySelector("#inpRabatt3");
const submit = document.querySelector("#addSubmit");


const addMobel = async (navn, type, pris, rabatt) => {
    const newMobel = await mobelregister.add({
        navn: navn,
        type: type,
        pris: Number(pris),
        rabatt: Number(rabatt)
    })
}

submit.onsubmit = (evt) => {
    evt.preventDefault()

    addMobel(inpNavn3.value, inpType3.value, inpPris3.value, inpRabatt3.value)
    inpNavn3.value = ''
    inpType3.value = ''
    inpPris3.value = ''
    inpRabatt3.value = ''
}