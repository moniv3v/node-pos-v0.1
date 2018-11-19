module.exports = function printInventory(array) {
    resultArray = [];
    var resultStr = "";
    var total = 0;
    array.forEach(element => {
        var exist = false
        resultArray.forEach(element2 => {
        if (element.Barcode == element2.Barcode) {
            element2.Number = element2.Number+1;
            if(element.Unit=='bottle'){
                element2.Unit = ' bottles';
            }
            exist = true;
        }
        });
        if (!exist) {
            if(element.Unit!='a'){
                resultArray.push({
                    Barcode: element.Barcode,
                    Number: 1,
                    Name: element.Name,
                    Unit: element.Unit,
                    Price: element.Price
                });
            }else{
                resultArray.push({
                    Barcode: element.Barcode,
                    Number: 1,
                    Name: element.Name,
                    Unit: '',
                    Price: element.Price
                });
            }
            
        }
    });

    
    resultStr = "***<store earning no money>Receipt ***\n";
    resultArray.forEach(element => {
        resultStr += "Name: "+element.Name+", Quantity: "+element.Number+element.Unit+", Unit price: "+element.Price+".00 (yuan), Subtotal: "+element.Price*element.Number+".00 (yuan)\n";
    });
    resultStr+="----------------------\n";
    resultStr+="Total: ";
    resultArray.forEach(element => {
        total+=element.Price*element.Number;
    });
    resultStr+=total+".00 (yuan)\n";
    resultStr+='**********************\n';
    
    console.log(resultArray);
    return resultStr;
};