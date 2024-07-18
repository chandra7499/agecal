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
   let presentMonth = Datee.getMonth()-user.getMonth();
   let presentDay = Datee.getDay()-user.getDate();

   if (presentDay< 0) {
    presentMonth -= 1;
    presentDay += new Date(Datee.getFullYear(),Datee.getMonth(),0).getDate();
   }
if (presentMonth < 0) {
    presentYear -= 1;
    presentMonth += 12;
  }
if(presentYear < 0)
{
    year.text("");
}

   let updateYear = year.text(`${presentYear} year`);
   let updateMonth = months.text(`${presentMonth} months`);
   let updateDay = day.text(`${presentDay} day`);
   
}
