import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const SkillsCard = ({ img, skill ,url }: { img: string; skill: string; url:string}) => {
  return (
    <div>
      <Card className="flex mt-16 p-7 space-x-6 h-28">
        <Image src={img} alt="" width={64} height={70}/>
        <CardContent className="items-center flex">
          <Link 
          href={url}
          target="_blank"
          className="hover:underline-offset-2"
          >
          <h3 className="hidden sm:block  font-bold mt-3 capitalize hover:text-cyan-700" >{skill}</h3>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

SkillsCard.propTypes = {
    img: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
  };

export default SkillsCard;
