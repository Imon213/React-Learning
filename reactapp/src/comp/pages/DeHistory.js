import "../css/DHistory.module.css"
import NavberD from '../NavberD';
import FooterD from '../FooterD';

const DeHistory = () => {

    return(
        <>
        <NavberD />
           <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Order no</th>
                            <th>Customer Name</th>
                            <th>Phone Number</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>#A3456W</td>
                            <td>Jenny Chan</td>
                            <td>019423435</td>
                            <td>$28</td>
                            <td>Cash on</td>
                            <td>On way</td>
                            <td>Accept</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>2</td>
                            <td>#B2253n</td>
                            <td>Jessica Warren</td>
                            <td>019423435</td>
                            <td>$20</td>
                            <td>Card</td>
                            <td>pending</td>
                            <td>Delete</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>3</td>
                            <td>#S5356k</td>
                            <td>Tony Frank</td>
                            <td>019423435</td>
                            <td>$16</td>
                            <td>Cash on</td>
                            <td>On way</td>
                            <td>Accept</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>4</td>
                            <td>#A3456W</td>
                            <td>jeremy Clark</td>
                            <td>01745345547</td>
                            <td>$28</td>
                            <td>Bkash</td>
                            <td>Shop</td>
                            <td>Accept</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>5</td>
                            <td>#K43554L</td>
                            <td>Roy Ed</td>
                            <td>0183435345</td>
                            <td>$50</td>
                            <td>Cash on</td>
                            <td>On way</td>
                            <td>Accept</td>
                        </tr>
                    </tbody>
                </table>
           </div>  
           <FooterD />     

        </>
    );
}

export default DeHistory;