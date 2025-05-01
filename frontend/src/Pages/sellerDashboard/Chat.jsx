import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"


const Chat = () => {
  return (
    <div className="w-full h-[80vh]">
      <div className="flex">
        <div className="w-1/4 h-[65vh] flex items-center flex-col gap-3 overflow-y-auto">
          {[1, 2, 3, 4, 5, 4, 4, 4, 4, 4].map((item) => {
            return <div className="flex items-center gap-5">
              <Avatar>
                <AvatarFallback className="font-bold text-lg bg-white">
                  {item}
                </AvatarFallback>
              </Avatar>
              <h1>Aalekh</h1>
            </div>

          }
          )
          }
        </div>


        <div className="w-[70vw] h-[65vh]  flex flex-col gap-3 overflow-auto px-3">
          {[1, 2, 3, 4, 5, 4, 4, 4, 4, 4, 4, 5, 4, 4, 4, 4, 4].map((item) =>
            <div className="bg-white w-20 flex items-center justify-center rounded-e-3xl rounded-b-3xl ">heloo</div>
          )
          }

        </div>
      </div>

      <div className="h-[15vh] flex items-center gap-3 px-3">
        <Input placeholder="talk with clinet ..." className="placeholder-white" />
        <Send className="" />
      </div>
    </div>

  )
}

export default Chat