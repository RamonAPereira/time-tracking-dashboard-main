//UI components
const UIDailyBtn = document.querySelector('.ui-daily');
const UIWeeklyBtn = document.querySelector('.ui-weekly');
const UIMonthlyBtn = document.querySelector('.ui-monthly');

const UIWorkHrs = document.querySelector('.card__time--work')
const UIWorkPre = document.querySelector('.card__previous--work')

const UIPlayHrs = document.querySelector('.card__time--play');
const UIPlayPre = document.querySelector('.card__previous--play');

const UIStudyHrs = document.querySelector('.card__time--study');
const UIStudyPre = document.querySelector('.card__previous--study');

const UIExerciseHrs = document.querySelector('.card__time--exercise');
const UIExercisePre = document.querySelector('.card__previous--exercise');

const UISocialHrs = document.querySelector('.card__time--social');
const UISocialPre = document.querySelector('.card__previous--social');

const UISelfCareHrs = document.querySelector('.card__time--selfcare');
const UISelfCarePre = document.querySelector('.card__previous--selfcare');

//change period
function changePeriodDaily() {
  if(UIDailyBtn.classList.contains('profile__link--activy')){
  }else{
    UIDailyBtn.classList = 'profile__link--activy';
    UIWeeklyBtn.classList.remove('profile__link--activy');
    UIMonthlyBtn.classList.remove('profile__link--activy')
    changeDaily();
  }
}

function changePeriodWeekly() {
  if(UIWeeklyBtn.classList.contains('profile__link--activy')){
  }else{
    UIWeeklyBtn.classList = 'profile__link--activy';
    UIDailyBtn.classList.remove('profile__link--activy');
    UIMonthlyBtn.classList.remove('profile__link--activy')
    changeWeekly();
  }
}

function changePeriodMonthly() {
  if(UIMonthlyBtn.classList.contains('profile__link--activy')){
  }else{
    UIMonthlyBtn.classList = 'profile__link--activy';
    UIDailyBtn.classList.remove('profile__link--activy');
    UIWeeklyBtn.classList.remove('profile__link--activy')
    changeMonthly();
  }
}

//Change Values
function changeDaily() {
  UIWorkHrs.innerHTML = '5hrs';
  UIWorkPre.innerHTML = 'Last day - 7hrs';

  UIPlayHrs.innerHTML = '1hrs';
  UIPlayPre.innerHTML = 'Last day - 2hrs';

  UIStudyHrs.innerHTML = '0hrs';
  UIStudyPre.innerHTML = 'Last day - 1hrs';

  UIExerciseHrs.innerHTML = '1hrs';
  UIExercisePre.innerHTML = 'Last day - 1hrs';

  UISocialHrs.innerHTML = '1hrs';
  UISocialPre.innerHTML = 'Last day - 3hrs';

  UISelfCareHrs.innerHTML = '0hrs';
  UISelfCarePre.innerHTML = 'Last day - 1hrs';
}

function changeWeekly() {
  UIWorkHrs.innerHTML = '32hrs';
  UIWorkPre.innerHTML = 'Last week - 36hrs';

  UIPlayHrs.innerHTML = '10hrs';
  UIPlayPre.innerHTML = 'Last week - 8hrs';

  UIStudyHrs.innerHTML = '4hrs';
  UIStudyPre.innerHTML = 'Last week - 7hrs';

  UIExerciseHrs.innerHTML = '4hrs';
  UIExercisePre.innerHTML = 'Last week - 5hrs';

  UISocialHrs.innerHTML = '5hrs';
  UISocialPre.innerHTML = 'Last week - 10hrs';

  UISelfCareHrs.innerHTML = '2hrs';
  UISelfCarePre.innerHTML = 'Last week - 2hrs';
}

function changeMonthly() {
  UIWorkHrs.innerHTML = '103hrs';
  UIWorkPre.innerHTML = 'Last month - 128hrs';

  UIPlayHrs.innerHTML = '23hrs';
  UIPlayPre.innerHTML = 'Last month - 29hrs';

  UIStudyHrs.innerHTML = '13hrs';
  UIStudyPre.innerHTML = 'Last month - 19hrs';

  UIExerciseHrs.innerHTML = '11hrs';
  UIExercisePre.innerHTML = 'Last month - 18hrs';

  UISocialHrs.innerHTML = '21hrs';
  UISocialPre.innerHTML = 'Last month - 23hrs';

  UISelfCareHrs.innerHTML = '7hrs';
  UISelfCarePre.innerHTML = 'Last month - 11hrs';
}


