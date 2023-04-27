let days = ['P', 'A' , 'P', 'A', 'A', 'P', 'P', 'A', 'A', 'A', 'P'];
// let A = 'absent';
// let B = 'present'


// not working 
for(index = 0; index < days.length; index++){

        // console.log(days[index]);
        let preDay = days[index - 1];
        let nextDay = days[index + 1];
        let today = days[index];

        
        

        if(days[index] == 'P'){
            console.log('no deduction');
        }
        else if(days[index] == 'A'  && nextDay == 'P'){
            console.log('one leave 1.5');
        }
        
        else if(days[index] == 'A' && nextDay == 'A'){
            console.log('1');
        }
}

// next try


// let arrr = ['asif', 'tayyab', 'nabeel'];
// for(i = 0; i < arrr.length; i++){
//     console.log(arrr[i+1]);
// }