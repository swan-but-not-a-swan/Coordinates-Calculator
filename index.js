
const hehe = document.querySelector("#Calculate-button");
hehe.addEventListener('click', e=>{help()})
const haha = document.getElementById("selector");
haha.addEventListener('change',showC);
function showC()
{
    var waddy = document.getElementById("selector").value;
    if(waddy == "Triangle")
    {
        document.getElementById("C").style.visibility = "visible";
        console.log("Tr") 
    }
    else
    {
        document.getElementById("C").style.visibility = "hidden";
    }
}

function help()
{
    const ax = Number(document.querySelector("#Ax").value);
    const ay = Number(document.querySelector("#Ay").value);
    const bx = Number(document.querySelector("#Bx").value);
    const by = Number(document.querySelector("#By").value);
    select(ax,ay,bx,by);
    //Distance(ax,ay,bx,by);
}
function Distance(ax,ay,bx,by)
{
    let firstminus = Math.pow(ax-bx,2);
    console.log(firstminus)
    let secondminus = Math.pow(ay-by,2);
    console.log(secondminus)
    let finalAnswer = Math.sqrt(firstminus+secondminus);
    document.querySelector("p").innerHTML="D = " + finalAnswer;
    console.log("it works")
}
function select(ax,ay,bx,by)
{
    var e = document.getElementById("selector").value;
    if(e=="Distance")
    {
        console.log("u chose distance")
        Distance(ax,ay,bx,by);
    }
    if(e=="Midpoint")
    {
        let x = (ax+bx)/2;
        let y=(ay+by)/2;
        document.querySelector("p").innerHTML = "Midpoint (" + x + "," + y + ")";
        console.log("it works")
    }
    if(e=="Rise")
    {
        const rise = Rise(ay,by);
        document.querySelector("p").innerHTML = "Rise: " + rise;
    }
    if(e=="Run")
    {
        const run = Run(ax,bx);
        document.querySelector("p").innerHTML = "Run: " + run;
    }
    if(e=="Gradient")
    { 
        const gradient = Midpoint(ax,ay,bx,by);
        document.querySelector("p").innerHTML = "Gradient (or) Slope: " + gradient;
    }
    if(e=="Triangle")
    {
        const cx = Number(document.querySelector("#Cx").value);
        const cy = Number(document.querySelector("#Cy").value);
        const Area = Triangle(ax,ay,bx,by,cx,cy);
        document.querySelector("p").innerHTML = "Area of Triangle: " + Area + "units^2";
    }
}
function Triangle(ax,ay,bx,by,cx,cy)
{
    const first = (ax*by) + (bx*cy) + (cx*ay);
    console.log(first)
    const second = (ay*bx) + (by*cx) + (cy*ax);
    console.log(second)
    return Math.abs(first-second)/2;
}
function Rise(ay,by)
{
    return ay-by; 
}
function Run(ax,bx)
{
    return ax-bx;
}
function Midpoint(ax,ay,bx,by)
{
    return Rise(ay,by)/Run(ax,bx);
}