import logo_homepage from '../logo_homepage.normal.v108.svg'

const LogoHomepageLink = () => {
    return (
        <a href="/" aria-label="DuckDuckGo Home">
            <img className="logo-image" src={logo_homepage} alt="DuckDuckGo logo" />
        </a>
    );
}

export {LogoHomepageLink}