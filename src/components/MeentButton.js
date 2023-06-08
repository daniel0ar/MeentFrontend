import { useState } from 'react';
import styles from "@/styles/meent.module.scss";
import meentContract from "../meent";
import web3 from "../web3";

const MeentButton = (event) => {
  const [message, setMessage] = useState('');

  const onSubmit = async () => {
    setMessage('Waiting on transaction to succeed...');
    
    try {
      const accounts = await web3.eth.getAccounts();
      await meentContract.methods.buyTicket(2).send({
        from: accounts[0],
        value: 100
      });
      setMessage('Ticket bought successfully!');
    } catch (error) {
      setMessage('An error occurred while buying the ticket.');
      console.error(error);
    }
  };

  return (
    <div className={styles.link}>
      <a href="" className='btn' onClick={onSubmit}>Mint Ticket</a>
      <h4>{message}</h4>
    </div>
  );
};

export default MeentButton;