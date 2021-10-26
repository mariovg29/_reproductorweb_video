function download(blob){
    let link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download",localStorage.getItem("mail")+".webm");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    link.remove();
    
}