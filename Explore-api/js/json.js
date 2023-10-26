const user = {
  id: 1,
  name: "rasel",
  job: "Bekar ",
  phone: " iphone nai redmi chalai",
};
const stringified = JSON.stringify(user);

console.log(user);

console.log(stringified);
/*f
{
  id: 1,
  name: 'rasel',
  job: 'Bekar ',
  phone: ' iphone nai redmi chalai'
}
{"id":1,"name":"rasel","job":"Bekar ","phone":" iphone nai redmi chalai"}
*/