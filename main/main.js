module.exports = function printInventory(array) {
    resultArray = [];
    var resultStr = "";
    var total = 0;
    array.forEach(element => {
        var exist = false
        resultArray.forEach(element2 => {
        if (element.Barcode == element2.Barcode) {
            element2.Number = element2.Number+1;
            element2.Price += element.Price;
            exist = true;
        }
        });
        if (!exist) {
            resultArray.push({
                Barcode: element.Barcode,
                Number: 1,
                Name: element.Name,
                Unit: element.Unit,
                Price: element.Price
            });
        }
    });

    resultStr = "***<store earning no money>Receipt ***\n";
    resultArray.forEach(element => {
        resultStr += "Name: "+element.Name+", Quantity: "+element.Number+", Unit price: "+element.Price+".00("+element.Unit+"), Subtotal: "+element.Price*element.Number+".00 (yuan)\n";
    });
    resultStr+="----------------------\n";
    resultStr+="Total: ";
    resultArray.forEach(element => {
        total+=element.Price;
    });
    resultStr+=total+".00 (yuan)\n";
    resultStr+='**********************';
    
    console.log(resultStr);
    return resultStr;
};