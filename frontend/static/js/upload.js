const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", () => {

    const file = fileInput.files[0];

    if(file){
        console.log("Selected File:", file.name);
    }

});