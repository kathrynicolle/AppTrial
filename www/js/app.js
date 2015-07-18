function takePicture()
{
    function onSuccess(url)
    {
        var image=document.getElementById("picture");
        image.src=url;
    }
    function onError(message){
    alert("Error:" + message);
    }
   
    var options= { 
        destinationType:Camera.DestinationType.FILE_URI
    };
    navigator.camera.getPicture(onSuccess,onError,options);
}



function sendEmail()
{
    var recepient= document.getElementById("recepient").value;
    var comments= document.getElementById("comments").value;
    var imageUrl= document.getElementById("picture").src;
    
    var options=
    {
        to:recepient,
        body:comments,
        isHtml: true,
        attachements: imageUrl
        
    };
    condova.plugins.email.open(options);
    
};