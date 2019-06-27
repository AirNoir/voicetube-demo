
export const  createCookie = (name, value, days) => {
  let expires ="";
  if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
  }
  else {
      expires = "";
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

export const readCookie = name => {
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length == 2) { 
    return parts.pop().split(";").shift(); 
  }
}

export const deleteCookie = name => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export const errorLogger = (err, location ) => {
  console.log('Error:', err)
  console.log('Error occured at:', location)
}



export const cookieUtil = {
  create: createCookie,
  read: readCookie,
  delete: deleteCookie,
}