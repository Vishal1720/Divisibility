let a=document.getElementsByClassName("numbers");
textEntered =document.getElementById("textField");




function checkIfDivisible()
{
  let init=a[0].value-1;//alteration made here to support next 100 function
   
    for(i=0;i<a.length;i++)
    {
       
        count=init+1;
        console.log(count)
        if(textEntered.value%count==0)
        {
             a[i].style.backgroundColor = "lawngreen";
         }
        else
        a[i].style.backgroundColor = "orangered";
        init++;
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
for(i=0;i<a.length;i++)
   {
    a[i].value=final;
    final++;
   }
   checkIfDivisible();

}