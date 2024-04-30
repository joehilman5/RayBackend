import { ethers } from 'ethers';

const Navigation = ({ account, setAccount, setRayBalance, preRay, setDonated }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);

        const rayBalance = await preRay.rayBalance(account);
        setRayBalance(rayBalance);
        console.log(`Ray Balance: ${rayBalance}`);

        const donated = await preRay.amountDonated(account);
        setDonated(ethers.utils.formatUnits(donated, 0));

    }

    return (
        <nav>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;