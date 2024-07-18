let month = $("#month");
let btn = $(".button");
let message = $(".message");


btn.on("click",function()
{
    calculate();
});

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
   let updateMessage = message.text(`You have ${presentYear} years,${presentMonth} months and ${presentDay} days`);
    presentDay.css("color","yellow")
}
