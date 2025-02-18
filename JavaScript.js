let currentInput = '0';
let previousInput = '';
let operator = '';
let preCalc=document.getElementById('calc_result');

function updateDisplay()
{
    document.getElementById('calculation').value = currentInput;
}

function press(value)
{
	if(!isNaN(value) || value === '.')
    {
        if (currentInput === '0')
        {
	        currentInput = value;
		} 
		else
		{
			currentInput += value;
		}
	}
	else if(value === '+/-')
	{
		currentInput = (parseFloat(currentInput) * -1);
	}
    else if(value === '1/x')
    {
		currentInput = (1 / parseFloat(currentInput));
		preCalc.value=`Result of ( 1/${1 / parseFloat(currentInput)} ) is`;
	}
	else if(value === 'x^2')
	{
	    currentInput = Math.pow(parseFloat(currentInput), 2);
		preCalc.value=`Result of ( ${Math.sqrt(parseFloat(currentInput))}^2 ) is`;
	}
	else if(value === '√')
	{
		currentInput = Math.sqrt(parseFloat(currentInput));
		preCalc.value=`Result of ( √${Math.pow(parseFloat(currentInput), 2)} ) is`;
	}
    else
	{
		operator = value;
		previousInput = currentInput;
		currentInput = '0';
	}
	updateDisplay();
}

function calculate(equal_to)
{
	let result = 0;
	const prev = parseFloat(previousInput);
	const curr = parseFloat(currentInput);
	let manualCalc = document.getElementById('calculation').value;

	switch(operator)
	{
		case '+':
			result = prev + curr;
			preCalc.value=`Result of ( ${prev} + ${curr} ) is`;
			break;
		case '-':
			result = prev - curr;
			preCalc.value=`Result of ( ${prev} - ${curr} ) is`;
			break;
		case '*':
			result = prev * curr;
			preCalc.value=`Result of ( ${prev} X ${curr} ) is`;
			break;
		case '/':
			if(curr === 0)
			{
				swal('Error!!',"Invalid input.. Don't use 0 in denominator",'error');
				preCalc.value=`ERROR`;
			}
			else
			{
				result = prev / curr;
				preCalc.value=`Result of ( ${prev} ÷ ${curr} ) is`;
			}
			break;
		case '%':
	    	if(curr === 0)
			{
            	swal('Error!!',"Invalid input.. Don't use 0 in denominator",'error');
				preCalc.value=`ERROR`;
			}
			else
			{
				result = prev % curr;
				preCalc.value=`Result of ( ${prev} % ${curr} ) is`;
			}
			break;
		default:
			result = eval(manualCalc);
			preCalc.value=`Result of ( ${manualCalc} ) is`;
			break;
	}
    
    currentInput = result;
	operator = '';
	previousInput = '';
	updateDisplay();
}

function clearAll()
{
	currentInput = '0';
	previousInput = '';
	operator = '';
	preCalc.value='';
	updateDisplay();
}

function clearEntry()
{
	currentInput = '0';
	updateDisplay();
}

function backspace()
{
    currentInput = currentInput.slice(0, -1) || '0';
	updateDisplay();
}

function show_hide()
{
	let x=document.getElementById('col2');

    if(x.style.display === "none")
    {
        x.style.display = "block";
    }
    else
    {
        x.style.display = "none";
    }
}

function createDivEle()
{
    var res1=document.getElementById('calc_result').value;
    var res2=document.getElementById('calculation').value;

    var parEl=document.getElementById('col2');
	var chlEl1=document.createElement('div');
    var chlEl2=document.createElement('hr');
		
	chlEl1.innerHTML=res1+"<br>"+res2;
    chlEl1.style=`background-color: #666; border-radius: 5px; padding: 2px 10px; text-align: right; `;

	parEl.appendChild(chlEl1);
    parEl.appendChild(chlEl2);
}