$(document).ready(readyNow);

let employees = [];
let r = [];
let m;
let h = [];
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
    background();
  });

  function submitClick(){
    disableButton();
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
    remove();
    background();
    $('.firstName, .lastName, .idNumber, .jobTitle, .salary').append().val('');
    newEmp ();
    function newEmp (){
      employees.push( new Employee( firstN, lastN, empId, jobT, sal ));
    }

  }
  function totalSal(){
    r =[];
    for(let i of employees){
      r.push(parseInt(employees[i].salary));
      m = r.reduce(sum);
      console.log(m);
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

    $('.totalField').append("$"+" "+ t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +"<br class='formInfo5'>");
  }

  function background(){
    console.log('hi')
    if(t > 20000){
      $('.totalField').css('border-color', 'red');
    }
    else{
      $('.totalField').css('border-color', 'black')
    }

  }
  function disableButton() {
    $('button').prop('disabled', true);
    $('.salary').keyup(function() {
      if($(this).val() != '') {
        $('button').prop('disabled', false);
      }
    });
  }

}
