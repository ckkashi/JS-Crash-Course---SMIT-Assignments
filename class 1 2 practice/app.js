let userAge = prompt('Enter your age, to check eligibility : ')

if(+userAge < 18){
    document.write('You are not eligible.')
}else{
    document.write('You are eligible.')
}