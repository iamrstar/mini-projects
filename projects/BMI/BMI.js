// select the ehole form

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    // prevent the default action
    e.preventDefault()
// get the values from the form
  const height =  parseInt(document.querySelector('#height').value)
  const weight =  parseInt(document.querySelector('#weight').value)
  const results =  document.querySelector('#results') 
       
if (height === '' || height<0 || isNaN(height)){
    results.innerHTML = `please give a  valid height ${height}` ;
} 

 else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML = `please a valid weight ${weight}`
} else{
   const bmi =  (weight / ((height*height)/10000)).toFixed(2)
    // we use tooFixed bcoz somtime bohot bada value
    // aa jaata hai divison k baad

    // now its time to to show  the result

    // if (bmi < 18.6){
        
    //     results.innerHTML = bmi +  "(underweight)"
    // } else if (bmi >= 18.6 && bmi < 24.9){
    //    results.innerHTML = bmi + "(normal weight)"
    // } else{
    //     results.innerHTML = bmi + "(overweight)"
    // }

// any anthor approach  

if (bmi < 18.6){

    results.innerHTML = `${bmi} (underweight)`;
}

else if (bmi >= 18.6 && bmi < 24.9){

    results.innerHTML = `${bmi} (normal weight)`;
}

else{

    results.innerHTML = `${bmi} (overweight)`
}
   
}



}); 
 