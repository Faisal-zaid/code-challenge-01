function malipo(basicSalary, benefits){

//const basicSalary = 50000;
//const benefits = 10000;

glossSalary=basicSalary + benefits
//glossSalary has been gotten by adding basicSalary and benefits

let payee;
if (glossSalary <0){
    payee='not eligible to pay'
}
//this part above ensures people not earning anything dont pay tax
else if(glossSalary<=24000){
    payee=(10/100*glossSalary) 
}
else if(glossSalary<=32333){
    payee=(25/100*glossSalary) 
}
else if(glossSalary<=500000){
    payee=(30/100*glossSalary) 
}
else if(glossSalary<=800000){
    payee=(32.5/100*glossSalary) 
}
else if(glossSalary>800000){
    payee=(35/100*glossSalary) 
}
//the arguments above are to calculate the payee one is eligible to pay

let nhif;
nhif = 2.75/100 *glossSalary

//above is a calculation for 2.75% on glosss salary
let nssf;
if (glossSalary <= 8000){
    nssf = 6/100 * basicSalary
}
else if (glossSalary <= 72000){
    nssf =6/100 * basicSalary
}
else{
    nssf =6/100*72000
}
//calculates the nssf eligible to be payed
let netSalary;

deductions=nssf+nhif+payee
netSalary=glossSalary-(deductions);

return {basicSalary, benefits,payee,glossSalary,nhif,nssf,netSalary};

}


console.log(malipo(5000, 1000))

//calculates net salary by multiplying basic salary by 12 months
//console.log(payee)
//console.log(glossSalary)
//console.log(basicSalary)
//console.log(nhif)
//console.log(nssf)
//console.log(netSalary)
//line 48 to 53 prints the output for all transactions