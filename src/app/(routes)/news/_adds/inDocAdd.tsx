import { baseURL } from "@/axios/axios";
import { AddBar } from "@/components/ui/adds";
import { useQuery } from "@tanstack/react-query";

const InDocAdd = ({ add_id }: { add_id: string }) => {
  const addBarResult = useQuery({
    queryKey: [`inDocAdd${add_id}`],
    queryFn: async () => {
      const response = await baseURL.get(`/adds/${add_id}`)
      return response.data?.result[0]
    }
  })

  if(addBarResult.isPending) {
    return <></>
  }

  const add = addBarResult.data

  return (
    <AddBar add={add}  />
  )
};

export default InDocAdd;
