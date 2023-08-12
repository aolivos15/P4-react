import './header.css'

export const Header = ({title}) => {
    return (
        <>
            <div className="container mt-4">
                <div className="header rounded-custom">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
