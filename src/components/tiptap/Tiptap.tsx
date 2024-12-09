"use client";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Color from "@tiptap/extension-color";
import Heading from "@tiptap/extension-heading";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import Underline from "@tiptap/extension-underline";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { NextPage } from "next";

interface Props {
  content: string;
}

const Tiptap: NextPage<Props> = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit, Typography, Color, Heading, HorizontalRule, Image, Link, Placeholder, TextStyle, Underline],
    content: content,
    editable: false,
  });

  return <EditorContent editor={editor} />;
};



export default Tiptap;
