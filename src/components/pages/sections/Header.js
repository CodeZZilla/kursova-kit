import React from "react";
import {Container, Image} from "react-bootstrap"

function Header(){

    return (
        <div className="header">
            <div className="header-inner">
                <div className="d-flex align-items-center logo">
                    <Container >
                        <h1>Інформаційний портал бугалтерії ЗСУ </h1>
                    </Container>
                </div>
            </div>
        </div>
    )
}
export default Header;