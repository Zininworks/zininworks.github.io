
// http://stackoverflow.com/a/5448635
function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

// http://stackoverflow.com/a/5448635
function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

var params = getSearchParameters();
var featureItems = [];


switch(params.id) {
    // Bach Violin sonatas and partitas
    case "440156059": 
        featureItems.push("468615677", "549746311");
        break;
    // Bach Cello Suites
    case "468615677":
        featureItems.push("440156059", "499818071")
        break;
    // Bach Goldberg Variations
    case "488618314":
        featureItems.push("520091031", "529056912");
        break;
    // Bach Partitas
    case "520091031":
        featureItems.push("488618314", "455563613");
        break;
    // Beethoven Complete Piano Sonatas
    case "529056912":
        featureItems.push("549746311", "496176634");
        break;
    // Beethoven Violin Sonatas
    case "549746311":
        featureItems.push("529056912", "477067841");
        break;
    // Beethoven Cello Sonatas
    case "499818071":
        featureItems.push("529056912", "590206081");
        break;
    // Brahms Violin Sonatas
    case "477067841":
        featureItems.push("590206081", "440156059");
        break;
    // Brahms Cello Sonatas
    case "590206081":
        featureItems.push("477067841", "468615677");
        break;
    // Chopin Waltz, Preludes and Impromptus
    case "449119069":
        featureItems.push("577670301", "529056912");
        break;
    // Chopin Ballades & Scherzos
    case "577670301":
        featureItems.push("576215187", "487097767");
        break;
    // Chopin Nocturnes
    case "576215187":
        featureItems.push("495443185", "488618314");
        break;
    // Chopin Etudes
    case "495443185":
        featureItems.push("449119069", "529056912");
        break;
    // Mozart Eine kleine Nachtmusik
    case "458293237":
        featureItems.push("496176634", "529056912");
        break;
    // Mozart Variations for piano
    case "496176634":
        featureItems.push("458293237", "455563613");
        break;
    // Mussorgsky Pictures at an Exhibition
    case "455563613":
        featureItems.push("529056912", "488618314");
        break;
    // Schubert Winterreise
    case "487097767":
        featureItems.push("577670301", "477067841");
        break;
}

console.log(featureItems.length);



for (var i = 0; i < featureItems.length; i++){
    $("#featured > ul").append($("#" + featureItems[i]).clone());
}

if (featureItems.length != 0) {
    $("#featured").css("display", "block");
}

$("#all-apps").css("display", "block");

