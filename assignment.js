// https://github.com/ratnakarmaker/js-basic

// number-1
function kilometerToMeter(kilometer){   
    var meter = kilometer * 1000;
    return meter;
    
}


// number-2
function budgetCalculator(watch, mobile, laptop){
     var totalWatch = watch * 50;
     var totalMobile = mobile * 100;
     var totalLaptop = laptop *500;
     var totalBuget = totalWatch + totalMobile + totalLaptop;
    return totalBuget;
}


// number-3
function hotelCost(days){
    if(days <= 10){
        var totalCost = days * 100; 
    }
    else if(days <= 20){
        var firstPackage = 10 * 100;
        var remainingDays = days - 10;
        var secondPackage = remainingDays * 80; 
        var totalCost = firstPackage + secondPackage;
    }
    else{
         var firstPackage = 10 * 100;
         var secondPackage = 10 * 80;
         var remainingDays = days - 20;
         var thirdPackage = remainingDays * 50;
         var totalCost = firstPackage + secondPackage + thirdPackage; 
    }
    return totalCost;
}


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