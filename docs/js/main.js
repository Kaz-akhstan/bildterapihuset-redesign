console.log("loaded");

function bokaTidFunc()
{
    window.location.href = "bokaNy.html";
}

function teraFunc()
{
    window.location.href = "tera.html";
}

function kontaktFunc()
{
    window.location.href = "kontakt.html";
}

function omOssFunc()
{
    window.location.href = "omOss.html";
}

function highlightAnim()
{
    document.getElementById("greetingBokaID").style.boxShadow = "0px 0px 40px 10px white";
    setTimeout(function(){
        document.getElementById("greetingBokaID").style.boxShadow = "none";
    }, 2000);
}