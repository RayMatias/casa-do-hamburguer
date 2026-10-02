import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "16MB",
      maxFileCount: 1, // 👈 maxFileCount em vez de maxFiles
    },
  })
    .middleware(async () => {
      return {};
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload feito com sucesso! URL:", file.url);
      return { url: file.url }; // 👈 Retornar um objeto garante sucesso no callback
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;