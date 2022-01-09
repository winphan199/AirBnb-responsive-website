function responsiveMain(x) {
    let placeList = document.querySelectorAll(".content--limit-row .grid__col-3");
    let placeListAfter = document.querySelectorAll(".content--limit-row .grid__col-4");
    let expList = document.querySelectorAll(".experience-limit-row .grid__col-3");
    let expListAfter = document.querySelectorAll(".experience-limit-row .grid__col-4");
    if (x.matches) {
        placeList.forEach(e=> {
            e.classList.replace("grid__col-3", "grid__col-4");
        })
        expList.forEach(e=> {
            e.classList.replace("grid__col-3", "grid__col-4");
        })
    }
    else {
        placeListAfter.forEach(e=> {
            e.classList.replace("grid__col-4", "grid__col-3");
        })
        expListAfter.forEach(e=> {
            e.classList.replace("grid__col-4", "grid__col-3");
        })
    }
}

function responsiveMain_mobile(x) {
    let placeList = document.querySelectorAll(".content--limit-row .grid__col-4");
    let placeListAfter = document.querySelectorAll(".content--limit-row .grid__col-6");
    let expList = document.querySelectorAll(".experience-limit-row .grid__col-4");
    let expListAfter = document.querySelectorAll(".experience-limit-row .grid__col-6");
    if (x.matches) {
        placeList.forEach(e=> {
            e.classList.replace("grid__col-4", "grid__col-6");
        })
        expList.forEach(e=> {
            e.classList.replace("grid__col-4", "grid__col-6");
        })
    }
    else {
        placeListAfter.forEach(e=> {
            e.classList.replace("grid__col-6", "grid__col-4");
        })
        expListAfter.forEach(e=> {
            e.classList.replace("grid__col-6", "grid__col-4");
        })
    }
}