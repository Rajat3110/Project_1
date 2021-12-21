let x=2;
var m=window.matchMedia("(max-width: 768px)")

function Myfirst()
{

        if(x%2==0)
        {
            document.getElementById('navlink').style.display = 'flex';
            x++;
        }else
        {
            document.getElementById('navlink').style.display = 'none';
            x++;
        }
}