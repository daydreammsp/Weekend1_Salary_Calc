$(document).ready(readyNow);

function readyNow(){
  console.log('js ready');
let total;
let total1;
let salArr = [];

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
      $("#inputFields").on('click','.remCF',function(){
          $(this).parent().parent().remove();
          // $('.totalField').empty();
          // $('.totalField').append(total1, "<br class='formInfo5'>");
      });



  function submitClick(){

    let firstN = $('.firstName').val();
    let lastN = $('.lastName').val();
    let empId = $('.idNumber').val();
    let jobT = $('.jobTitle').val();
    let sal = $('.salary').val();
    let empInfo = [firstN, lastN, empId, jobT, sal];
    salArr.push(sal);
    total = salArr.reduce(sum);

  for(let x of salArr){
    let y = x++;

  }

  function sum(a, b) {
      return parseInt(a) + parseInt(b);
  }


  $("#inputFields").append('<tr valign="top"><th scope="row"><label for="customFieldName"></label></th><td class="formInfo">&nbsp;' + firstN + '&nbsp;<td class="formInfo">' + lastN + '</td> &nbsp;<td class="formInfo">' + empId + '</td>  &nbsp;<td class="formInfo">' + jobT + '</td> &nbsp;<td class="formInfoSal">' + sal + '</td> &nbsp;<td class="formInfo"> <a href="javascript:void(0);" class="remCF">Remove</a></td></tr>');



    // $('.firstT').append(firstN,"<th class='formInfo1'></th>");
    // $('.lastT').append(lastN, "<th class='formInfo2'></th>");
    // $('.idT').append(empId, "<th class='formInfo3'></th>");
    // $('.titleT').append(jobT, "<th class='formInfo4'></th>");
    // $('.numberT').append(sal, "<th class='formInfo5'></th>");
    // $('.remove1').append("<button class='removeB'>Remove</button><br><br><br");
      // console.log(data);
    $('.totalField').empty();
    $('.totalField').append(total, "<br class='formInfo5'>");


  }



}
