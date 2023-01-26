function isValidIP(address) {
    // Check if the address is an empty string
    if(address === '') return false;
    // Split the address by '.' to get an array of octets
    var octets = address.split('.');

    // Check if the number of octets is not equal to 4
    if (octets.length !== 4) {
        return false;
    }

    // Iterate through the octets
    for (var i = 0; i < 4; i++) {
        var octet = octets[i];

        // Check if the octet is not a number or if it's a negative number
        if (isNaN(octet) || octet < 0) {
            return false;
        }
        // Check if the octet is greater than 255 or it has leading zeros
        if (octet > 255 || octet.startsWith("0") && octet.length > 1) {
            return false;
        }
        // Check if the octet is not a number 
        if(isNaN(parseInt(octet))){
            return false;
        }
    }
    // Check if there is any white space before or after the IP address
    if(/\s/.test(address)) return false;
    // Check if there is any new line before or after the IP address
    if(/[\n\r]/.test(address)) return false;
    // Check if there is any other non-numeric or '.' characters in the address
    if(/[^\d.]/.test(address)) return false;
    // If all checks passed, the address is valid
    return true;
}
