function temperature() {
    const celsius = document.getElementById('celsius').value;
    
    if (celsius === '' || celsius === null) {
        alert('Please enter a temperature in Celsius');
        return;
    }
    
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
}

function weight() {
    const kilo = document.getElementById('kilo').value;
    
    if (kilo === '' || kilo === null) {
        alert('Please enter a weight in Kilograms');
        return;
    }
    
    const pounds = kilo * 2.2;
    document.getElementById('pounds').value = pounds.toFixed(2);
}

function distance() {
    const km = document.getElementById('km').value;
    
    if (km === '' || km === null) {
        alert('Please enter a distance in Kilometers');
        return;
    }
    
    const miles = km * 0.62137;
    document.getElementById('miles').value = miles.toFixed(2);
}