import ProfileUser from "./profileUser"

const page = () => {
  return (
    <section className="flex w-full max-w-[1400px] h-full bg-ship">
      <div className="flex flex-col w-full max-w-[1000px]">
        <ProfileUser />
      </div>
    </section>
  )
}

export default page