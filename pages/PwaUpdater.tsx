// import { useEffect, useState } from "react";

// declare global {
//   interface Window {
//     wb: {
//       messageSkipWaiting(): void;
//       register(): void;
//       addEventListener(name: string, callback: () => unknown);
//     };
//   }
// }

// const PwaUpdater = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const onConfirmActivate = () => wb.messageSkipWaiting();

//   useEffect(() => {
//     wb.addEventListener("controlling", () => {
//       window.location.reload();
//     });

//     wb.addEventListener("waiting", () => setIsOpen(true));
//     wb.register();
//   }, []);

//   return (
//     <Modal
//       isOpen={isOpen}
//       setIsOpen={setIsOpen}
//       heading={"New version available!"}
//     >
//       <div>Hey, a new version is available! Please click below to update.</div>

//       <Button onClick={onConfirmActivate}>Reload and update</Button>
//       <Button oncClick={() => setIsOpen(false)}>Cancel</Button>
//     </Modal>
//   );
// };

// export default PwaUpdater;
