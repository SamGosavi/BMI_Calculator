const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
 
    if(isNaN(height) || height === '' || height<0){
        result.innerHTML = `Please enter valid height ${height}`
    }else if(isNaN(weight) || weight === '' || weight<0){
        result.innerHTML = `Please enter Valid weight ${weight}`
    }else{
        const bmi = (weight/(height*height/10000)).toFixed(2)
        result.innerHTML = `<span>Your BMI is ${bmi}</span>`
        
        if(bmi<18.6){
            result.innerHTML= `<span> Your BMI is ${bmi}.<br> Danger!!! You are Under Weight.</span>`
        }
        if(bmi>=18.6 && bmi<=24.9){
            result.innerHTML= `<span> Your BMI is ${bmi}.<br> Hurray!!! You're BMI is in Normal Range.</span>`
            result.style.color = 'green'
        }
        if(bmi>24.9){
            result.innerHTML= `<span> Your BMI is ${bmi}.<br> Danger!!! You are Over Weight.</span>`
            
        }
    }
})