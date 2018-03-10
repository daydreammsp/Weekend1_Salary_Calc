$(document).ready(readyNow);

function readyNow(){
  console.log('js ready');

  $(".submit").on('click', submitClick);
      $("#inputFields").on('click','.remCF',function(){
          $(this).parent().parent().remove();
      });

let salArr = [];

  function submitClick(){

    let firstN = $('.firstName').val();
    let lastN = $('.lastName').val();
    let empId = $('.idNumber').val();
    let jobT = $('.jobTitle').val();
    let sal = $('.salary').val();
    let empInfo = [firstN, lastN, empId, jobT, sal];
    console.log(empInfo);
    salArr.push(sal);
let total = salArr.reduce(getSum);

console.log(total)
  for(let x of salArr){
    let y = x++;
    console.log(y)
  }

  function getSum(a, b) {
      return parseInt(a) + parseInt(b);
  }

  $("#inputFields").append('<tr valign="top"><th scope="row"><label for="customFieldName"></label></th><td class="formInfo">&nbsp;' + firstN + '&nbsp;<td class="formInfo">' + lastN + '</td> &nbsp;<td class="formInfo">' + empId + '</td>  &nbsp;<td class="formInfo">' + jobT + '</td> &nbsp;<td class="formInfo">' + sal + '</td> &nbsp;<td class="formInfo"> <a href="javascript:void(0);" class="remCF">Remove</a></td></tr>');



    // $('.firstT').append(firstN,"<th class='formInfo1'></th>");
    // $('.lastT').append(lastN, "<th class='formInfo2'></th>");
    // $('.idT').append(empId, "<th class='formInfo3'></th>");
    // $('.titleT').append(jobT, "<th class='formInfo4'></th>");
    // $('.numberT').append(sal, "<th class='formInfo5'></th>");
    // $('.remove1').append("<button class='removeB'>Remove</button><br><br><br");
      // console.log(data);
    // $('.totalField').empty();
    // $('.totalField').append(total, "<br class='formInfo5'>");


  }

  // function removeButton(){
  //   console.log('hi')
  //   $().closest('tr').empty();
  //
  // }

}
