let a=document.getElementsByClassName("numbers");
textEntered =document.getElementById("textField");
nextBtn = document.getElementById("NEXT");
prevBtn = document.getElementById("PREV");

console.log(nextBtn)


function checkIfDivisible()
{
  checkColor();
  let init=a[0].value-1;//alteration made here to support next 100 function
  if(textEntered.value != "")
  {
    for(i=0;i<a.length;i++)
    {
       
        count=init+1;
        
        if(textEntered.value%count==0)
        {
             a[i].style.backgroundColor = "lawngreen";
         }
        else
        a[i].style.backgroundColor = "orangered";
        init++;
    }
  } 
  else
  {
    alert("Enter a number before submitting");
  }

};



textEntered.addEventListener('keyup',(e)=>
{
    if(e.key == "Enter")
    {
        checkIfDivisible();
    }
})/*e is the event name , keyup is key pressed event whereas keydown is key released 
event,use e.keyCode === 13 since it is normal*/

function next100()
{
    
let final=a[99].value;
final++;
if(final<=10000)
   {
for(i=0;i<a.length;i++)
     {
    a[i].value=final;
    final++;
      }
   checkIfDivisible();
   }
};

function prev100()
{
    let base = a[0].value-1;
    if(base>1)
    {
           for(i=a.length-1;i>=0;i--)//i=a.length-1 because it returns 100 and array starts from 0 and ends at n-1 
              {
                
                a[i].value = base;
                base=base-1;
                
              }
              checkIfDivisible();
    }
}
function checkColor()
{
  if(a[0].value == 1)//prev btn function can't be used when no is 1 because negative numbers will start
  {
  prevBtn.style.color = "transparent";
  prevBtn.style.backgroundColor = "transparent";
  prevBtn.style.borderColor = "transparent";
  }
  else
  {
    prevBtn.style.color = "whitesmoke";
  prevBtn.style.backgroundColor = "blue";
  prevBtn.style.borderColor = "black";
  }

  if(a[99].value == 10000)//max limit for next100 funcion
  {
    nextBtn.style.color = "transparent";
    nextBtn.style.backgroundColor = "transparent";
    nextBtn.style.borderColor = "transparent";
    }
    else
    {
      nextBtn.style.color = "whitesmoke";
    nextBtn.style.backgroundColor = "blue";
    nextBtn.style.borderColor = "black";
    }

}

