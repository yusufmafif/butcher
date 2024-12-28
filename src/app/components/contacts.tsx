"use client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";
import { sendNotificationEmail } from "../(App)/contact/action";
import { Mail, PhoneCall, MessageCircle, ArrowBigRight } from "lucide-react";

const socialMedia = [
  {
    name: "Whatsapp",
    username: "Ikhwan Butcher",
    url: "https://wa.me/6282124754039",
    icon: MessageCircle,
  },
  {
    name: "Email",
    username: "ikhwanbutcher@gmail.com",
    url: "mailto:ikhwanbutcher@gmail.com",
    hoverMessage: "Click to copy",
    icon: Mail,
  },
];

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    email: "",
    message: "",
  });

  return (
    <div className="pt-5 ">
      <p className="font-medium text-lg mb-4 text-center">Contact</p>
      <div className="grid sm:grid-cols-2 gap-4 border-b border-foreground/5 pb-10">
        {socialMedia.map((item) => (
          <Link
            href={item.hoverMessage ? "#" : item.url}
            key={item.name}
            onClick={() => {
              if (item.hoverMessage) {
                toast.success("Copied to clipboard");
                navigator.clipboard.writeText(item.username);
              }
            }}
            className="p-4 hover:opacity-70 group border border-foreground/10 rounded-lg flex flex-row"
          >
            <div className="grow ">
              <div>
              <div className="text-sm text-gray-500">{item.username}</div>
                {item.name}{" "}
                {item.hoverMessage ? (
                  <span className="group-hover:opacity-100 opacity-0">
                    ({item.hoverMessage})
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="w-8 h-8 rounded-lg bg-foreground/10 flex items-center justify-center ">
              <item.icon className="stroke-foreground " size={20}/>
            </div>
          </Link>
        ))}
      </div>

   
    </div>
  );
};

export default Contacts;
