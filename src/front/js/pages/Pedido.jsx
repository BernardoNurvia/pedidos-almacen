import React, { useState } from 'react';
import logo from './../../img/logo.png';
import background from './../../img/background.png';
import './../../styles/login.css';

const data = {
    "Canalización": [
        { name: "Ángulo externo moldura blanca", medidas: ["16x32", "40x40"] },
        { name: "Ángulo interno moldura blanca", medidas: ["16x32", "40x40"] },
        { name: "Tapa/final moldura blanca", medidas: ["16x32", "40x40"] },
        { name: "Canaleta blanca", medidas: ["16x32", "40x40"] },
        { name: "Tubo corrugado gris", medidas: ["25", "32"] },
        { name: "Tubo rígido gris", medidas: ["25", "32"] },
        { name: "Grapas cierre dientes", medidas: ["25", "32"] },
        { name: "Manguitos", medidas: ["25", "32"] },
        { name: "Tacos nylon", medidas: ["8X40"] },
        { name: "Arandela para", medidas: ["4x40"] },
        { name: "Tornillos", medidas: ["4,5X40"] }
    ],
    "Instalación Eléctrica": [
        { name: "Cinta aislante", medidas: ["Verde/amarilla", "Negra", "Azul", "Marrón", "Gris", "Blanca", "Rojo"] },
        { name: "Punteras 6mm", medidas: ["Verde", "Amarilla"] },
        { name: "Punteras tierra 6mm", medidas: [] },
        { name: "Regleta", medidas: ["2,5", "6", "10", "16", "25"] },
        { name: "Bornera SIGMA", medidas: [] },
        { name: "CABLE CAT6 U/UTP LSZH CPR DCA VIOLETA", medidas: [] },
        { name: "CABLE 6 mm/4mm", medidas: ["AZUL", "NEGRO", "VERDE y AMARILLO", "MARRÓN", "GRIS"] },
        { name: "Cable solar negro 6 mm", medidas: [] },
        { name: "Par macho/hembra MC4 (inc. Puntera metálica)", medidas: [] },
        { name: "Tornillo Goloso cabeza hexagonal M6X45 DIN571", medidas: [] },
        { name: "Caja de registro", medidas: ["95x75", "100x100", "143x168"] }
    ],
    "Anclaje": [
        { name: "Tamiz", medidas: ["16*85"] },
        { name: "Taco químico", medidas: [] },
        { name: "Impermeabilizante Líquido", medidas: ["Rojo Teja", "Blanco", "Gris"] }
    ],
    "Consumibles": [
        { name: "Aguaplast blanca", medidas: [] },
        { name: "Bridas", medidas: ["GRANDES", "PEQUEÑAS"] },
        { name: "Discos radial", medidas: [] },
        { name: "Disco para sierra", medidas: [] },
        { name: "Brocas", medidas: ["Tipo"] },
        { name: "Punta de Diamante", medidas: [] },
        { name: "Tiza", medidas: [] },
        { name: "Marcador permanente", medidas: [] },
        { name: "Brocha", medidas: [] },
        { name: "Bolsas de Basura", medidas: [] },
        { name: "Cinta Autovulcanizante", medidas: [] },
        { name: "Gel Pasacables", medidas: [] },
        { name: "Silicona Sikaflex", medidas: [] }
    ],
    "Epis": [
        { name: "Guantes", medidas: ["TALLA 8", "9", "10"] }
    ],
    "Estructura": [
        { name: "Varillas prearmadas", medidas: ["250mm", "300mm"] },
        { name: "Pletinas", medidas: [] },
        { name: "Tornillo Cabeza de Martillo", medidas: [] },
        { name: "Tuerca para Cabeza de Martillo", medidas: [] },
        { name: "Grapa media", medidas: ["Gris", "Negro"] },
        { name: "Grapa final", medidas: ["Gris", "Negro"] },
        { name: "Tornillo para grapas", medidas: [] },
        { name: "Tuerca para grapas", medidas: [] },
        { name: "Uniones", medidas: [] },
        { name: "Tornillos autotaladrantes", medidas: [] },
        { name: "Tapon perfil", medidas: ["Gris", "Negro"] }
    ]
};

const Pedido = () => {
    const [selectedFamily, setSelectedFamily] = useState(null);

    const handleSelect = (family) => {
        setSelectedFamily(family);
    };

    return (
        <div className='container p-3'>
            <div className='text-center m-auto p-3' style={{
                width: "20rem",
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: "5px"
            }}>
                <h1 className='text-border-white-blur'>Pedido</h1>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Selecciona
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {Object.keys(data).map((family, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="#" onClick={() => handleSelect(family)}>{family}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedFamily && (
                    <div className="mt-3">
                        <h2>{selectedFamily}</h2>
                        <ul>
                            {data[selectedFamily].map((item, index) => (
                                <li key={index}>
                                    {item.name} - Medidas: {item.medidas.join(", ")}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Pedido;
