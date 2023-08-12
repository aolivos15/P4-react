import { Jumbotron } from "../components/Jumbotron/Jumbotron"
import { FeaturedProducts } from "../components/FeaturedProducts/FeaturedProducts"
import { ContactForm } from "../components/ContactForm/ContactForm"
import { Footer } from "../components/Footer/Footer"

export const HomePage = () => {
    return (
        <>
            <Jumbotron />
            <FeaturedProducts />
            <ContactForm />
            <Footer />
        </>
    )
}
