const ganti_kata = (str, sel, rep) => {     //sel: select , rep: replace
	var new_str = '';   
  	for (var i = 0; i < str.length; i++) {
    	if(sel.indexOf(str[i]) !== -1) {    //memeriksa keberadaan string
        	new_str += rep;     
        } else {
        	new_str += str[i];
        }
    }
  	return new_str;
}

console.log(ganti_kata('purwakarta', 'a', 'o'));