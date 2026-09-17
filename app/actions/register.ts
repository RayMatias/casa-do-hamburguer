"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";


export async function registerUser(_prevState:unknown,formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    nameUser:string;
    emailUser:string;
    phoneUser:string;
    passwordUser:string;
    confirmPasswordUser:string;
    cepUser:string;
    streetUser:string;
    neighbourhoodUser:string;
    PointOfReferenceUser:string;
  };
  
  if (!data.nameUser || !data.emailUser || !data.passwordUser || !data.phoneUser || !data.phoneUser || !data.cepUser || !data.streetUser || !data.neighbourhoodUser || !data.confirmPasswordUser) {
    return { error: "Você precisa preencher todos os dados!!!" }
  };

  const existingUser = await prisma.user.findUnique({
    where:{
      email:data.emailUser
    }
  });

  if (existingUser) {
    return { error: "Esse email já existe" }
  }

  if (data.passwordUser !== data.confirmPasswordUser) {
    return { error: "As senhas não coincidem." };
  }

  const hashedPassword = await bcrypt.hash(data.passwordUser, 10);

  await prisma.user.create({
    data: {
      name: data.nameUser,email:data.emailUser,phone:data.phoneUser,password:hashedPassword, 
      addresses:{
        create:{
          zipCode:data.cepUser,street:data.streetUser,neighborhood:data.neighbourhoodUser, reference:data.PointOfReferenceUser
        }
      }
    },
  });

  return { success: "Usuário cadastrado com sucesso!" };
}