import  { type DataLogin, loginSchema } from "@/schema/schemas";
export async function Login(data: DataLogin) {
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    console.log("Erro nos dados");
    return;
  }
  return result;
}
