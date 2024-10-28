import React from "react";
import { Button } from "react-bootstrap";

const DashboardConsumer = () => {
    return (
        <div className="text-center mt-5">
            <h1>Dashboard</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Pedido Nº</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>01/10/24</td>
                        <td>A-00001</td>
                        <td>Entregado</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>04/10/24</td>
                        <td>A-00002</td>
                        <td>Procesando</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td >05/10/24</td>
                        <td>A-00003</td>
                        <td>Cancelado</td>
                    </tr>
                </tbody>
            </table>
<Button>Pedir</Button>
        </div>

    )
}
export default DashboardConsumer