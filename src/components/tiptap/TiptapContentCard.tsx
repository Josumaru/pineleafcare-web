"use client";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { NextPage } from "next";

interface Props {
  content: string;
}

const TiptapContentCard: NextPage<Props> = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editable: false,
  });

  return (
    <p className="text-white line-clamp-3 mb-2 min-h-[4.5rem]">
      {editor?.getText()}
    </p>
  );
};

export default TiptapContentCard;
