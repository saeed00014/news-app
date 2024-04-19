"use client"
import { baseURL } from "@/axios/axios"
import { useQuery } from "@tanstack/react-query"

const ProfileUser = () => {
  const userResult = useQuery({
    queryKey: ["userFull"],
    queryFn: async () => {
      const response = await baseURL.get("/users/userFull")
      return response.data?.result[0]
    }
  }) 

  if(userResult.isPending) {
    return <></>
  }

  const user = userResult.data
 
  return (
    <div>{user.username}</div>
  )
}

export default ProfileUser