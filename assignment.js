
// number-1
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
    
}
var output = kilometerToMeter(5);
console.log(output);

// number-2
function budgetCalculator(watch, mobile, laptop){
     var totalWatch = watch * 50;
     var totalMobile = mobile * 100;
     var totalLaptop = laptop *500;
     var totalBuget = totalWatch + totalMobile + totalLaptop;
    return totalBuget;
}

var buget = budgetCalculator(1, 1, 1);
console.log(buget);

// number-3
function hotelCost(days){
    if(days <= 10){
        var totalCost = days * 100; 
    }
    else if(days <= 20){
        var firstPackage = 10 * 100;
        var remainingDays = days - 10;
        var secondPackage = remainingDays * 80; 
        totalCost = firstPackage + secondPackage;
    }
    else{
         var firstPackage = 10 * 100;
         var secondPackage = 20 * 80;
         var remainingDays = days - 20;
         var thirdPackage = remainingDays * 50;
         totalCost = firstPackage + secondPackage + thirdPackage; 
    }
    return totalCost;
}
var package = hotelCost(25);
console.log(package);

// number-4
function megaFriend(array){
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length > longestWord.length) {
        longestWord = word;
      }
    });
  
    return longestWord;
}
var print = megaFriend(['ratna', 'rotna', 'rani', 'jk']);
console.log(print);

