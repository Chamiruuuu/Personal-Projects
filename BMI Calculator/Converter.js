const form = document.getElementById("bmiForm");
const result = document.getElementById("bmiValue")
const category = document.getElementById("bmiCategory")

form.addEventListener("submit", (e) =>{
e.preventDefault()
DisplayValue()
})

function DisplayValue(){
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    let heightConvertMeters = height / 100

    let bmiResult = weight / ( heightConvertMeters*heightConvertMeters)

    const input = document.querySelectorAll("input");

    input.forEach((element) =>{
        element.value = "";
    })
    result.textContent = bmiResult.toFixed(2);

    if(bmiResult < 18.5){
        category.textContent = "Underweight";
        alert("KAMATYONON NAKA GO")
    }
    else if(bmiResult >= 18.5 && bmiResult<= 24.9){
        category.textContent = "Normal weight"
    }
    else if(bmiResult >= 25 && bmiResult <= 29.9){
        category.textContent = "Overweight"
        alert("KAMATYONON NAKA GO")
    }
    else if(bmiResult > 29.9){
        category.textContent = "Obesity"
        alert("PATAY NA ANG GAGO")
    }
}
