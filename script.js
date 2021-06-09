const Whitebtn = document.querySelectorAll('.button-white');
//music songs
const musicC = new Audio('/audio/piano-c_C_major.wav')
const MusicD = new Audio('/audio/piano-d_D_major.wav')
const MusicE = new Audio('/audio/piano-e_E_major.wav')
const MusicF = new Audio('/audio/piano-f_F_major.wav')
const MusicG = new Audio('/audio/piano-g_G_major.wav')

Whitebtn.forEach(n => {
    n.addEventListener('click', () => {
        if (n.firstElementChild) {
            let newSong = n.firstElementChild.getAttribute('src')
            if (newSong.includes('piano-c')) {
                musicC.play();
            } else if (newSong.includes('piano-e')) {
                MusicE.play();
            } else if (newSong.includes('piano-d')) {
                MusicD.play();
            } else if (newSong.includes('piano-f')) {
                MusicF.play();
            } else if (newSong.includes('piano-g')) {
                MusicG.play();
            }
        }
    })
});