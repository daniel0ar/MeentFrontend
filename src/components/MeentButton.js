import { useState, useEffect } from 'react';
import styles from "@/styles/meent.module.scss";
import meentContract from "../meent";
import web3 from "../web3";

const MeentButton = (event) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage("Mint Ticket");
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage('Waiting on transaction to succeed...');
    
    try {
      const accounts = await web3.eth.getAccounts();
      console.log(event);
      console.log(event.id);
      console.log(event.price);
      await meentContract.methods.buyTicket(event.event.id).send({
        from: accounts[0],
        value: web3.utils.toWei(event.event.price,'ether')
      });
      setMessage('Ticket bought successfully!');
    } catch (error) {
      setMessage('An error occurred while buying the ticket.');
      console.error(error);
    }
  };

  return (
    <div className={styles.link}>
      <a href="" className='btn' onClick={onSubmit}>{message}</a>
    </div>
  );
};

export default MeentButton;