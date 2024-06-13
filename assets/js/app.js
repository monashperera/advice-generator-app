let btnGenerate = document.getElementById('btnGenerate');
let loader = document.getElementById('adviceLoader');
let advTextCon = document.getElementById('adviceTextCon');
let advID = document.getElementById('adviceID');
let advText = document.getElementById('adviceText');
let iconDice = document.getElementById('iconDice');

const adviceGenerate = async () => {
    try {
        advID.classList.add("d-none");
        advTextCon.classList.add("d-none");
        loader.classList.remove("d-none");
        iconDice.classList.add("spin-rotate");
        let url = new URL('https://api.adviceslip.com/advice');
        url.searchParams.set('v', Date.now())
        let response = await fetch(url);
        let json = await response.json();
        if(response.ok) {
            setTimeout(() => {
                loader.classList.add("d-none");
                advID.classList.remove("d-none");
                advTextCon.classList.remove("d-none");
                iconDice.classList.remove("spin-rotate");
            }, 1400);
        }
        advID.innerHTML = json.slip.id;
        advText.innerHTML = `&ldquo;${json.slip.advice}&rdquo;`;
    } catch (error) {
        console.log(error);
    }
};

adviceGenerate();

btnGenerate.addEventListener("click", adviceGenerate);