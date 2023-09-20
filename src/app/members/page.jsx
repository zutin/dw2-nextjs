import Card from '@/components/cards/Member'

const getMembers = async () => {
  const response = await fetch('http://localhost:5555/user/list')
  
  return await response.json()
}

const Members = async () => {
  const members = await getMembers()

  return (
    <>
      <h1 className="text-3xl font-semibold mt-8 text-center">Member list</h1>
      <div className="flex flex-wrap gap-8 my-8 justify-center">
      {
        members.map((member) => {
          return <Card key={member.id} member={member}/>
        })
      }
      </div>
    </>
    )
}

export default Members