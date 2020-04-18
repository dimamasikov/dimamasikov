class Validator {
isEmail(string) {
return /^[a-z0-9_-]+@[a-z0-9-]+\.[a-z]{2,3}$/.test(string);
}
isDomain(string) {
return /^[a-zA-Z-_.]+\.[a-z]{2,3}$/.test(string);
}
isDate(string) {
return /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/.test(string);
}
isPhone(string) {
return /^\+\d{3}\s\(\d{2}\)\s\d{3}-\d{2}-\d{2}$/.test(string);
}
}
