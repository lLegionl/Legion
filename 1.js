let arr[1,2,3,20,3,10,4]
let min=arr[0]
for (let i=1;i<arr.lenght;i++)
{
    if (arr[i]<min)
    {
        min=arr[i]
    }
}
console.log(min)