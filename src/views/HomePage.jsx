import { Header } from "../components/Header/Header"
import { Jumbotron } from "../components/Jumbotron/Jumbotron"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { Footer } from "../components/Footer/Footer"

export const HomePage = () => {
    return (
        <>
            <Header title='Inicio'/>
            <Jumbotron />
            <ContactForm />
            <Footer />
        </>
    )
}
