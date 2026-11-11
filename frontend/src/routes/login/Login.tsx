import style from './login.module.css'
import Form from "@/components/Form/Form";
import SectionForm from "@/components/SectionForm/SectionForm";

export default function Login () {
    return (
        <>
           <main className={style.container}>
            <Form mode='login'/>
            <SectionForm/>
           </main>
        </>
    )
}