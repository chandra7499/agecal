let month = $("#month");
let btn = $(".button");
let message = $(".message");
const year = $(".year");
const months = $(".months");
const day = $(".day");


btn.on("click",function()
{
    calculate();
    visible();
    
});

function visible()
{
   message.css("display","inline");
   year.css("display","inline");
   months.css("display","inline");
   day.css("display","inline");
}

function calculate ()
{
   let user = new Date(month.val());
   const Datee = new Date();
   let presentYear = Datee.getFullYear()-user.getFullYear();
   console.log("presentYear: " + presentYear);
   let presentMonth = Datee.getMonth()-user.getMonth();
   console.log("presentMonth: " + presentMonth);
   let presentDate = Datee.getDate()-user.getDate();
   console.log("presentDay: " + presentDate);

if(presentYear < 0 || presentDate<0 )
{
    alert("Hey Why are you so Hurry that's your future Just wait,utill to reach Their ok...");
    let updateYear = year.text("");
   
    let updateDay = day.text("");
}else
{
    updateYear = year.text(`${presentYear}years`);
   updateMonth = months.text(`${presentMonth}Months`);
    updateDay = day.text(`${presentDate}Days`);
   
  

}





 




   
}
