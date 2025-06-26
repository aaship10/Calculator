let calculation = localStorage.getItem('calculation') || '';

document.querySelector('.js-result').innerHTML = calculation;

function calculationResult(value)
{
  calculation += value;
  document.querySelector('.js-result').innerHTML = calculation;
  saveCalculation();
}

function saveCalculation()
{
  localStorage.setItem('calculation', calculation);
}

function equalsbutton()
{
  calculation = eval(calculation);
  document.querySelector('.js-result').innerHTML = calculation;
  saveCalculation();
}

function clearbutton()
{
  calculation = '';
  document.querySelector('.js-result').innerHTML = '';
  saveCalculation();
}

function backbutton()
{
  calculation = calculation.slice(0, (calculation.length-1));
  document.querySelector('.js-result').innerHTML = calculation;
  saveCalculation();
}