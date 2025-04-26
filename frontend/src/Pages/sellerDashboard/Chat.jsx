import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"


const Chat = () => {
  return (
    <div className='flex flex-row'>
      <div className='w-20 h-full flex flex-col gap-5 mt-10'>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>


      </div>

      <div className="w-full h-full ">
        <div className="h-[70vh] w-full">
          <span className="px-4 py-3 bg-slate-950 rounded-full">Hello Aalekh</span>
        </div>
        <div className="flex items-center gap-1">
          <Input placeholder="Chat with client.." />
          <Button>
          <Send />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Chat