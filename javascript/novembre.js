// couleur grise
var variable1 = document.getElementById("td1");
variable1.style.backgroundColor = "silver";

var variable2 = document.getElementById("td2");
variable2.style.backgroundColor = "silver";

//variable de base
var variable3 = document.getElementById("td3");

// couleur des cellules
if (localStorage.getItem("cuyleur1") === null) {
    variable3.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur1") === "'white'") {
    variable3.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur1") === "'green'") {
    variable3.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur1") === "'red'") {
    variable3.style.backgroundColor = "red";
};

//click event
variable3.addEventListener("click", function () {
    console.log("cliquer");
    if (variable3.style.backgroundColor === "white") {
        variable3.style.backgroundColor = "green";
        localStorage.setItem("cuyleur1", "'green'");
    } else if (variable3.style.backgroundColor === "green") {
        variable3.style.backgroundColor = "red";
        localStorage.setItem("cuyleur1", "'red'");
    } else if (variable3.style.backgroundColor === "red") {
        variable3.style.backgroundColor = "white";
        localStorage.setItem("cuyleur1", "'white'");
    }
});

//variable de base
var variable4 = document.getElementById("td4");

// defaults color
if (localStorage.getItem("cuyleur2") === null) {
    variable4.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur2") === "'white'") {
    variable4.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur2") === "'green'") {
    variable4.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur2") === "'red'") {
    variable4.style.backgroundColor = "red";
};

//click event
variable4.addEventListener("click", function () {
    console.log("cliquer");
    if (variable4.style.backgroundColor === "white") {
        variable4.style.backgroundColor = "green";
        localStorage.setItem("cuyleur2", "'green'");
    } else if (variable4.style.backgroundColor === "green") {
        variable4.style.backgroundColor = "red";
        localStorage.setItem("cuyleur2", "'red'");
    } else if (variable4.style.backgroundColor === "red") {
        variable4.style.backgroundColor = "white";
        localStorage.setItem("cuyleur2", "'white'");
    }
});

//variable de base
var variable5 = document.getElementById("td5");

// defaults color
if (localStorage.getItem("cuyleur5") === null) {
    variable5.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur5") === "'white'") {
    variable5.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur5") === "'green'") {
    variable5.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur5") === "'red'") {
    variable5.style.backgroundColor = "red";
};

//click event
variable5.addEventListener("click", function () {
    console.log("cliquer");
    if (variable5.style.backgroundColor === "white") {
        variable5.style.backgroundColor = "green";
        localStorage.setItem("cuyleur5", "'green'");
    } else if (variable5.style.backgroundColor === "green") {
        variable5.style.backgroundColor = "red";
        localStorage.setItem("cuyleur5", "'red'");
    } else if (variable5.style.backgroundColor === "red") {
        variable5.style.backgroundColor = "white";
        localStorage.setItem("cuyleur5", "'white'");
    }
});

//variable de base
var variable6 = document.getElementById("td6");

// defaults color
if (localStorage.getItem("cuyleur6") === null) {
    variable6.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur6") === "'white'") {
    variable6.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur6") === "'green'") {
    variable6.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur6") === "'red'") {
    variable6.style.backgroundColor = "red";
};

//click event
variable6.addEventListener("click", function () {
    console.log("cliquer");
    if (variable6.style.backgroundColor === "white") {
        variable6.style.backgroundColor = "green";
        localStorage.setItem("cuyleur6", "'green'");
    } else if (variable6.style.backgroundColor === "green") {
        variable6.style.backgroundColor = "red";
        localStorage.setItem("cuyleur6", "'red'");
    } else if (variable6.style.backgroundColor === "red") {
        variable6.style.backgroundColor = "white";
        localStorage.setItem("cuyleur6", "'white'");
    }
});

//variable de base
var variable7 = document.getElementById("td7");

// defaults color
if (localStorage.getItem("cuyleur7") === null) {
    variable7.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur7") === "'white'") {
    variable7.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur7") === "'green'") {
    variable7.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur7") === "'red'") {
    variable7.style.backgroundColor = "red";
};

//click event
variable7.addEventListener("click", function () {
    console.log("cliquer");
    if (variable7.style.backgroundColor === "white") {
        variable7.style.backgroundColor = "green";
        localStorage.setItem("cuyleur7", "'green'");
    } else if (variable7.style.backgroundColor === "green") {
        variable7.style.backgroundColor = "red";
        localStorage.setItem("cuyleur7", "'red'");
    } else if (variable7.style.backgroundColor === "red") {
        variable7.style.backgroundColor = "white";
        localStorage.setItem("cuyleur7", "'white'");
    }
});

//variable de base
var variable8 = document.getElementById("td8");

// defaults color
if (localStorage.getItem("cuyleur8") === null) {
    variable8.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur8") === "'white'") {
    variable8.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur8") === "'green'") {
    variable8.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur8") === "'red'") {
    variable8.style.backgroundColor = "red";
};

//click event
variable8.addEventListener("click", function () {
    console.log("cliquer");
    if (variable8.style.backgroundColor === "white") {
        variable8.style.backgroundColor = "green";
        localStorage.setItem("cuyleur8", "'green'");
    } else if (variable8.style.backgroundColor === "green") {
        variable8.style.backgroundColor = "red";
        localStorage.setItem("cuyleur8", "'red'");
    } else if (variable8.style.backgroundColor === "red") {
        variable8.style.backgroundColor = "white";
        localStorage.setItem("cuyleur8", "'white'");
    }
});

//variable de base
var variable9 = document.getElementById("td9");

// defaults color
if (localStorage.getItem("cuyleur9") === null) {
    variable9.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur9") === "'white'") {
    variable9.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur9") === "'green'") {
    variable9.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur9") === "'red'") {
    variable9.style.backgroundColor = "red";
};

//click event
variable9.addEventListener("click", function () {
    console.log("cliquer");
    if (variable9.style.backgroundColor === "white") {
        variable9.style.backgroundColor = "green";
        localStorage.setItem("cuyleur9", "'green'");
    } else if (variable9.style.backgroundColor === "green") {
        variable9.style.backgroundColor = "red";
        localStorage.setItem("cuyleur9", "'red'");
    } else if (variable9.style.backgroundColor === "red") {
        variable9.style.backgroundColor = "white";
        localStorage.setItem("cuyleur9", "'white'");
    }
});

//variable de base
var variable10 = document.getElementById("td10");

// defaults color
if (localStorage.getItem("cuyleur10") === null) {
    variable10.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur10") === "'white'") {
    variable10.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur10") === "'green'") {
    variable10.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur10") === "'red'") {
    variable10.style.backgroundColor = "red";
};

//click event
variable10.addEventListener("click", function () {
    console.log("cliquer");
    if (variable10.style.backgroundColor === "white") {
        variable10.style.backgroundColor = "green";
        localStorage.setItem("cuyleur10", "'green'");
    } else if (variable10.style.backgroundColor === "green") {
        variable10.style.backgroundColor = "red";
        localStorage.setItem("cuyleur10", "'red'");
    } else if (variable10.style.backgroundColor === "red") {
        variable10.style.backgroundColor = "white";
        localStorage.setItem("cuyleur10", "'white'");
    }
});

//variable de base
var variable11 = document.getElementById("td11");

// defaults color
if (localStorage.getItem("cuyleur11") === null) {
    variable11.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur11") === "'white'") {
    variable11.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur11") === "'green'") {
    variable11.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur11") === "'red'") {
    variable11.style.backgroundColor = "red";
};

//click event
variable11.addEventListener("click", function () {
    console.log("cliquer");
    if (variable11.style.backgroundColor === "white") {
        variable11.style.backgroundColor = "green";
        localStorage.setItem("cuyleur11", "'green'");
    } else if (variable11.style.backgroundColor === "green") {
        variable11.style.backgroundColor = "red";
        localStorage.setItem("cuyleur11", "'red'");
    } else if (variable11.style.backgroundColor === "red") {
        variable11.style.backgroundColor = "white";
        localStorage.setItem("cuyleur11", "'white'");
    }
});

//variable de base
var variable12 = document.getElementById("td12");

// defaults color
if (localStorage.getItem("cuyleur12") === null) {
    variable12.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur12") === "'white'") {
    variable12.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur12") === "'green'") {
    variable12.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur12") === "'red'") {
    variable12.style.backgroundColor = "red";
};

//click event
variable12.addEventListener("click", function () {
    console.log("cliquer");
    if (variable12.style.backgroundColor === "white") {
        variable12.style.backgroundColor = "green";
        localStorage.setItem("cuyleur12", "'green'");
    } else if (variable12.style.backgroundColor === "green") {
        variable12.style.backgroundColor = "red";
        localStorage.setItem("cuyleur12", "'red'");
    } else if (variable12.style.backgroundColor === "red") {
        variable12.style.backgroundColor = "white";
        localStorage.setItem("cuyleur12", "'white'");
    }
});

//variable de base
var variable13 = document.getElementById("td13");

// defaults color
if (localStorage.getItem("cuyleur13") === null) {
    variable13.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur13") === "'white'") {
    variable13.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur13") === "'green'") {
    variable13.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur13") === "'red'") {
    variable13.style.backgroundColor = "red";
};

//click event
variable13.addEventListener("click", function () {
    console.log("cliquer");
    if (variable13.style.backgroundColor === "white") {
        variable13.style.backgroundColor = "green";
        localStorage.setItem("cuyleur13", "'green'");
    } else if (variable13.style.backgroundColor === "green") {
        variable13.style.backgroundColor = "red";
        localStorage.setItem("cuyleur13", "'red'");
    } else if (variable13.style.backgroundColor === "red") {
        variable13.style.backgroundColor = "white";
        localStorage.setItem("cuyleur13", "'white'");
    }
});

//variable de base
var variable14 = document.getElementById("td14");

// defaults color
if (localStorage.getItem("cuyleur14") === null) {
    variable14.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur14") === "'white'") {
    variable14.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur14") === "'green'") {
    variable14.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur14") === "'red'") {
    variable14.style.backgroundColor = "red";
};

//click event
variable14.addEventListener("click", function () {
    console.log("cliquer");
    if (variable14.style.backgroundColor === "white") {
        variable14.style.backgroundColor = "green";
        localStorage.setItem("cuyleur14", "'green'");
    } else if (variable14.style.backgroundColor === "green") {
        variable14.style.backgroundColor = "red";
        localStorage.setItem("cuyleur14", "'red'");
    } else if (variable14.style.backgroundColor === "red") {
        variable14.style.backgroundColor = "white";
        localStorage.setItem("cuyleur14", "'white'");
    }
});

//variable de base
var variable15 = document.getElementById("td15");

// defaults color
if (localStorage.getItem("cuyleur15") === null) {
    variable15.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur15") === "'white'") {
    variable15.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur15") === "'green'") {
    variable15.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur15") === "'red'") {
    variable15.style.backgroundColor = "red";
};

//click event
variable15.addEventListener("click", function () {
    console.log("cliquer");
    if (variable15.style.backgroundColor === "white") {
        variable15.style.backgroundColor = "green";
        localStorage.setItem("cuyleur15", "'green'");
    } else if (variable15.style.backgroundColor === "green") {
        variable15.style.backgroundColor = "red";
        localStorage.setItem("cuyleur15", "'red'");
    } else if (variable15.style.backgroundColor === "red") {
        variable15.style.backgroundColor = "white";
        localStorage.setItem("cuyleur15", "'white'");
    }
});

//variable de base
var variable16 = document.getElementById("td16");

// defaults color
if (localStorage.getItem("cuyleur16") === null) {
    variable16.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur16") === "'white'") {
    variable16.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur16") === "'green'") {
    variable16.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur16") === "'red'") {
    variable16.style.backgroundColor = "red";
};

//click event
variable16.addEventListener("click", function () {
    console.log("cliquer");
    if (variable16.style.backgroundColor === "white") {
        variable16.style.backgroundColor = "green";
        localStorage.setItem("cuyleur16", "'green'");
    } else if (variable16.style.backgroundColor === "green") {
        variable16.style.backgroundColor = "red";
        localStorage.setItem("cuyleur16", "'red'");
    } else if (variable16.style.backgroundColor === "red") {
        variable16.style.backgroundColor = "white";
        localStorage.setItem("cuyleur16", "'white'");
    }
});

//variable de base
var variable17 = document.getElementById("td17");

// defaults color
if (localStorage.getItem("cuyleur17") === null) {
    variable17.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur17") === "'white'") {
    variable17.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur17") === "'green'") {
    variable17.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur17") === "'red'") {
    variable17.style.backgroundColor = "red";
};

//click event
variable17.addEventListener("click", function () {
    console.log("cliquer");
    if (variable17.style.backgroundColor === "white") {
        variable17.style.backgroundColor = "green";
        localStorage.setItem("cuyleur17", "'green'");
    } else if (variable17.style.backgroundColor === "green") {
        variable17.style.backgroundColor = "red";
        localStorage.setItem("cuyleur17", "'red'");
    } else if (variable17.style.backgroundColor === "red") {
        variable17.style.backgroundColor = "white";
        localStorage.setItem("cuyleur17", "'white'");
    }
});

//variable de base
var variable18 = document.getElementById("td18");

// defaults color
if (localStorage.getItem("cuyleur18") === null) {
    variable18.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur18") === "'white'") {
    variable18.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur18") === "'green'") {
    variable18.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur18") === "'red'") {
    variable18.style.backgroundColor = "red";
};

//click event
variable18.addEventListener("click", function () {
    console.log("cliquer");
    if (variable18.style.backgroundColor === "white") {
        variable18.style.backgroundColor = "green";
        localStorage.setItem("cuyleur18", "'green'");
    } else if (variable18.style.backgroundColor === "green") {
        variable18.style.backgroundColor = "red";
        localStorage.setItem("cuyleur18", "'red'");
    } else if (variable18.style.backgroundColor === "red") {
        variable18.style.backgroundColor = "white";
        localStorage.setItem("cuyleur18", "'white'");
    }
});

//variable de base
var variable19 = document.getElementById("td19");

// defaults color
if (localStorage.getItem("cuyleur19") === null) {
    variable19.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur19") === "'white'") {
    variable19.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur19") === "'green'") {
    variable19.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur19") === "'red'") {
    variable19.style.backgroundColor = "red";
};

//click event
variable19.addEventListener("click", function () {
    console.log("cliquer");
    if (variable19.style.backgroundColor === "white") {
        variable19.style.backgroundColor = "green";
        localStorage.setItem("cuyleur19", "'green'");
    } else if (variable19.style.backgroundColor === "green") {
        variable19.style.backgroundColor = "red";
        localStorage.setItem("cuyleur19", "'red'");
    } else if (variable19.style.backgroundColor === "red") {
        variable19.style.backgroundColor = "white";
        localStorage.setItem("cuyleur19", "'white'");
    }
});

//variable de base
var variable20 = document.getElementById("td20");

// defaults color
if (localStorage.getItem("cuyleur20") === null) {
    variable20.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur20") === "'white'") {
    variable20.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur20") === "'green'") {
    variable20.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur20") === "'red'") {
    variable20.style.backgroundColor = "red";
};

//click event
variable20.addEventListener("click", function () {
    console.log("cliquer");
    if (variable20.style.backgroundColor === "white") {
        variable20.style.backgroundColor = "green";
        localStorage.setItem("cuyleur20", "'green'");
    } else if (variable20.style.backgroundColor === "green") {
        variable20.style.backgroundColor = "red";
        localStorage.setItem("cuyleur20", "'red'");
    } else if (variable20.style.backgroundColor === "red") {
        variable20.style.backgroundColor = "white";
        localStorage.setItem("cuyleur20", "'white'");
    }
});

//variable de base
var variable21 = document.getElementById("td21");

// defaults color
if (localStorage.getItem("cuyleur21") === null) {
    variable21.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur21") === "'white'") {
    variable21.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur21") === "'green'") {
    variable21.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur21") === "'red'") {
    variable21.style.backgroundColor = "red";
};

//click event
variable21.addEventListener("click", function () {
    console.log("cliquer");
    if (variable21.style.backgroundColor === "white") {
        variable21.style.backgroundColor = "green";
        localStorage.setItem("cuyleur21", "'green'");
    } else if (variable21.style.backgroundColor === "green") {
        variable21.style.backgroundColor = "red";
        localStorage.setItem("cuyleur21", "'red'");
    } else if (variable21.style.backgroundColor === "red") {
        variable21.style.backgroundColor = "white";
        localStorage.setItem("cuyleur21", "'white'");
    }
});

//variable de base
var variable22 = document.getElementById("td22");

// defaults color
if (localStorage.getItem("cuyleur22") === null) {
    variable22.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur22") === "'white'") {
    variable22.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur22") === "'green'") {
    variable22.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur22") === "'red'") {
    variable22.style.backgroundColor = "red";
};

//click event
variable22.addEventListener("click", function () {
    console.log("cliquer");
    if (variable22.style.backgroundColor === "white") {
        variable22.style.backgroundColor = "green";
        localStorage.setItem("cuyleur22", "'green'");
    } else if (variable22.style.backgroundColor === "green") {
        variable22.style.backgroundColor = "red";
        localStorage.setItem("cuyleur22", "'red'");
    } else if (variable22.style.backgroundColor === "red") {
        variable22.style.backgroundColor = "white";
        localStorage.setItem("cuyleur22", "'white'");
    }
});

//variable de base
var variable23 = document.getElementById("td23");

// defaults color
if (localStorage.getItem("cuyleur23") === null) {
    variable23.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur23") === "'white'") {
    variable23.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur23") === "'green'") {
    variable23.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur23") === "'red'") {
    variable23.style.backgroundColor = "red";
};

//click event
variable23.addEventListener("click", function () {
    console.log("cliquer");
    if (variable23.style.backgroundColor === "white") {
        variable23.style.backgroundColor = "green";
        localStorage.setItem("cuyleur23", "'green'");
    } else if (variable23.style.backgroundColor === "green") {
        variable23.style.backgroundColor = "red";
        localStorage.setItem("cuyleur23", "'red'");
    } else if (variable23.style.backgroundColor === "red") {
        variable23.style.backgroundColor = "white";
        localStorage.setItem("cuyleur23", "'white'");
    }
});

//variable de base
var variable24 = document.getElementById("td24");

// defaults color
if (localStorage.getItem("cuyleur24") === null) {
    variable24.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur24") === "'white'") {
    variable24.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur24") === "'green'") {
    variable24.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur24") === "'red'") {
    variable24.style.backgroundColor = "red";
};

//click event
variable24.addEventListener("click", function () {
    console.log("cliquer");
    if (variable24.style.backgroundColor === "white") {
        variable24.style.backgroundColor = "green";
        localStorage.setItem("cuyleur24", "'green'");
    } else if (variable24.style.backgroundColor === "green") {
        variable24.style.backgroundColor = "red";
        localStorage.setItem("cuyleur24", "'red'");
    } else if (variable24.style.backgroundColor === "red") {
        variable24.style.backgroundColor = "white";
        localStorage.setItem("cuyleur24", "'white'");
    }
});

//variable de base
var variable25 = document.getElementById("td25");

// defaults color
if (localStorage.getItem("cuyleur25") === null) {
    variable25.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur25") === "'white'") {
    variable25.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur25") === "'green'") {
    variable25.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur25") === "'red'") {
    variable25.style.backgroundColor = "red";
};

//click event
variable25.addEventListener("click", function () {
    console.log("cliquer");
    if (variable25.style.backgroundColor === "white") {
        variable25.style.backgroundColor = "green";
        localStorage.setItem("cuyleur25", "'green'");
    } else if (variable25.style.backgroundColor === "green") {
        variable25.style.backgroundColor = "red";
        localStorage.setItem("cuyleur25", "'red'");
    } else if (variable25.style.backgroundColor === "red") {
        variable25.style.backgroundColor = "white";
        localStorage.setItem("cuyleur25", "'white'");
    }
});

//variable de base
var variable26 = document.getElementById("td26");

// defaults color
if (localStorage.getItem("cuyleur26") === null) {
    variable26.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur26") === "'white'") {
    variable26.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur26") === "'green'") {
    variable26.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur26") === "'red'") {
    variable26.style.backgroundColor = "red";
};

//click event
variable26.addEventListener("click", function () {
    console.log("cliquer");
    if (variable26.style.backgroundColor === "white") {
        variable26.style.backgroundColor = "green";
        localStorage.setItem("cuyleur26", "'green'");
    } else if (variable26.style.backgroundColor === "green") {
        variable26.style.backgroundColor = "red";
        localStorage.setItem("cuyleur26", "'red'");
    } else if (variable26.style.backgroundColor === "red") {
        variable26.style.backgroundColor = "white";
        localStorage.setItem("cuyleur26", "'white'");
    }
});

//variable de base
var variable27 = document.getElementById("td27");

// defaults color
if (localStorage.getItem("cuyleur27") === null) {
    variable27.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur27") === "'white'") {
    variable27.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur27") === "'green'") {
    variable27.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur27") === "'red'") {
    variable27.style.backgroundColor = "red";
};

//click event
variable27.addEventListener("click", function () {
    console.log("cliquer");
    if (variable27.style.backgroundColor === "white") {
        variable27.style.backgroundColor = "green";
        localStorage.setItem("cuyleur27", "'green'");
    } else if (variable27.style.backgroundColor === "green") {
        variable27.style.backgroundColor = "red";
        localStorage.setItem("cuyleur27", "'red'");
    } else if (variable27.style.backgroundColor === "red") {
        variable27.style.backgroundColor = "white";
        localStorage.setItem("cuyleur27", "'white'");
    }
});

//variable de base
var variable28 = document.getElementById("td28");

// defaults color
if (localStorage.getItem("cuyleur28") === null) {
    variable28.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur28") === "'white'") {
    variable28.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur28") === "'green'") {
    variable28.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur28") === "'red'") {
    variable28.style.backgroundColor = "red";
};

//click event
variable28.addEventListener("click", function () {
    console.log("cliquer");
    if (variable28.style.backgroundColor === "white") {
        variable28.style.backgroundColor = "green";
        localStorage.setItem("cuyleur28", "'green'");
    } else if (variable28.style.backgroundColor === "green") {
        variable28.style.backgroundColor = "red";
        localStorage.setItem("cuyleur28", "'red'");
    } else if (variable28.style.backgroundColor === "red") {
        variable28.style.backgroundColor = "white";
        localStorage.setItem("cuyleur28", "'white'");
    }
});

//variable de base
var variable29 = document.getElementById("td29");

// defaults color
if (localStorage.getItem("cuyleur29") === null) {
    variable29.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur29") === "'white'") {
    variable29.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur29") === "'green'") {
    variable29.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur29") === "'red'") {
    variable29.style.backgroundColor = "red";
};

//click event
variable29.addEventListener("click", function () {
    console.log("cliquer");
    if (variable29.style.backgroundColor === "white") {
        variable29.style.backgroundColor = "green";
        localStorage.setItem("cuyleur29", "'green'");
    } else if (variable29.style.backgroundColor === "green") {
        variable29.style.backgroundColor = "red";
        localStorage.setItem("cuyleur29", "'red'");
    } else if (variable29.style.backgroundColor === "red") {
        variable29.style.backgroundColor = "white";
        localStorage.setItem("cuyleur29", "'white'");
    }
});

//variable de base
var variable30 = document.getElementById("td30");

// defaults color
if (localStorage.getItem("cuyleur30") === null) {
    variable30.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur30") === "'white'") {
    variable30.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur30") === "'green'") {
    variable30.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur30") === "'red'") {
    variable30.style.backgroundColor = "red";
};

//click event
variable30.addEventListener("click", function () {
    console.log("cliquer");
    if (variable30.style.backgroundColor === "white") {
        variable30.style.backgroundColor = "green";
        localStorage.setItem("cuyleur30", "'green'");
    } else if (variable30.style.backgroundColor === "green") {
        variable30.style.backgroundColor = "red";
        localStorage.setItem("cuyleur30", "'red'");
    } else if (variable30.style.backgroundColor === "red") {
        variable30.style.backgroundColor = "white";
        localStorage.setItem("cuyleur30", "'white'");
    }
});

//variable de base
var variable31 = document.getElementById("td31");

// defaults color
if (localStorage.getItem("cuyleur31") === null) {
    variable31.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur31") === "'white'") {
    variable31.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur31") === "'green'") {
    variable31.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur31") === "'red'") {
    variable31.style.backgroundColor = "red";
};

//click event
variable31.addEventListener("click", function () {
    console.log("cliquer");
    if (variable31.style.backgroundColor === "white") {
        variable31.style.backgroundColor = "green";
        localStorage.setItem("cuyleur31", "'green'");
    } else if (variable31.style.backgroundColor === "green") {
        variable31.style.backgroundColor = "red";
        localStorage.setItem("cuyleur31", "'red'");
    } else if (variable31.style.backgroundColor === "red") {
        variable31.style.backgroundColor = "white";
        localStorage.setItem("cuyleur31", "'white'");
    }
});

//variable de base
var variable32 = document.getElementById("td32");

// defaults color
if (localStorage.getItem("cuyleur32") === null) {
    variable32.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur32") === "'white'") {
    variable32.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur32") === "'green'") {
    variable32.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur32") === "'red'") {
    variable32.style.backgroundColor = "red";
};

//click event
variable32.addEventListener("click", function () {
    console.log("cliquer");
    if (variable32.style.backgroundColor === "white") {
        variable32.style.backgroundColor = "green";
        localStorage.setItem("cuyleur32", "'green'");
    } else if (variable32.style.backgroundColor === "green") {
        variable32.style.backgroundColor = "red";
        localStorage.setItem("cuyleur32", "'red'");
    } else if (variable32.style.backgroundColor === "red") {
        variable32.style.backgroundColor = "white";
        localStorage.setItem("cuyleur32", "'white'");
    }
});

//variable de base
var variable33 = document.getElementById("td33");

// defaults color
if (localStorage.getItem("cuyleur33") === null) {
    variable33.style.backgroundColor = "white";
};

if (localStorage.getItem("cuyleur33") === "'white'") {
    variable33.style.backgroundColor = "white";
} else if (localStorage.getItem("cuyleur33") === "'green'") {
    variable33.style.backgroundColor = "green";
} else if (localStorage.getItem("cuyleur33") === "'red'") {
    variable33.style.backgroundColor = "red";
};

//click event
variable33.addEventListener("click", function () {
    console.log("cliquer");
    if (variable33.style.backgroundColor === "white") {
        variable33.style.backgroundColor = "green";
        localStorage.setItem("cuyleur33", "'green'");
    } else if (variable33.style.backgroundColor === "green") {
        variable33.style.backgroundColor = "red";
        localStorage.setItem("cuyleur33", "'red'");
    } else if (variable33.style.backgroundColor === "red") {
        variable33.style.backgroundColor = "white";
        localStorage.setItem("cuyleur33", "'white'");
    }
});

// couleur grise
var variable34 = document.getElementById("td34");
variable34.style.backgroundColor = "silver";

// couleur grise
var variable35 = document.getElementById("td35");
variable35.style.backgroundColor = "silver";

// bouton retour
let retour = document.getElementById("retour");
retour.addEventListener("click", function() {
    document.location.href="../../pages/menu.html";
});