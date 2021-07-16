
export const isPangram = (stringg) => {
  const string = stringg.toLowerCase();
  if (string==="")
  return false

  const alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let pangram = true;
  for (let i = 0; i < alphabet.length; i++) {
    if (string.includes(alphabet[i]) === false)
      pangram = false
  }
  return pangram


};
