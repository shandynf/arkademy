const biodata = (nama, alamat, hobi, menikah) => {
    var school = {
        highSchool: "sman 1 ciasem",
        university: "universitas "
    };

    var skills = {
        skill: "ms office",
        score: "70"
    }

    var inf = { name: nama, address: alamat, hobbies: hobi, is_married: menikah };
    var a = JSON.stringify(inf);   
    var b = JSON.stringify(school);
    var c = JSON.stringify(skills);

    return a+b+c;
}

console.log(biodata('shandy','subang','gadgeting',false));