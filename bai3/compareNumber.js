let firstInput=parseFloat(prompt("Nhap so dau tien: "));
let secondInput=parseFloat(prompt("Nhap so thu hai: "));
function compareNumbers(first, second)
{
    first=firstInput;
    second=secondInput;
    if (first>second)
    {
        alert("So thu nhat lon hon");
    }
    else
    {
        return first+second;
    }
}
document.write(compareNumbers(firstInput, secondInput));