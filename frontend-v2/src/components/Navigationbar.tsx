import { Container, Dropdown, Image, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink} from "react-router-dom"
import logo from "../assets/logo.png"
import { useTranslation } from "react-i18next"


export const NavigationBar = () => {
    const {t} = useTranslation();
    return (
        <Navbar expand="sm" fixed="top" className="bg-body-tertiary border-bottom mb-3">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <Image src={logo} fluid className="w-50" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={NavLink} to="/" className="fw-bold text-primary">{t("nav-bar.home")}</Nav.Link>
                        <Nav.Link as={NavLink} to="/levers" className="fw-bold text-primary">{t("nav-bar.levers")}</Nav.Link>
                        <Nav.Link as={NavLink} to="consequences" className="fw-bold text-primary">{t("nav-bar.consequences")}</Nav.Link>
                        <Nav.Link as={NavLink} to="news" className="fw-bold text-primary">{t("nav-bar.news")}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <NavDropdown title={t("nav-bar.languages")} id="language-selector" className="border p-2 rounded fw-bolder">
                    <Dropdown.Item >{t("nav-bar.english")}</Dropdown.Item>
                    <Dropdown.Item >{t("nav-bar.spanish")}</Dropdown.Item>
                    <Dropdown.Item >{t("nav-bar.french")}</Dropdown.Item>
                    <Dropdown.Item >{t("nav-bar.german")}</Dropdown.Item>
                    <Dropdown.Item >{t("nav-bar.italian")}</Dropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    )
}