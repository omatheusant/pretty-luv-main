import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

interface PostCardProps {
  imageUrl: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  views: number;
  likes: number;
}

const PostCard = async ({ imageUrl, author, views, likes }: PostCardProps) => {
  return (
    <div>
      <div className=" relative h-[400px] w-[300px] rounded-sm sm:size-[468px]">
        <Image src={imageUrl} priority objectFit="cover" fill alt="Post" />
      </div>
      <div className="flex justify-between">
        <div className="mt-2 flex items-center gap-2">
          <Avatar>
            <AvatarImage className="object-cover" src={author.avatarUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>{author.name}</span>
        </div>
        <div className="flex gap-2">
          <p className="flex items-center gap-1">
            <Heart size={16} />
            <span>{views}</span>
          </p>
          <p className="flex items-center gap-1">
            <Eye size={16} />
            <span>{likes}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
