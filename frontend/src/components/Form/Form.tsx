import style from "./form.module.css";

import { Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import type { FormProps } from "@/types/types";
import {
  loginSchema,
  registerSchema,
  type DataLogin,
  type DataRegister,
} from "@/schema/schemas";
import { Login } from "@/services/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { Register } from "@/services/register";




export default function Form({ mode }: FormProps) {
  return mode === "register" ? <RegisterForm /> : <LoginForm />;
}





function LoginForm() {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<DataLogin>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: DataLogin) => {
    try {
      await Login(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <main className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.titles}>
            <h1>Acesse sua conta</h1>
            <p>Entre com seu e-mail e senha para continuar.</p>
          </div>

          <label className={style.label}>
            <span>E-mail</span>
            <div className={style.inputEmail}>
              <Mail color="#00000096" />
              <input
                {...register("email")}
                type="email"
                placeholder="seu@email.com"
              />
            </div>
          </label>

          <label className={style.label}>
            <span>Senha</span>
            <div className={style.inputPassword}>
              <LockKeyhole color="#00000096" />
              <input
                type={show ? "text" : "password"}
                {...register("password")}
                placeholder="******"
              />
              {show ? (
                <EyeOff color="#00000096" onClick={() => setShow(!show)} />
              ) : (
                <Eye color="#00000096" onClick={() => setShow(!show)} />
              )}
            </div>
          </label>
          {(errors.email || errors.password) && (
            <p className={style.errorMessage}>
              {errors.email?.message || errors.password?.message}
            </p>
          )}
          {isSubmitSuccessful && (
            <p style={{ color: "#299429" }}> Sucesso ao Logar</p>
          )}

          <section className={style.options}>
            <label className={style.checkbox}>
              <input type="checkbox" name="" className={style.check} />
              <span>Lembrar de mim</span>
            </label>

            <span className={style.forgotPassword}>Esqueceu sua senha?</span>
          </section>

          <button className={style.handleButton}>Entrar</button>

          <p className={style.divider}>ou continue com </p>

          <section className={style.otherOptions}>
            <button>
              <FcGoogle size={20} />
              <span>Google</span>
            </button>

            <button>
              <FaGithub size={20} />
              <span>GitHub</span>
            </button>
          </section>

          <p className={style.optionRegister}>
            Não tem uma conta?{" "}
            <span onClick={() => navigate("/register")}>Cadastre-se</span>
          </p>
        </form>
      </main>
    </>
  );
}





function RegisterForm() {

  
  const [show, setShow] = useState(false);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataRegister>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: DataRegister) => {
    try {
      await Register(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <main className={style.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.titles}>
            <h1>Crie sua conta</h1>
            <p>Preencha os dados abaixo para começar</p>
          </div>

          <label className={style.label}>
            <span>Usuário</span>
            <div className={style.inputEmail}>
              <User color="#00000096" />
              <input type="text" {...register("user")} placeholder="Seu user" />
            </div>
          </label>

          <label className={style.label}>
            <span>E-mail</span>
            <div className={style.inputEmail}>
              <Mail color="#00000096" />
              <input
                type="email"
                {...register("email")}
                placeholder="seu@email.com"
              />
            </div>
          </label>

          <label className={style.label}>
            <span>Senha</span>
            <div className={style.inputPassword}>
              <LockKeyhole color="#00000096" />

              <input
                type={show ? "text" : "password"}
                placeholder="******"
                {...register("password")}
              />
              {show ? (
                <EyeOff color="#00000096" onClick={() => setShow(!show)} />
              ) : (
                <Eye color="#00000096" onClick={() => setShow(!show)} />
              )}
            </div>
          </label>
          <label className={style.label}>
            <span>Confirmar senha</span>
            <div className={style.inputPassword}>
              <LockKeyhole color="#00000096" />
              <input
                type="password"
                {...register("comparePassword")}
                placeholder="******"
              />
            </div>
          </label>

          {(errors.comparePassword ||
            errors.email ||
            errors.password ||
            errors.user) && (
            <p className={style.errorMessage}>
              {errors.user?.message ||
                errors.email?.message ||
                errors.password?.message ||
                errors.comparePassword?.message}
            </p>
          )}

          <section className={style.options}>
            <label className={style.checkbox}>
              <input type="checkbox" name="" className={style.check} />
              <span>
                Concordo com os{" "}
                <span className={style.forgotPassword}>Termos de uso</span>
              </span>
            </label>
          </section>

          <button className={style.handleButton}>Entrar</button>

          <p className={style.divider}>ou cadastre-se com </p>

          <section className={style.otherOptions}>
            <button>
              <FcGoogle size={20} />
              <span>Google</span>
            </button>

            <button>
              <FaGithub size={20} />
              <span>GitHub</span>
            </button>
          </section>

          <p className={style.optionRegister}>
            Já tem uma conta?{" "}
            <span onClick={() => navigate("/login")}>Entrar</span>
          </p>
        </form>
      </main>
    </>
  );
}
