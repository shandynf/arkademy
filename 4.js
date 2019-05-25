const cetak_gambar = (num) => {
    let i, j, chr = ''; 

    for (i = 1; i <= num; i++) {
        if (i === 1 || i === num) {     // evaluasi baris awal dan akhir
            for (j = 1; j <= num; j++) {
                chr = chr + " + ";
            }
        } else {
            for (j = 1; j <= num; j++) {    
                if ( j === (Math.round(num/2)) ) {
                    chr = chr + " + ";  // kondisi index tengah dari jumlah number
                } else {
                    chr = chr + " = "; 
                }
            }
        }
        
        console.log(chr);   // print chr
        chr = '';           // reset chr
    }
}

cetak_gambar(7);