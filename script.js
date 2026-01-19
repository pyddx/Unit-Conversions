// Task #2: Temperature Conversion
// Formula: Fahrenheit = (Celsius * 9/5) + 32
function temperature() {
    // 1. รับค่าจาก Input ที่มี id="celsius"
    let c = document.getElementById('celsius').value;
    
    // ตรวจสอบว่ามีค่าหรือไม่
    if (c === "") {
        alert("Please enter a value for Celsius");
        return;
    }

    // 2. คำนวณ
    let f = (parseFloat(c) * 9 / 5) + 32;

    // 3. แสดงผลกลับไปที่ Input ที่มี id="fahrenheit"
    document.getElementById('fahrenheit').value = f.toFixed(2); // ทศนิยม 2 ตำแหน่ง
}

// Task #3: Weight Conversion
// Formula: Pounds = Kgs * 2.2
function weight() {
    let kg = document.getElementById('kilo').value;

    if (kg === "") {
        alert("Please enter a value for Kilograms");
        return;
    }

    let lbs = parseFloat(kg) * 2.2;

    // โจทย์สั่งให้ set innerHTML แต่เนื่องจากเราใช้ <input> จึงต้องใช้ .value
    // หากคุณใช้ <span> หรือ <div> ให้ใช้ .innerHTML แทน
    document.getElementById('pounds').value = lbs.toFixed(2);
}

// Task #4: Distance Conversion
// Formula: Miles = Kms * 0.62137
function distance() {
    let km = document.getElementById('km').value;

    if (km === "") {
        alert("Please enter a value for Kilometers");
        return;
    }

    let m = parseFloat(km) * 0.62137;

    document.getElementById('miles').value = m.toFixed(2);
}