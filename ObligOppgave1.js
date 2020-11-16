


// Hovedfunksjon 
function isDateValid(dato) {
    return (lengde (dato) &&
    tredjeOgSjette (dato) &&
    år (dato) &&
    måned (dato) &&
    dag (dato));
}

// Sjekker lengde på vist tekst som skal være 10 tegn. Eks 00.00.0000
function lengde(dato) {
    return (dato.length === 10)
}
// Sjekker om det er punktum på 3. og 6. tegnet
function tredjeOgSjette(dato) {
    return (dato.charAt(2) === "." && dato.charAt(5) === '.'); 
    
}
// Sjekker om år er 0000 eller større 
function år(dato) {
    let year = dato.substr(6,4);
    return (year.length === 4 && year >= '0000' && year <= '9999'); 
}
// Sjekker om måned er mellom 01 og 12
function måned(dato) {
    let month = dato.substr(3,2)
    return (month.length === 2 && month >= '01' && month <= '12'); 
}
// Sjekker om dag er mellom 01 og 28, om alle måneder utenom Feb har dag 30, 
// om Jan-Mar-Mai-Jul-Aug-Okt-Des har dag 31 og om Feb har dag 29 på skuddår
function dag(dato) {
    let day = dato.substr(0,2)
    let month = dato.substr(3,2)
    let year = dato.substr(6,4)
        if (day.length === 2 && day >= '01' && day <= '28'){
            return true;
        }
        else if ((month === '01' ||
                  month === '03' ||
                  month === '04' ||
                  month === '05' ||
                  month === '06' ||
                  month === '07' ||
                  month === '08' ||
                  month === '09' ||
                  month === '10' ||
                  month === '11' ||
                  month === '12') && day <= '30') {
            return true;
        }
        else if ((month === '01' || 
                  month === '03' || 
                  month === '05' || 
                  month === '07' || 
                  month === '08' || 
                  month === '10' || 
                  month === '12') && day <= '31') {
            return true;
        }
        else if (month === '02' && isLeapYear(year) && day <= '29') {
            return true;
        }
        else {
           return false;
        }
}
// Sjekker skuddår
function isLeapYear(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}
