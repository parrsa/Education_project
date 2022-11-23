const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Mobile: Phone, Password: Password }),
  };
  fetch("http://192.168.1.2:7007/api/Account/Login", requestOptions)
    .then(async (response) => {
      const isJson = response.headers
        .get("content-type")
        ?.includes("application/json");
      const data = isJson && (await response.json());
      // check for error response
      if (response.status === 200) {
        console.log('data.token',data.token);
      
        isJson.setHeader(
          "Set-Cookie",
          cookie.serialize("name", data.token, {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
          })
        );
        // get error message from body or default to response status
        // const error = (data && data.message) || response.status;
        // return Promise.reject(error);
        // NavigateParsa('/App')
      } else {
        // Cookies.set('TokenLogin1',data.token,{
        // expires: 0.10/24,
        // secure: true,
        // sameSite:'strict',
        // path:'/'
        console.log("error");
      }
      // )
      // console.log(Cookies)

      // }
    })
    .catch((error) => {
      console.error("There was an error!", error);
    });