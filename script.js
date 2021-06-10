const Whitebtn = document.querySelectorAll('.button-white');
//white Button music songs
const musicC = new Audio('./audio/piano-c_C_major.wav')
const MusicD = new Audio('./audio/piano-d_D_major.wav')
const MusicE = new Audio('./audio/piano-e_E_major.wav')
const MusicF = new Audio('./audio/piano-f_F_major.wav')
const MusicG = new Audio('./audio/piano-g_G_major.wav')
const MusicA = new Audio('./audio/piano-a_A.mp3')
const MusicB = new Audio('./audio/piano-b_B.mp3')

Whitebtn.forEach(n => {
    n.addEventListener('click', () => {
        if (n.firstElementChild) {
            let newSong = n.firstElementChild.getAttribute('src')
            if (newSong.includes('piano-c')) {
                addSymbol(n);
                musicC.play();
            } else if (newSong.includes('piano-e')) {
                addSymbol(n);
                MusicE.play();
            } else if (newSong.includes('piano-d')) {
                addSymbol(n);
                MusicD.play();
            } else if (newSong.includes('piano-f')) {
                addSymbol(n);
                MusicF.play();
            } else if (newSong.includes('piano-g')) {
                addSymbol(n);
                MusicG.play();
            } else if (newSong.includes('piano-a')) {
                addSymbol(n);
                MusicA.play();
            } else if (newSong.includes('piano-b')) {
                addSymbol(n);
                MusicB.play()
            }
        }
    })
});

function addSymbol(block) {
    const newNote = document.createElement('div')
    newNote.classList.add('note');
    block.appendChild(newNote)
    newNote.addEventListener('animationend', () => {
        block.removeChild(newNote);
    })
}