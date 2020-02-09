//HTML-elementer 
const register = document.querySelector("#register");

const db = firebase.firestore()
const mobelregister = db.collection('mobelregister')

mobelregister.doc('3NsG7KShuCyJBkat0WoJ').update({
    pris: 1899
})

const endrePris = (id) => {
    const inpFelt = document.getElementById(id)
    const nyPris = inpFelt.value

    mobelregister.doc(id).update({
        pris: nyPris
    })
}

// Viser møblene som ligger i databasen
mobelregister.onSnapshot(snap => {
    register.innerHTML = `
    <div class="heading">
        <p><b>Navn</b></p>
        <p><b>Type</b></p>
        <p><b>Pris</b></p>
        <p><b>Rabatt</b></p>
        <p><b>Møbel ID</b></p>
        <p></p>
    </div>
    `
    for (const mobel of snap.docs) {
        register.innerHTML += `
        <article>
            <p>${mobel.data().navn}</p>
            <p>${mobel.data().type}</p>
            <p>${mobel.data().pris}</p>
            <p>${mobel.data().rabatt}</p>
            <p class="mobelSinId">${mobel.id}</p>
            <div class="endrePrisen">
                <input type='number' id='${mobel.id}' placeholder='Ny pris'/>
                <button onclick="endrePris('${mobel.id}')" >Endre pris</button>
            </div >
            <div class="action">
                <button class="action-btn buy">Buy</button>
                <button class="action-btn delete">Delete</button>
            </div>
        </article>
        `
    }
})
