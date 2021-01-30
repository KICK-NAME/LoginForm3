function buatGetaran(pola){
            var getaran = window.navigator.vibrate(pola);

            // tampilkan hasilnya ke console
            // kalau true berarti browser mendukung untuk membuat getaran
            // tapi kalau false browser tidak mendukung
            console.log(getaran);