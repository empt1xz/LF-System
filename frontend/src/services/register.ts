import type { DataRegister } from "@/schema/schemas";
import { registerSchema } from "@/schema/schemas";

export async function Register(data: DataRegister) {
  
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    console.log("Erros nos dados enviados");
    return;
  }

  return result;
}
