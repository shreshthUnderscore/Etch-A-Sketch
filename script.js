const containerDivEle = document.querySelector(".containerDiv");

for(var i=0; i < 16; i++)
{
    var div = document.createElement("div");
    div.setAttribute("class", "gridDiv")

    div.addEventListener("mouseenter", function() {
        this.classList.add("gridDivHover");
    });

    div.addEventListener("mouseleave", function() {
        this.classList.remove("gridDivHover");
    });

    containerDivEle.appendChild(div);
}
