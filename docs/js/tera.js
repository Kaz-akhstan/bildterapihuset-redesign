function nextPage(e)
{
    localStorage.setItem("nr", e);
    window.location.href = "teraInfo.html";
}

function teraInfoOnLoad() {
    var e = parseInt(localStorage.getItem("nr"));
    switch(parseInt(localStorage.getItem("nr")))
    {
        case 1:
            document.getElementById("Anna").style.display = "flex";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 2:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "flex";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 3:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "flex";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 4:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "flex";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 5:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "flex";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 6:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "flex";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 7:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "flex";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 8:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "flex";
            document.getElementById("Ulla").style.display = "none";
            break;
        case 9:
            document.getElementById("Anna").style.display = "none";
            document.getElementById("Birgitta").style.display = "none";
            document.getElementById("Carin").style.display = "none";
            document.getElementById("Gunilla").style.display = "none";
            document.getElementById("Karin").style.display = "none";
            document.getElementById("Katarina").style.display = "none";
            document.getElementById("Leenah").style.display = "none";
            document.getElementById("Ninne").style.display = "none";
            document.getElementById("Ulla").style.display = "flex";
            break;
    }
}