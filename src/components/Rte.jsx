import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import conf from "../conf/conf";
export default function Rte({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={conf.tinymceApikey}
            initialValue={defaultValue}
            init={{
              plugins: [
                "anchor",
                "autolink",
                "charmap",
                "codesample",
                "emoticons",
                "image",
                "link",
                "lists",
                "media",
                "searchreplace",
                "table",
                "visualblocks",
                "wordcount",
                "checklist",
                "mediaembed",
                "casechange",
                "export",
                "formatpainter",
                "pageembed",
                "a11ychecker",
                "tinymcespellchecker",
                "permanentpen",
                "powerpaste",
                "advtable",
                "advcode",
                "editimage",
                "advtemplate",
                "mentions",
                "tinycomments",
                "tableofcontents",
                "footnotes",
                "mergetags",
                "autocorrect",
                "typography",
                "inlinecss",
                "markdown",
                "importword",
                "exportword",
                "exportpdf",
              ],
              toolbar:
                "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
              tinycomments_mode: "embedded",
              tinycomments_author: "Author name",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
// <Editor
//   initialValue={defaultValue}
//   init={{
//     apikey: "w836icd0f7xp09u7jahr3js38m4unxobmaofw7d9rsbscmeh",
//     initialValue: defaultValue,
//     height: 500,
//     menubar: true,
//     plugins: [
//       "image",
//       "advlist",
//       "autolink",
//       "lists",
//       "link",
//       "image",
//       "charmap",
//       "preview",
//       "anchor",
//       "searchreplace",
//       "visualblocks",
//       "code",
//       "fullscreen",
//       "insertdatetime",
//       "media",
//       "table",
//       "code",
//       "help",
//       "wordcount",
//       "anchor",
//     ],
//     toolbar:
//       "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
//     content_style:
//       "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
//   }}
//   onEditorChange={onChange}
// />
