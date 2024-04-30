import { useRef } from "react";

/* global BigInt */

const BuyRay = ({ provider, preRay }) => {

    const amountRef = useRef(null);

    const buyHandler = async () => {
        try {
            const signer = provider.getSigner();

            let amount = amountRef.current.value;
            console.log(`Amount: ${amount}`);
            if(!isNaN(amount) && amount > 0) {
                let adjust_amount = amount * (10 ** 18);
                console.log(`Adjusted Amount: ${adjust_amount}`);
                let action = await preRay.connect(signer).buyRay({value: adjust_amount});
                await action.wait();
                
            }else {
                console.log(`Input Proper Value!`);
            }

        }catch(err) {
            console.error(err);
        }
    }

    return (
        <div>
            <br /><br />
            <input type="text" ref={amountRef} />
            <button onClick={buyHandler}>Buy FUEL</button>
        </div>
    );
}

export default BuyRay;