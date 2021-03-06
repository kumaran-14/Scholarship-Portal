$(document).ready(function() {

  $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
    if (stepPosition === 'first') {
      $("#prev-btn").addClass('disabled');
    } else if (stepPosition === 'final') {
      $("#next-btn").addClass('disabled');
    } else {
      $("#prev-btn").removeClass('disabled');
      $("#next-btn").removeClass('disabled');
    }
  });

  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    keyNavigation: false,
    transitionEffect: 'fade',
    showStepURLhash: true,
    toolbarSettings: {
      toolbarButtonPosition: 'end',
    }
  });

  $("#prev-btn").on("click", function() {
    $('#smartwizard').smartWizard("prev");
    return true;
  });

  $("#next-btn").on("click", function() {
    $('#smartwizard').smartWizard("next");
    return true;
  });

  $('#smartwizard').smartWizard("theme", "arrows");

  $(this).scrollTop(0);

});

window.onload = function() {

  document.querySelector('.sw-btn-next').addEventListener('click', (e) => {
    window.scrollTo(0, 0);
  })
  document.querySelector('.sw-btn-prev').addEventListener('click', (e) => {
    window.scrollTo(0, 0);
  })


   var submit = document.getElementById("submit");
   submit.addEventListener('click',(e)=>{
    var arr = [
      document.getElementById("Roll Number").value, 
      document.getElementById("First Name").value, 
      document.getElementById("Last Name").value, 
      document.getElementById("Nationality").value, 
      document.getElementById("Date of Birth").value, 
      document.getElementById("Gender").value, 
      document.getElementById("Father's Name").value, 
      document.getElementById("Occupation").value, 
      document.getElementById("Mother's Name").value, 
      document.getElementById("mother_occupation").value, 
      document.getElementById("annual_income").value, 
      document.getElementById("address").value, 
      document.getElementById("course_name").value, 
      document.getElementById("course_duration").value, 
      document.getElementById("fund_required").value, 
      document.getElementById("tuition_fees").value, 
      document.getElementById("hostel_fees").value, 
      document.getElementById("exam_name_1").value, 
      document.getElementById("exam_year_1").value, 
      document.getElementById("exam_board_1").value, 
      document.getElementById("exam_class_1").value, 
      document.getElementById("exam_percentage_1").value, 
      document.getElementById("exam_name_2").value, 
      document.getElementById("exam_year_2").value, 
      document.getElementById("exam_board_2").value, 
      document.getElementById("exam_class_2").value, 
      document.getElementById("exam_percentage_2").value, 
      document.getElementById("degree_1").value, 
      document.getElementById("degree_subject_1").value, 
      document.getElementById("degree_institute_1").value, 
      document.getElementById("degree_grade_1").value, 
      document.getElementById("degree_percentage_1").value, 
      document.getElementById("qualitative_achievement_1").value, 
      document.getElementById("qualitative_achievement_2").value
     ]
     flag = 1;
     arr.forEach((val)=>{
      if(val == ""){
        flag = 0;  
      }
     })
     if(!flag){
       alert("not filled");
     } 
   })
  
}