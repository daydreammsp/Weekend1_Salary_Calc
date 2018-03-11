$(document).ready(readyNow);


let employees = [];
let r = [];
let m;
let h = [];
let salArr = [];
let t = 0;


function readyNow(){
  console.log('js ready');
disableButton();

class Employee{
  constructor(first,last,empNum,jobTi,salary){
    this.first = first;
    this.last = last;
    this.empNum = empNum;
    this.jobTi = jobTi;
    this.salary = salary;

  }
}



  $(".submit").on('click', submitClick);


      $("#inputFields").on('click','.remove1',function(){
        disableButton();
        h = [];
        t = 0;
          $(this).parent().parent().remove().removeData();
           $('.totalField').empty();
           remove();
           //$('.formInfoSal').removeData(employees)
           background();
          });




// $('.totalField').append(total1, "<br class='formInfo5'>");

        // let y =  $(x).text()
          // console.log(total1);

          // $('.totalField').append(total1, "<br class='formInfo5'>");




  function submitClick(){
    disableButton();
// let total = 0;
// salArr =[];
h = [];
 t = 0;
    let firstN = $('.firstName').val();
    let lastN = $('.lastName').val();
    let empId = $('.idNumber').val();
    let jobT = $('.jobTitle').val();
    let sal = $('.salary').val();
    let empInfo = [firstN, lastN, empId, jobT, sal];
  $("#inputFields").append('<tr valign="top"><th scope="row"><label for="customFieldName"></label></th><td class="formInfo">&nbsp;' + firstN + '&nbsp;<td class="formInfo">' + lastN + '</td> &nbsp;<td class="formInfo">' + empId + '</td>  &nbsp;<td class="formInfo">' + jobT + '</td> &nbsp;<td class="formInfoSal">' + sal + '</td> &nbsp;<td class="formInfo"> <a href="javascript:void(0);" class="remove1">Remove</a></td></tr>');
  $('.totalField').empty();
  remove()


    // $('.firstT').append(firstN,"<th class='formInfo1'></th>");
    // $('.lastT').append(lastN, "<th class='formInfo2'></th>");
    // $('.idT').append(empId, "<th class='formInfo3'></th>");
    // $('.titleT').append(jobT, "<th class='formInfo4'></th>");
    // $('.numberT').append(sal, "<th class='formInfo5'></th>");
    // $('.remove1').append("<button class='removeB'>Remove</button><br><br><br");
      // console.log(data);
      // salArr.push(sal);
      // total = salArr.reduce(sum);
      //
      // for(let x of salArr){
      // let y = x++;
      //
      // }

    // $('.totalField').append(total, "<br class='formInfo5'>");
 background();
    $('.firstName, .lastName, .idNumber, .jobTitle, .salary').append().val('');
newEmp ();
function newEmp (){
  employees.push( new Employee( firstN, lastN, empId, jobT, sal ));
// totalSal();
salArr.push(sal);
total = salArr.reduce(sum);

for(let x of salArr){
let y = x++;

}
}




  //let m = $('.formInfoSal').data(employees).data();

  // let r = employees[0].salary



}
function totalSal(){
  r =[];

  for(let i of employees){

    r.push(parseInt(employees[i].salary))

 m = r.reduce(sum);

    console.log(m)

  }
}
  function sum(a, b) {
      return parseInt(a) + parseInt(b);
  }
function remove(){
  $( '.formInfoSal' ).each(function( index ) {

        h.push( parseInt($( this ).text()) );
         t = h.reduce(sum);

       console.log(t);

});
$('.totalField').append(t, "<br class='formInfo5'>");
}
function background(){
  console.log('hi')
  if(t > 20000){
    $('.total').css('background-color', 'red');

  }
  else{
    $('.total').css('background-color', '#808080')
  }

}
function disableButton() {
   $('button').prop('disabled', true);
   $('.salary').keyup(function() {
      if($(this).val() != '') {
         $('button').prop('disabled', false);
      }
   });
 };

}
