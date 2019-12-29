document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app();
    const db  = firebase.firestore();
    const surah = db.collection("al-fatihah");
    console.log(app)
    
    surah.doc("1-2").set({
        verse_no : "2",
        verse  : " ٱللَّهُ ٱلصَّمَدُ"
    })

    surah.doc("1-3").set({
        verse_no : "3",
        verse  : " لَمْ يَلِدْ وَلَمْ يُولَدْ"
    })

    surah.doc("1-4").set({
        verse_no : "4",
        verse  : " وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ"
    })

    surah.doc("1-1").get()
        .then(doc => {
            const data = doc.data();
            document.write(data.verse_no + `<br>`)
            document.write(data.verse)
        })
})