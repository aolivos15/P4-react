import './header.css'

export const Header = ({title}) => {
    return (
        <>
            <div className="container mb-4">
                <div className="header rounded-custom dash-border">
                    <h1>{title}</h1>
                </div>
            </div>
        </>
    )
}
