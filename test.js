const person={ name: "Hitachi MGRM NET", address: { city: "Gurgaon", country: "India" }}
function deepCloneTest(person){
    return person;

}
deepCloneTest(person)

const string1= 'fried';
const string2= 'fired'; 
const string3= 'fried';
const string4= 'fred'; 
function areAnagramsTest(string1,string2){
    return true;
}
function areAnagramsTest(string3,string4){
    return false;
}
areAnagramsTest(string1,string2);
areAnagramsTest(string3,string4);

