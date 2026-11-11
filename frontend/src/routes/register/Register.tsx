import style from "./register.module.css";
import Form from "@/components/Form/Form";
import SectionForm from "@/components/SectionForm/SectionForm";

export default function Register() {
  return (
    <>
      <main className={style.container}>
        <Form mode="register" />
        <SectionForm />
      </main>
    </>
  );
}
