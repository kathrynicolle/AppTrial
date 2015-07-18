var initEvents=function()
{
    if(navigator.splashscreen && navigator.splashscreen.hide)
    {
        navigator.splashscreen.hide();
    }
    var btnCamera=document.getElementById("btnCamera");
    btnCamera.addEventListener("click",takePicture,false);
    
    var btnEmail=document.getElementById("btnEmail");
    btnEmail.addEventListener("click",sendEmail,false);
};

document.addEventListener("app.Ready",initEvents,false);
