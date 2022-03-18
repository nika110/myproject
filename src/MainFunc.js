// import React from 'react';
//
//
// const MainFunc = ({accounts, setAccounts}) => {
//   const isConnected = Boolean(accounts[0]);
//
//   async function connectAccount() {
//     if (window.ethereum) {
//       const accounts = await window.ethereum.request({
//         method:"eth_requestAccounts",
//       });
//       setAccounts(accounts);
//     }
//   }
//   return (
//     <section>
//     <div>
//       <div>Test</div>
//
//       <div>Test2</div>
//       {isConnected ? (
//         <p>Connected To metamask</p>
//       ) : (
//         <button onClick={connectAccount} >connect</button>
//       )}
//     </div>
//
//   </section>
//   );
// };
//
// export default MainFunc;
