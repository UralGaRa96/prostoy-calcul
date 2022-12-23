	  // переменная, c математическим действием  //
	  let xui; 

	  // функция расчёта //
	  function fu() {
	  	// переменная для результата //
	    let result;
	    // получаем первое и второе число //
	    let num1 = Number(document.getElementById("num1").value);
	    let num2 = Number(document.getElementById("num2").value);
	    // смотрим, что было в переменной с действием, и действуем исходя из этого //
	    switch (xui) {
	      case '+':
	        result = num1 + num2;
	        break;
	      case '-':
	        result = num1 - num2;
	        break;
	      case '*':
	        result = num1 * num2;
	        break;
	      case '/':
	        result = num1 / num2;
	        break;
	    }

	    // отправляем результат на страницу //
	    document.getElementById("result").innerHTML = result;
	  }