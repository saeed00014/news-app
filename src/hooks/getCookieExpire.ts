const GetCookieExpire = () => {
  const nowTimeStamp = new Date().getTime()
  const expireTimeStamp = nowTimeStamp + (60 * 60 * 24 * 1000) //one day time
  const expireDate = new Date(expireTimeStamp)
  return expireDate
}

export default GetCookieExpire