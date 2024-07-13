import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

interface Props {
  title: string,
  content: string,
  user: {
    name: string,
    profileImg: string,
    position: string
  }
}

export default function DepoimentCard({ title, content, user }: Props) {
  return (
    <Card className="shadow-md transition-all hover:translate-x-2 hover:-translate-y-2 hover:shadow-lg">
      <CardHeader>
        <p className="text-lg font-bold">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-balance">
          {content}
        </p>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src={user.profileImg} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p>{user.name}</p>
          <p className="text-sm text-secondary">{user.position}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
