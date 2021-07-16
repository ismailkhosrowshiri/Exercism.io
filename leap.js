

export const isLeap = (years=0) => {
  if (years % 400 === 0) 
    return true;
  if (years % 100 === 0) 
    return false;
  return years % 4 === 0;
  
};
