// couleur grise
var variable1 = document.getElementById("tr1");
variable1.style.backgroundColor = "silver";

var variable2 = document.getElementById("tr2");
variable2.style.backgroundColor = "silver";

//variable de base
var variable3 = document.getElementById("tr3");

// couleur des cellules
if (localStorage.getItem("couleur34") === null) {
    variable3.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur34") === "'white'") {
    variable3.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur34") === "'green'") {
    variable3.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur34") === "'red'") {
    variable3.style.backgroundColor = "red";
};

//click event
variable3.addEventListener("click", function () {
    console.log("cliquer");
    if (variable3.style.backgroundColor === "white") {
        variable3.style.backgroundColor = "green";
        localStorage.setItem("couleur34", "'green'");
    } else if (variable3.style.backgroundColor === "green") {
        variable3.style.backgroundColor = "red";
        localStorage.setItem("couleur34", "'red'");
    } else if (variable3.style.backgroundColor === "red") {
        variable3.style.backgroundColor = "white";
        localStorage.setItem("couleur34", "'white'");
    }
});

//variable de base
var variable4 = document.getElementById("tr4");

// defaults color
if (localStorage.getItem("couleur35") === null) {
    variable4.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur35") === "'white'") {
    variable4.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur35") === "'green'") {
    variable4.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur35") === "'red'") {
    variable4.style.backgroundColor = "red";
};

//click event
variable4.addEventListener("click", function () {
    console.log("cliquer");
    if (variable4.style.backgroundColor === "white") {
        variable4.style.backgroundColor = "green";
        localStorage.setItem("couleur35", "'green'");
    } else if (variable4.style.backgroundColor === "green") {
        variable4.style.backgroundColor = "red";
        localStorage.setItem("couleur35", "'red'");
    } else if (variable4.style.backgroundColor === "red") {
        variable4.style.backgroundColor = "white";
        localStorage.setItem("couleur35", "'white'");
    }
});

//variable de base
var variable5 = document.getElementById("tr5");

// defaults color
if (localStorage.getItem("couleur36") === null) {
    variable5.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur36") === "'white'") {
    variable5.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur36") === "'green'") {
    variable5.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur36") === "'red'") {
    variable5.style.backgroundColor = "red";
};

//click event
variable5.addEventListener("click", function () {
    console.log("cliquer");
    if (variable5.style.backgroundColor === "white") {
        variable5.style.backgroundColor = "green";
        localStorage.setItem("couleur36", "'green'");
    } else if (variable5.style.backgroundColor === "green") {
        variable5.style.backgroundColor = "red";
        localStorage.setItem("couleur36", "'red'");
    } else if (variable5.style.backgroundColor === "red") {
        variable5.style.backgroundColor = "white";
        localStorage.setItem("couleur36", "'white'");
    }
});

//variable de base
var variable6 = document.getElementById("tr6");

// defaults color
if (localStorage.getItem("couleur37") === null) {
    variable6.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur37") === "'white'") {
    variable6.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur37") === "'green'") {
    variable6.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur37") === "'red'") {
    variable6.style.backgroundColor = "red";
};

//click event
variable6.addEventListener("click", function () {
    console.log("cliquer");
    if (variable6.style.backgroundColor === "white") {
        variable6.style.backgroundColor = "green";
        localStorage.setItem("couleur37", "'green'");
    } else if (variable6.style.backgroundColor === "green") {
        variable6.style.backgroundColor = "red";
        localStorage.setItem("couleur37", "'red'");
    } else if (variable6.style.backgroundColor === "red") {
        variable6.style.backgroundColor = "white";
        localStorage.setItem("couleur37", "'white'");
    }
});

//variable de base
var variable7 = document.getElementById("tr7");

// defaults color
if (localStorage.getItem("couleur38") === null) {
    variable7.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur38") === "'white'") {
    variable7.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur38") === "'green'") {
    variable7.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur38") === "'red'") {
    variable7.style.backgroundColor = "red";
};

//click event
variable7.addEventListener("click", function () {
    console.log("cliquer");
    if (variable7.style.backgroundColor === "white") {
        variable7.style.backgroundColor = "green";
        localStorage.setItem("couleur38", "'green'");
    } else if (variable7.style.backgroundColor === "green") {
        variable7.style.backgroundColor = "red";
        localStorage.setItem("couleur38", "'red'");
    } else if (variable7.style.backgroundColor === "red") {
        variable7.style.backgroundColor = "white";
        localStorage.setItem("couleur38", "'white'");
    }
});

//variable de base
var variable8 = document.getElementById("tr8");

// defaults color
if (localStorage.getItem("couleur008") === null) {
    variable8.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur008") === "'white'") {
    variable8.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur008") === "'green'") {
    variable8.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur008") === "'red'") {
    variable8.style.backgroundColor = "red";
};

//click event
variable8.addEventListener("click", function () {
    console.log("cliquer");
    if (variable8.style.backgroundColor === "white") {
        variable8.style.backgroundColor = "green";
        localStorage.setItem("couleur008", "'green'");
    } else if (variable8.style.backgroundColor === "green") {
        variable8.style.backgroundColor = "red";
        localStorage.setItem("couleur008", "'red'");
    } else if (variable8.style.backgroundColor === "red") {
        variable8.style.backgroundColor = "white";
        localStorage.setItem("couleur008", "'white'");
    }
});

//variable de base
var variable9 = document.getElementById("tr9");

// defaults color
if (localStorage.getItem("couleur39") === null) {
    variable9.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur39") === "'white'") {
    variable9.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur39") === "'green'") {
    variable9.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur39") === "'red'") {
    variable9.style.backgroundColor = "red";
};

//click event
variable9.addEventListener("click", function () {
    console.log("cliquer");
    if (variable9.style.backgroundColor === "white") {
        variable9.style.backgroundColor = "green";
        localStorage.setItem("couleur39", "'green'");
    } else if (variable9.style.backgroundColor === "green") {
        variable9.style.backgroundColor = "red";
        localStorage.setItem("couleur39", "'red'");
    } else if (variable9.style.backgroundColor === "red") {
        variable9.style.backgroundColor = "white";
        localStorage.setItem("couleur39", "'white'");
    }
});

//variable de base
var variable10 = document.getElementById("tr10");

// defaults color
if (localStorage.getItem("couleur40") === null) {
    variable10.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur40") === "'white'") {
    variable10.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur40") === "'green'") {
    variable10.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur40") === "'red'") {
    variable10.style.backgroundColor = "red";
};

//click event
variable10.addEventListener("click", function () {
    console.log("cliquer");
    if (variable10.style.backgroundColor === "white") {
        variable10.style.backgroundColor = "green";
        localStorage.setItem("couleur40", "'green'");
    } else if (variable10.style.backgroundColor === "green") {
        variable10.style.backgroundColor = "red";
        localStorage.setItem("couleur40", "'red'");
    } else if (variable10.style.backgroundColor === "red") {
        variable10.style.backgroundColor = "white";
        localStorage.setItem("couleur40", "'white'");
    }
});

//variable de base
var variable11 = document.getElementById("tr11");

// defaults color
if (localStorage.getItem("couleur41") === null) {
    variable11.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur41") === "'white'") {
    variable11.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur41") === "'green'") {
    variable11.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur41") === "'red'") {
    variable11.style.backgroundColor = "red";
};

//click event
variable11.addEventListener("click", function () {
    console.log("cliquer");
    if (variable11.style.backgroundColor === "white") {
        variable11.style.backgroundColor = "green";
        localStorage.setItem("couleur41", "'green'");
    } else if (variable11.style.backgroundColor === "green") {
        variable11.style.backgroundColor = "red";
        localStorage.setItem("couleur41", "'red'");
    } else if (variable11.style.backgroundColor === "red") {
        variable11.style.backgroundColor = "white";
        localStorage.setItem("couleur41", "'white'");
    }
});

//variable de base
var variable12 = document.getElementById("tr12");

// defaults color
if (localStorage.getItem("couleur42") === null) {
    variable12.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur42") === "'white'") {
    variable12.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur42") === "'green'") {
    variable12.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur42") === "'red'") {
    variable12.style.backgroundColor = "red";
};

//click event
variable12.addEventListener("click", function () {
    console.log("cliquer");
    if (variable12.style.backgroundColor === "white") {
        variable12.style.backgroundColor = "green";
        localStorage.setItem("couleur42", "'green'");
    } else if (variable12.style.backgroundColor === "green") {
        variable12.style.backgroundColor = "red";
        localStorage.setItem("couleur42", "'red'");
    } else if (variable12.style.backgroundColor === "red") {
        variable12.style.backgroundColor = "white";
        localStorage.setItem("couleur42", "'white'");
    }
});

//variable de base
var variable13 = document.getElementById("tr13");

// defaults color
if (localStorage.getItem("couleur43") === null) {
    variable13.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur43") === "'white'") {
    variable13.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur43") === "'green'") {
    variable13.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur43") === "'red'") {
    variable13.style.backgroundColor = "red";
};

//click event
variable13.addEventListener("click", function () {
    console.log("cliquer");
    if (variable13.style.backgroundColor === "white") {
        variable13.style.backgroundColor = "green";
        localStorage.setItem("couleur43", "'green'");
    } else if (variable13.style.backgroundColor === "green") {
        variable13.style.backgroundColor = "red";
        localStorage.setItem("couleur43", "'red'");
    } else if (variable13.style.backgroundColor === "red") {
        variable13.style.backgroundColor = "white";
        localStorage.setItem("couleur43", "'white'");
    }
});

//variable de base
var variable14 = document.getElementById("tr14");

// defaults color
if (localStorage.getItem("couleur44") === null) {
    variable14.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur44") === "'white'") {
    variable14.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur44") === "'green'") {
    variable14.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur44") === "'red'") {
    variable14.style.backgroundColor = "red";
};

//click event
variable14.addEventListener("click", function () {
    console.log("cliquer");
    if (variable14.style.backgroundColor === "white") {
        variable14.style.backgroundColor = "green";
        localStorage.setItem("couleur44", "'green'");
    } else if (variable14.style.backgroundColor === "green") {
        variable14.style.backgroundColor = "red";
        localStorage.setItem("couleur44", "'red'");
    } else if (variable14.style.backgroundColor === "red") {
        variable14.style.backgroundColor = "white";
        localStorage.setItem("couleur44", "'white'");
    }
});

//variable de base
var variable15 = document.getElementById("tr15");

// defaults color
if (localStorage.getItem("couleur45") === null) {
    variable15.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur45") === "'white'") {
    variable15.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur45") === "'green'") {
    variable15.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur45") === "'red'") {
    variable15.style.backgroundColor = "red";
};

//click event
variable15.addEventListener("click", function () {
    console.log("cliquer");
    if (variable15.style.backgroundColor === "white") {
        variable15.style.backgroundColor = "green";
        localStorage.setItem("couleur45", "'green'");
    } else if (variable15.style.backgroundColor === "green") {
        variable15.style.backgroundColor = "red";
        localStorage.setItem("couleur45", "'red'");
    } else if (variable15.style.backgroundColor === "red") {
        variable15.style.backgroundColor = "white";
        localStorage.setItem("couleur45", "'white'");
    }
});

//variable de base
var variable16 = document.getElementById("tr16");

// defaults color
if (localStorage.getItem("couleur46") === null) {
    variable16.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur46") === "'white'") {
    variable16.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur46") === "'green'") {
    variable16.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur46") === "'red'") {
    variable16.style.backgroundColor = "red";
};

//click event
variable16.addEventListener("click", function () {
    console.log("cliquer");
    if (variable16.style.backgroundColor === "white") {
        variable16.style.backgroundColor = "green";
        localStorage.setItem("couleur46", "'green'");
    } else if (variable16.style.backgroundColor === "green") {
        variable16.style.backgroundColor = "red";
        localStorage.setItem("couleur46", "'red'");
    } else if (variable16.style.backgroundColor === "red") {
        variable16.style.backgroundColor = "white";
        localStorage.setItem("couleur46", "'white'");
    }
});

//variable de base
var variable17 = document.getElementById("tr17");

// defaults color
if (localStorage.getItem("couleur47") === null) {
    variable17.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur47") === "'white'") {
    variable17.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur47") === "'green'") {
    variable17.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur47") === "'red'") {
    variable17.style.backgroundColor = "red";
};

//click event
variable17.addEventListener("click", function () {
    console.log("cliquer");
    if (variable17.style.backgroundColor === "white") {
        variable17.style.backgroundColor = "green";
        localStorage.setItem("couleur47", "'green'");
    } else if (variable17.style.backgroundColor === "green") {
        variable17.style.backgroundColor = "red";
        localStorage.setItem("couleur47", "'red'");
    } else if (variable17.style.backgroundColor === "red") {
        variable17.style.backgroundColor = "white";
        localStorage.setItem("couleur47", "'white'");
    }
});

//variable de base
var variable18 = document.getElementById("tr18");

// defaults color
if (localStorage.getItem("couleur48") === null) {
    variable18.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur48") === "'white'") {
    variable18.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur48") === "'green'") {
    variable18.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur48") === "'red'") {
    variable18.style.backgroundColor = "red";
};

//click event
variable18.addEventListener("click", function () {
    console.log("cliquer");
    if (variable18.style.backgroundColor === "white") {
        variable18.style.backgroundColor = "green";
        localStorage.setItem("couleur48", "'green'");
    } else if (variable18.style.backgroundColor === "green") {
        variable18.style.backgroundColor = "red";
        localStorage.setItem("couleur48", "'red'");
    } else if (variable18.style.backgroundColor === "red") {
        variable18.style.backgroundColor = "white";
        localStorage.setItem("couleur48", "'white'");
    }
});

//variable de base
var variable19 = document.getElementById("tr19");

// defaults color
if (localStorage.getItem("couleur49") === null) {
    variable19.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur49") === "'white'") {
    variable19.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur49") === "'green'") {
    variable19.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur49") === "'red'") {
    variable19.style.backgroundColor = "red";
};

//click event
variable19.addEventListener("click", function () {
    console.log("cliquer");
    if (variable19.style.backgroundColor === "white") {
        variable19.style.backgroundColor = "green";
        localStorage.setItem("couleur49", "'green'");
    } else if (variable19.style.backgroundColor === "green") {
        variable19.style.backgroundColor = "red";
        localStorage.setItem("couleur49", "'red'");
    } else if (variable19.style.backgroundColor === "red") {
        variable19.style.backgroundColor = "white";
        localStorage.setItem("couleur49", "'white'");
    }
});

//variable de base
var variable20 = document.getElementById("tr20");

// defaults color
if (localStorage.getItem("couleur50") === null) {
    variable20.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur50") === "'white'") {
    variable20.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur50") === "'green'") {
    variable20.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur50") === "'red'") {
    variable20.style.backgroundColor = "red";
};

//click event
variable20.addEventListener("click", function () {
    console.log("cliquer");
    if (variable20.style.backgroundColor === "white") {
        variable20.style.backgroundColor = "green";
        localStorage.setItem("couleur50", "'green'");
    } else if (variable20.style.backgroundColor === "green") {
        variable20.style.backgroundColor = "red";
        localStorage.setItem("couleur50", "'red'");
    } else if (variable20.style.backgroundColor === "red") {
        variable20.style.backgroundColor = "white";
        localStorage.setItem("couleur50", "'white'");
    }
});

//variable de base
var variable21 = document.getElementById("tr21");

// defaults color
if (localStorage.getItem("couleur51") === null) {
    variable21.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur51") === "'white'") {
    variable21.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur51") === "'green'") {
    variable21.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur51") === "'red'") {
    variable21.style.backgroundColor = "red";
};

//click event
variable21.addEventListener("click", function () {
    console.log("cliquer");
    if (variable21.style.backgroundColor === "white") {
        variable21.style.backgroundColor = "green";
        localStorage.setItem("couleur51", "'green'");
    } else if (variable21.style.backgroundColor === "green") {
        variable21.style.backgroundColor = "red";
        localStorage.setItem("couleur51", "'red'");
    } else if (variable21.style.backgroundColor === "red") {
        variable21.style.backgroundColor = "white";
        localStorage.setItem("couleur51", "'white'");
    }
});

//variable de base
var variable22 = document.getElementById("tr22");

// defaults color
if (localStorage.getItem("couleur52") === null) {
    variable22.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur52") === "'white'") {
    variable22.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur52") === "'green'") {
    variable22.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur52") === "'red'") {
    variable22.style.backgroundColor = "red";
};

//click event
variable22.addEventListener("click", function () {
    console.log("cliquer");
    if (variable22.style.backgroundColor === "white") {
        variable22.style.backgroundColor = "green";
        localStorage.setItem("couleur52", "'green'");
    } else if (variable22.style.backgroundColor === "green") {
        variable22.style.backgroundColor = "red";
        localStorage.setItem("couleur52", "'red'");
    } else if (variable22.style.backgroundColor === "red") {
        variable22.style.backgroundColor = "white";
        localStorage.setItem("couleur52", "'white'");
    }
});

//variable de base
var variable23 = document.getElementById("tr23");

// defaults color
if (localStorage.getItem("couleur53") === null) {
    variable23.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur53") === "'white'") {
    variable23.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur53") === "'green'") {
    variable23.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur53") === "'red'") {
    variable23.style.backgroundColor = "red";
};

//click event
variable23.addEventListener("click", function () {
    console.log("cliquer");
    if (variable23.style.backgroundColor === "white") {
        variable23.style.backgroundColor = "green";
        localStorage.setItem("couleur53", "'green'");
    } else if (variable23.style.backgroundColor === "green") {
        variable23.style.backgroundColor = "red";
        localStorage.setItem("couleur53", "'red'");
    } else if (variable23.style.backgroundColor === "red") {
        variable23.style.backgroundColor = "white";
        localStorage.setItem("couleur53", "'white'");
    }
});

//variable de base
var variable24 = document.getElementById("tr24");

// defaults color
if (localStorage.getItem("couleur54") === null) {
    variable24.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur54") === "'white'") {
    variable24.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur54") === "'green'") {
    variable24.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur54") === "'red'") {
    variable24.style.backgroundColor = "red";
};

//click event
variable24.addEventListener("click", function () {
    console.log("cliquer");
    if (variable24.style.backgroundColor === "white") {
        variable24.style.backgroundColor = "green";
        localStorage.setItem("couleur54", "'green'");
    } else if (variable24.style.backgroundColor === "green") {
        variable24.style.backgroundColor = "red";
        localStorage.setItem("couleur54", "'red'");
    } else if (variable24.style.backgroundColor === "red") {
        variable24.style.backgroundColor = "white";
        localStorage.setItem("couleur54", "'white'");
    }
});

//variable de base
var variable25 = document.getElementById("tr25");

// defaults color
if (localStorage.getItem("couleur55") === null) {
    variable25.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur55") === "'white'") {
    variable25.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur55") === "'green'") {
    variable25.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur55") === "'red'") {
    variable25.style.backgroundColor = "red";
};

//click event
variable25.addEventListener("click", function () {
    console.log("cliquer");
    if (variable25.style.backgroundColor === "white") {
        variable25.style.backgroundColor = "green";
        localStorage.setItem("couleur55", "'green'");
    } else if (variable25.style.backgroundColor === "green") {
        variable25.style.backgroundColor = "red";
        localStorage.setItem("couleur55", "'red'");
    } else if (variable25.style.backgroundColor === "red") {
        variable25.style.backgroundColor = "white";
        localStorage.setItem("couleur55", "'white'");
    }
});

//variable de base
var variable26 = document.getElementById("tr26");

// defaults color
if (localStorage.getItem("couleur56") === null) {
    variable26.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur56") === "'white'") {
    variable26.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur56") === "'green'") {
    variable26.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur56") === "'red'") {
    variable26.style.backgroundColor = "red";
};

//click event
variable26.addEventListener("click", function () {
    console.log("cliquer");
    if (variable26.style.backgroundColor === "white") {
        variable26.style.backgroundColor = "green";
        localStorage.setItem("couleur56", "'green'");
    } else if (variable26.style.backgroundColor === "green") {
        variable26.style.backgroundColor = "red";
        localStorage.setItem("couleur56", "'red'");
    } else if (variable26.style.backgroundColor === "red") {
        variable26.style.backgroundColor = "white";
        localStorage.setItem("couleur56", "'white'");
    }
});

//variable de base
var variable27 = document.getElementById("tr27");

// defaults color
if (localStorage.getItem("couleur57") === null) {
    variable27.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur57") === "'white'") {
    variable27.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur57") === "'green'") {
    variable27.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur57") === "'red'") {
    variable27.style.backgroundColor = "red";
};

//click event
variable27.addEventListener("click", function () {
    console.log("cliquer");
    if (variable27.style.backgroundColor === "white") {
        variable27.style.backgroundColor = "green";
        localStorage.setItem("couleur57", "'green'");
    } else if (variable27.style.backgroundColor === "green") {
        variable27.style.backgroundColor = "red";
        localStorage.setItem("couleur57", "'red'");
    } else if (variable27.style.backgroundColor === "red") {
        variable27.style.backgroundColor = "white";
        localStorage.setItem("couleur57", "'white'");
    }
});

//variable de base
var variable28 = document.getElementById("tr28");

// defaults color
if (localStorage.getItem("couleur58") === null) {
    variable28.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur58") === "'white'") {
    variable28.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur58") === "'green'") {
    variable28.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur58") === "'red'") {
    variable28.style.backgroundColor = "red";
};

//click event
variable28.addEventListener("click", function () {
    console.log("cliquer");
    if (variable28.style.backgroundColor === "white") {
        variable28.style.backgroundColor = "green";
        localStorage.setItem("couleur58", "'green'");
    } else if (variable28.style.backgroundColor === "green") {
        variable28.style.backgroundColor = "red";
        localStorage.setItem("couleur58", "'red'");
    } else if (variable28.style.backgroundColor === "red") {
        variable28.style.backgroundColor = "white";
        localStorage.setItem("couleur58", "'white'");
    }
});

//variable de base
var variable29 = document.getElementById("tr29");

// defaults color
if (localStorage.getItem("couleur59") === null) {
    variable29.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur59") === "'white'") {
    variable29.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur59") === "'green'") {
    variable29.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur59") === "'red'") {
    variable29.style.backgroundColor = "red";
};

//click event
variable29.addEventListener("click", function () {
    console.log("cliquer");
    if (variable29.style.backgroundColor === "white") {
        variable29.style.backgroundColor = "green";
        localStorage.setItem("couleur59", "'green'");
    } else if (variable29.style.backgroundColor === "green") {
        variable29.style.backgroundColor = "red";
        localStorage.setItem("couleur59", "'red'");
    } else if (variable29.style.backgroundColor === "red") {
        variable29.style.backgroundColor = "white";
        localStorage.setItem("couleur59", "'white'");
    }
});

//variable de base
var variable30 = document.getElementById("tr30");

// defaults color
if (localStorage.getItem("couleur60") === null) {
    variable30.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur60") === "'white'") {
    variable30.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur60") === "'green'") {
    variable30.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur60") === "'red'") {
    variable30.style.backgroundColor = "red";
};

//click event
variable30.addEventListener("click", function () {
    console.log("cliquer");
    if (variable30.style.backgroundColor === "white") {
        variable30.style.backgroundColor = "green";
        localStorage.setItem("couleur60", "'green'");
    } else if (variable30.style.backgroundColor === "green") {
        variable30.style.backgroundColor = "red";
        localStorage.setItem("couleur60", "'red'");
    } else if (variable30.style.backgroundColor === "red") {
        variable30.style.backgroundColor = "white";
        localStorage.setItem("couleur60", "'white'");
    }
});

//variable de base
var variable31 = document.getElementById("tr31");

// defaults color
if (localStorage.getItem("couleur61") === null) {
    variable31.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur61") === "'white'") {
    variable31.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur61") === "'green'") {
    variable31.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur61") === "'red'") {
    variable31.style.backgroundColor = "red";
};

//click event
variable31.addEventListener("click", function () {
    console.log("cliquer");
    if (variable31.style.backgroundColor === "white") {
        variable31.style.backgroundColor = "green";
        localStorage.setItem("couleur61", "'green'");
    } else if (variable31.style.backgroundColor === "green") {
        variable31.style.backgroundColor = "red";
        localStorage.setItem("couleur61", "'red'");
    } else if (variable31.style.backgroundColor === "red") {
        variable31.style.backgroundColor = "white";
        localStorage.setItem("couleur61", "'white'");
    }
});

//variable de base
var variable32 = document.getElementById("tr32");

// defaults color
if (localStorage.getItem("couleur62") === null) {
    variable32.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur62") === "'white'") {
    variable32.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur62") === "'green'") {
    variable32.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur62") === "'red'") {
    variable32.style.backgroundColor = "red";
};

//click event
variable32.addEventListener("click", function () {
    console.log("cliquer");
    if (variable32.style.backgroundColor === "white") {
        variable32.style.backgroundColor = "green";
        localStorage.setItem("couleur62", "'green'");
    } else if (variable32.style.backgroundColor === "green") {
        variable32.style.backgroundColor = "red";
        localStorage.setItem("couleur62", "'red'");
    } else if (variable32.style.backgroundColor === "red") {
        variable32.style.backgroundColor = "white";
        localStorage.setItem("couleur62", "'white'");
    }
});

//variable de base
var variable33 = document.getElementById("tr33");

// defaults color
if (localStorage.getItem("couleur63") === null) {
    variable33.style.backgroundColor = "white";
};

if (localStorage.getItem("couleur63") === "'white'") {
    variable33.style.backgroundColor = "white";
} else if (localStorage.getItem("couleur63") === "'green'") {
    variable33.style.backgroundColor = "green";
} else if (localStorage.getItem("couleur63") === "'red'") {
    variable33.style.backgroundColor = "red";
};

//click event
variable33.addEventListener("click", function () {
    console.log("cliquer");
    if (variable33.style.backgroundColor === "white") {
        variable33.style.backgroundColor = "green";
        localStorage.setItem("couleur63", "'green'");
    } else if (variable33.style.backgroundColor === "green") {
        variable33.style.backgroundColor = "red";
        localStorage.setItem("couleur63", "'red'");
    } else if (variable33.style.backgroundColor === "red") {
        variable33.style.backgroundColor = "white";
        localStorage.setItem("couleur63", "'white'");
    }
});

// couleur grise
var variable34 = document.getElementById("tr34");
variable34.style.backgroundColor = "silver";

// couleur grise
var variable35 = document.getElementById("tr35");
variable35.style.backgroundColor = "silver";

// bouton retour
let retour = document.getElementById("retour");
retour.addEventListener("click", function() {
    document.location.href="../../pages/menu.html";
});