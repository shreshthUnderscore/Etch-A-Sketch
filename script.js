var gridRow = 4;

const containerDivEle = document.querySelector(".containerDiv");
const sizeButtonEle = document.querySelector(".size-button");
const resetButtonEle = document.querySelector(".reset-button");

function createGrid(size)
{
    containerDivEle.innerHTML = '';

    for(var j=0; j < size; j++)
    {
        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "newDiv");
        for(var i=0; i < size; i++)
        {
            var div = document.createElement("div");
            div.setAttribute("class", "gridDiv")
        
            div.addEventListener("mouseenter", function() {
                this.classList.add("gridDivHover");
            });
        
            newDiv.appendChild(div);
        }
        containerDivEle.appendChild(newDiv);
    }    
    
}

createGrid(gridRow);

sizeButtonEle.addEventListener("click", function ()
{
    gridRow = prompt("Enter Number of Rows/Columns","16");

    if(gridRow !== null)
    {
        gridRow = parseInt(gridRow);
        if(gridRow !== NaN && gridRow > 0)
        {
            createGrid(gridRow);
        }
        else
        {
            alert("Enter a valid number !!");
        }
    }
});

resetButtonEle.addEventListener("click", function ()
{
    createGrid(gridRow);
});