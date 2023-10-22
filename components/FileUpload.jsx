"use client";
import React from "react";
import { UploadDropzone } from "@/lib/uploadThing.ts";
import "@uploadthing/react/styles.css";
import { X } from "lucide-react";
import Image from "next/image";
const FileUpload = ({ onChange, value, endpoint }) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image fill src={value} alt="upload" className="rounded-full"></Image>
        <button
          onClick={() => onChange("")}
          className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          <X className="h-4 w-4"></X>
        </button>
      </div>
    );
  }
  return (
    <div>
      <UploadDropzone
        endpoint={endpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].fileUrl);
        }}
        onUploadError={(error) => {
          console.log(error);
        }}
      ></UploadDropzone>
    </div>
  );
};

export default FileUpload;
