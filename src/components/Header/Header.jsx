import './header.css'

export const Header = ({title}) => {
    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
